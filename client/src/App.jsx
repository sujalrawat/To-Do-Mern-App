import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddTask from "./pages/AddTask";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogout from "./pages/UserLogout.jsx";
import ViewTask from "./pages/ViewTask.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/addtask"
        element={
          <UserProtectWrapper>
            <AddTask />
          </UserProtectWrapper>
        }
      />
      <Route
        path="/viewtask"
        element={
          <UserProtectWrapper>
            <ViewTask />
          </UserProtectWrapper>
        }
      />
      <Route
        path="/logout"
        element={
          <UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
        }
      />

      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignUp />} />
    </Routes>
  );
};

export default App;
