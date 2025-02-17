import React from "react";
import { Link } from "react-router-dom";

export const Header = ({ onViewTask }) => {
  return (
    <div className=" m-2 h-16 flex justify-between items-center p-3 font-space">
      <Link to="/" className="text-xl md:text-3xl">
        To-Do App
      </Link>

      {!localStorage.getItem("token") ? (
        <div className="flex gap-3">
          <Link
            to="/login"
            className="bg-[#f1f1f1] w-20 p-1.5 rounded-2xl cursor-pointer hover:bg-slate-300 text-center"
          >
            Login
          </Link>
          <Link
            to="signup"
            className="bg-[#f1f1f1] w-20 p-1.5 rounded-2xl cursor-pointer hover:bg-slate-300 text-center"
          >
            Sign Up
          </Link>
        </div>
      ) : (
        <div className="flex gap-3">
          {onViewTask ? (
            <Link
              to="/addtask"
              className="bg-[#f1f1f1] w-20 p-1.5 rounded-2xl cursor-pointer hover:bg-slate-300 text-center"
            >
              Add
            </Link>
          ) : (
            <Link
              to="/viewtask"
              className="bg-[#f1f1f1] w-20 p-1.5 rounded-2xl cursor-pointer hover:bg-slate-300 text-center"
            >
              My Task
            </Link>
          )}
          <Link
            to="/logout"
            className="bg-[#f1f1f1] w-20 p-1.5 rounded-2xl cursor-pointer hover:bg-slate-300 text-center"
          >
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
