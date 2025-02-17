import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

const UserSignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/signup`,
        { username: userName, email: email, password: password }
      );
      console.log(response);
      navigate("/addtask");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Header />
      <div className="font-space w-full h-[80vh] flex items-center justify-center">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="bg-[#f1f1f1] w-[60vh] h-[60vh]  flex items-center justify-center flex-col gap-5 rounded-2xl"
        >
          <h3 className="text-3xl">Name</h3>
          <input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            value={userName}
            placeholder="name"
            className="text-center border-2 rounded-xl p-1"
          />
          <h3 className="text-3xl">Email</h3>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="email"
            className="text-center border-2 rounded-xl p-1"
          />
          <h3 className="text-3xl">Password</h3>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="text-center border-2 rounded-xl p-1"
            type="password"
            placeholder="password"
          />
          <button
            className="bg-slate-400 rounded-2xl p-1 text-xl text-white cursor-pointer hover:bg-slate-500 sm:text-2xl"
            type="submit"
          >
            Register
          </button>
          <p className="text-[12px]">
            Already have account?{" "}
            <Link to="/login" className="text-blue-400 cursor-pointer">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default UserSignUp;
