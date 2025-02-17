import axios from "axios";
import React, { useEffect } from "react";
import { AiOutlineCheckCircle, AiTwotoneCloseCircle } from "react-icons/ai";

const TaskRow = ({ taskName, priority, dueDate, done, taskId, index }) => {
  const [isDone, setIsDone] = React.useState("p-4 text-center");
  const [flagDone, setFlagDone] = React.useState(false);
  function handleClick() {
    if (flagDone) {
      setIsDone("p-4 text-center");
      setFlagDone(!flagDone);
    } else {
      setIsDone("p-4 text-center text-green-500");
      setFlagDone(!flagDone);
    }
  }

  async function handleDelete() {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/task/deletetask/${taskId}`,
        { withCredentials: true }
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <tr className="border-b hover:bg-gray-100">
        <td className="p-4 text-center">{taskName}</td>
        <td className="p-4 text-center">{priority}</td>
        <td className="p-4 text-center">
          {new Date(dueDate).toISOString().slice(0, 10)}
        </td>
        <td className={isDone} onClick={handleClick}>
          <AiOutlineCheckCircle className="w-6 h-6" />
        </td>
        <td onClick={handleDelete} className="p-4 text-center ">
          <AiTwotoneCloseCircle className="w-6 h-6 " />
        </td>
      </tr>
    </>
  );
};

export default TaskRow;
