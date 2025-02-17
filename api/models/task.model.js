import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  taskList: [
    {
      taskName: {
        type: String,
        required: true,
      },
      priority: {
        type: String,
        enum: ["high", "medium", "low"],
        default: "high",
      },
      dueDate: {
        type: Date,
        default: function () {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return today;
        },
      },
      isCompleted: {
        type: Boolean,
        default: false,
      },
    },
  ],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Task = mongoose.model("Task", taskSchema);
export default Task;
