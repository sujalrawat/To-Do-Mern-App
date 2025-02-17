import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";

const UserLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/login`,
        { email: email, password: password },
        { withCredentials: true }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/addtask");
    } catch (err) {
      alert(JSON.parse(err.request.response).msg);
    }
  }

  return (
    <>
      <Header />
      <div className="font-space w-full h-[80vh] flex items-center justify-center">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="bg-[#f1f1f1] w-[50vh] h-[50vh]  flex items-center justify-center flex-col gap-5 rounded-2xl"
        >
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
            type="submit"
            to="/addtask"
            className="bg-slate-400 rounded-2xl p-1 text-xl text-white cursor-pointer hover:bg-slate-500 sm:text-2xl"
          >
            Login
          </button>
          <p className="text-[12px]">
            Don't have a account?{" "}
            <Link to="/signup" className="text-blue-400 cursor-pointer">
              Create account
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default UserLogin;
