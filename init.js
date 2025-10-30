const mongoose = require('mongoose');

const Chat = require("./models/chat.js");
main()
  .then(() => {
    console.log("Connected to MongoDB");
  })

  .catch((err) => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/MongoAPP");
    

}
let allChats = [{
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
    }, {
    from: "jaya",
    to: "shraddha",
    message: "Sure, let's meet at the cafe at 5 PM.",
    created_at: new Date(),

    }]
Chat.insertMany(allChats)

    .then((res) => { console.log(res) });
    