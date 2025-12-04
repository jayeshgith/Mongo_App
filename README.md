
# 💬 MongoApp

MongoApp is a simple **chat management web application** built using **Node.js**, **Express**, **MongoDB**, and **EJS**.  
It allows users to **create, view, edit, and delete chat messages** between two people through an easy-to-use web interface.




## ⚙️ Features
- 📝 **Create Chat** — Add a new chat message with sender and receiver.  
- 👀 **View Chats** — Display all stored chats from MongoDB.  
- ✏️ **Edit Chat** — Update the message content of an existing chat.  
- ❌ **Delete Chat** — Remove a chat from the database.  
- 🎨 **Responsive UI** — Clean, modern, and beginner-friendly design.

---

## 🧠 Tech Stack
| Technology | Purpose |
|-------------|----------|
| **Node.js** | Backend runtime environment |
| **Express.js** | Web application framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | ODM for MongoDB |
| **EJS** | Templating engine for dynamic HTML |
| **method-override** | Enables PUT and DELETE routes in forms |

---

## 📁 Project Structure


MongoApp/
├── models/
│   └── chat.js          # Mongoose schema for chats
├── views/
│   ├── index.ejs        # Displays all chats
│   ├── new.ejs          # Create a new chat
│   └── edit.ejs         # Edit existing chat
├── public/
│   └── style.css        # App styling
├── init.js              # Database seeding script
├── index.js             # Main Express application
└── package.json         # Project dependencies and scripts



---

## 🖥️ How to Run Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/jayeshgith/Mongo_App.git
cd Mongo_App

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start MongoDB

If MongoDB is installed locally:

```bash
mongod
```

Or, if using MongoDB Atlas, update your connection string inside `index.js`.

### 4️⃣ Run the app

```bash
npm start
```

### 5️⃣ Open in your browser

```
http://localhost:3000/chats
```

---

## 🌐 Deployment (Free Hosting)

You can deploy easily using **Render** or **Railway**:

1. Push your project to GitHub
2. Create a new Web Service on [Render.com](https://render.com)
3. Connect your GitHub repo
4. Add an environment variable:

   ```
   MONGO_URL = your_mongodb_connection_string
   ```
5. Deploy 🎉
6. Share your live link (e.g. `https://mongoapp.onrender.com/chats`)

---

## 📸 Screenshot

> *(Add your app screenshot here after deployment)*
> Example:

```markdown
![MongoApp Screenshot](assets/screenshot.png)
```

---

## 🎯 Project Purpose

MongoApp is a **learning project** for backend developers who want to:

* Learn how to use **Node.js with MongoDB**
* Understand **CRUD operations**
* Work with **EJS templates**
* Deploy a full-stack app online

---

