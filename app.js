import express from "express";
import postRoute from "./route/post.route.js";
import authRoute from "./route/auth.route.js";

const app = express();
app.use(express.json());

// console.log("test");

app.use("/api/test",(req,res)=>{
  res.send("it works");
})

app.use("/api/posts", postRoute);

app.use("/api/auth", authRoute);

app.listen(8800, ()=>{
  console.log("server is running on port 8800");
})