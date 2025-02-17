import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import TaskRow from "../components/TaskRow";

const ViewTask = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    function loadTask() {
      axios
        .get(`${import.meta.env.VITE_API_URL}/task/viewtask`, {
          withCredentials: true,
        })
        .then((response) => {
          setTaskList(response?.data?.data?.taskList);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    loadTask();
  }, []);

  return (
    <>
      <Header onViewTask={true} />
      <div className="w-auto h-[80vh]   m-2">
        <table className="border-collapse w-3/4 shadow-lg bg-white">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3">Task Name</th>
              <th className="p-3">Priority</th>
              <th className="p-3">Due date</th>
              <th className="p-3">Done</th>
              <th className="p-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((task, index) => (
              <TaskRow
                key={index}
                taskName={task.taskName}
                priority={task.priority}
                dueDate={task.dueDate}
                done={task.isCompleted}
                taskId={task._id}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewTask;
