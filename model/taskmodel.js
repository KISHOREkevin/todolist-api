import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    taskname:String
})

const Task = mongoose.model("task",taskSchema);

export default Task;