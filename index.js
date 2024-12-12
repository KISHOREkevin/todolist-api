import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import taskRoutes from "./routes/taskroutes.js";
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("Database connected"));

const app = express();
app.use(express.json());

app.use("/",taskRoutes);



app.listen(process.env.PORT,()=>console.log("Server started @ 3000...."))
