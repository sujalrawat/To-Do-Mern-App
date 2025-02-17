import React from "react";
import { useState } from "react";
import Header from "../components/Header.jsx";
import axios from "axios";

const AddTask = () => {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("high");
  const [dueDate, setDueDate] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/task/addtask`,
        {
          taskName: taskName,
          priority: priority,
          dueDate: dueDate,
        },
        { withCredentials: true }
      );
      setTaskName("");
      setDueDate("");
      setPriority("");
      alert("Task Added");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Header />
      <div className="w-full h-[80vh] flex justify-center items-center font-space">
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-5">
          <h3 className="text-3xl">Enter task name:</h3>
          <input
            className="border-2 rounded-2xl p-2"
            type="text"
            placeholder="task name"
            value={taskName}
            required
            onChange={(e) => setTaskName(e.target.value)}
          />
          <h3 className="text-3xl">Priority:</h3>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="border-2 rounded-2xl p-2 cursor-pointer"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <h3 className="text-3xl">Due Date:</h3>
          <input
            value={dueDate}
            className="border-2 rounded-2xl p-2 cursor-pointer"
            type="date"
            onChange={(e) => setDueDate(e.target.value)}
          />
          <input
            type="submit"
            value="Add"
            className="bg-blue-400 text-white p-3 rounded-3xl text-2xl hover:bg-blue-500 cursor-pointer"
          />
        </form>
      </div>
    </>
  );
};

export default AddTask;
