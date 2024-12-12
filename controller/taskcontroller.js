import Task from "../model/taskmodel.js";

const getAllTasks = async (req,res)=>{
    let tasks;
    try{
        tasks = await Task.find();
        if(tasks.length === 0){
            return res.status(404).json({message:"Tasks not found"});
        }
        return res.status(200).json(tasks);
    }catch(err){
        console.log(err);
        return res.status(500).json({error:"Server error"});
    }
}

const getSingleTask = async(req,res)=>{
    let id = req.params.taskid;
    let task;
    try {
        task = await Task.findById(id);
        if(!task){
            return res.status(404).json({message:"No task found with this id"});
        }
        return res.status(200).json(task);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Server error"});
    }
}

const createTask = async (req,res)=>{
    let taskname = req.body.taskname;
    try{
        let task = new Task({
            taskname:taskname
        })
        task.save();
        return res.status(201).json({message:"Task created succefully"});
  }catch(err){
        console.log(err);
        return res.status(500).json({error:"Server error"});
    }
}

const updateTask = async(req,res)=>{
    let id = req.params.taskid;
    let taskname = req.body.taskname;
    let task;
    try {
        task = await Task.findByIdAndUpdate(id,{taskname:taskname});
        if(!task){
            return res.status(404).json({message:"No task found with this id"});
        }
        return res.status(200).json({message:"Task updated successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Server error"});
    }
}

const deleteTask = async(req,res)=>{
    let id = req.params.taskid;
    let task;
    try{
        task = await Task.findByIdAndDelete(id);
        if(!task){
            return res.status(404).json({message:"No task found with this id"})
        }
        return res.status(200).json({message:"Task deleted successfully"});
    }catch(err){
        console.log(err);
        return res.status(500).json({error:"Server error"});
    }
}

export {getAllTasks,getSingleTask,createTask,updateTask,deleteTask};