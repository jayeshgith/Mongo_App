const mongoose = require("mongoose");

const Chat = require("./models/chat.js");
main()
  .then(() => {
    console.log("Connected to MongoDB");
  })

  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(
    "mongodb+srv://manishkunthoor_db_user:JyU8KKVZMGYveuGO@mongoapp.ii8gstm.mongodb.net/TEST?appName=MongoAPP"
  );
}
let allChats = [
  {
    from: "Mani",
    to: "Bob",
    message: "Hello, Bob! How are you?",
    created_at: new Date(),
  },
  {
    from: "shyam",
    to: "ram",
    message: "Hi, how are you man!.",
    created_at: new Date(),
  },
  {
    from: "shraddha",
    to: "jaya",
    message: "Glad to hear that! Want to catch up later?",
    created_at: new Date(),
  },
  {
    from: "jaya",
    to: "shraddha",
    message: "Sure, let's meet at the cafe at 5 PM.",
    created_at: new Date(),
  },
];
Chat.insertMany(allChats)
.then((res) => {
  console.log(res);
});
