import express from "express";
import postroute from "./routes/post.route.js";
import authroute from "./routes/auth.route.js";
import userroute from "./routes/user.route.js"
import testroute from "./routes/test.route.js";
import chatroute from "./routes/chat.route.js"
import messageroute from "./routes/message.route.js";
import  cookieParser from "cookie-parser"
import cors from "cors";

const app = express();

app.use(cors({origin:process.env.CLIENT_URL,credentials:true}))

app.use(express.json())   //we can access parsed json data
app.use(cookieParser())   //we can access cookie(parse)
app.use("/api/auth",authroute);
app.use("/api/posts",postroute);
app.use("/api/users",userroute);
app.use("/api/test",testroute);
app.use("/api/chats",chatroute);
app.use("/api/message",messageroute);


app.use(cors({origin:process.env.CLIENT_URL,credentials:true}))

app.listen(4000,()=>{
    console.log(`Server is Running at PORT 4000`);
});

// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import postroute from "./routes/post.route.js";
// import authroute from "./routes/auth.route.js";
// import userroute from "./routes/user.route.js"
// import testroute from "./routes/test.route.js";
// import chatroute from "./routes/chat.route.js"
// import messageroute from "./routes/message.route.js";
// import  cookieParser from "cookie-parser"
// import cors from "cors";
// // import { connectDB } from "./config/db.js"

// const app = express();
// dotenv.config();

// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.DATABASE_URL);
//     console.log("Connected to mongoDB.");
//   } catch (error) {
//     throw error;
//   }
// };

// mongoose.connection.on("disconnected", () => {
//   console.log("mongoDB disconnected!");
// });
// connect();
// //middlewares
// app.use(cors({
//     origin: 'http://localhost:5173',
//     credentials: true
//   }));


// app.use(express.json())   //we can access parsed json data
// app.use(cookieParser())   //we can access cookie(parse)
// app.use("/api/auth",authroute);
// app.use("/api/posts",postroute);
// app.use("/api/users",userroute);
// app.use("/api/test",testroute);
// app.use("/api/chats",chatroute);
// app.use("/api/message",messageroute);


// app.listen(4000,()=>{
//     console.log(`Server is Running at PORT 4000`);
// });