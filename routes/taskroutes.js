import express from "express";
import {getAllTasks,getSingleTask,createTask,updateTask,deleteTask} from "../controller/taskcontroller.js";
const taskRoutes = express.Router();

taskRoutes.get("/tasks",getAllTasks);
taskRoutes.get("/:taskid",getSingleTask);
taskRoutes.post("/create-task",createTask);
taskRoutes.put("/update-task/:taskid",updateTask);
taskRoutes.delete("/delete-task/:taskid",deleteTask);

export default taskRoutes;