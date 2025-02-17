import Task from "../models/task.model.js";

export async function addTask(req, res) {
  try {
    // console.log(req.body);
    const newTask = req.body;

    let userTask = await Task.findOne({ userId: req.user._id });

    // console.log(userTask);
    if (!userTask) {
      userTask = await Task.create({
        taskList: [newTask],
        userId: req.user._id,
      });
    } else {
      const isDuplicate = userTask.taskList.some(
        (task) => task.taskName === newTask.taskName
      );

      if (isDuplicate) {
        return res.status(400).json({
          status: "fail",
          msg: "Task name must be unique within your task list.",
        });
      }

      userTask.taskList.push(newTask);
      await userTask.save();
    }

    console.log("task added");

    res.status(200).json({
      status: "success",
      data: userTask,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      error: err,
    });
  }
}

export async function viewTask(req, res) {
  try {
    const userTask = await Task.findOne({ userId: req.user._id });
    res.status(200).json({
      status: "success",
      data: userTask,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      error: err,
    });
  }
}

export async function deleteTask(req, res) {
  try {
    const taskId = req.params;

    const taskDocument = await Task.findOne({ userId: req.user._id });

    if (!taskDocument) {
      return res.status(404).json({
        status: "fail",
        msg: "Task not found",
      });
    }

    taskDocument.taskList.forEach((task, index) => {
      if (task._id == taskId.id) {
        taskDocument.taskList.splice(index, 1);
      }
    });

    await taskDocument.save();

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      error: err,
    });
  }
}
