import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="font-space w-full h-[80vh] flex items-center justify-center flex-col ">
        <h1 className="text-2xl text-center sm:text-4xl">
          Best Way to Organize your task
        </h1>
        <Link
          to="/addtask"
          className="mt-6 bg-blue-400 rounded-4xl text-xl p-5 text-white cursor-pointer hover:bg-blue-500 sm:text-3xl"
        >
          Add Task
        </Link>
      </div>
    </>
  );
};

export default HomePage;
