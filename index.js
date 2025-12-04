const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
require("dotenv").config();

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// ------------------ DB CONNECTION ------------------
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.log("MongoDB Connection Error:", error);
  }
}

connectDB();

// ------------------ ROUTES ------------------

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", async (req, res) => {
  let { from, to, message } = req.body;
  let newChat = new Chat({
    from,
    to,
    message,
    created_at: new Date(),
  });

  await newChat.save();
  res.redirect("/chats");
});

app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { message: newMsg } = req.body;

  await Chat.findByIdAndUpdate(
    id,
    { message: newMsg },
    { runValidators: true, new: true }
  );
  res.redirect("/chats");
});

app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});

// HOME ROUTE
app.get("/", (req, res) => {
  res.send("MongoApp is running! Go to /chats");
});

// ------------------ SERVER (RENDER FIX) ------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
