import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export async function userLogin(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    const isPassword = await user.comparePassword(password);
    if (!isPassword) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

    res.cookie("token", token);

    console.log("User logged in");
    res.status(200).json({
      status: "success",
      token: token,
      data: user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: err.message });
  }
}

export async function userSignUp(req, res) {
  try {
    const userData = req.body;
    const newUser = new User(userData);
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "24h",
    });

    console.log("User registered");
    res.status(200).json({
      status: "success",
      token: token,
      data: newUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: err.message });
  }
}

export async function userLogout(req, res) {
  res.clearCookie("token");
  console.log("User logged out");
  res.status(200).json({ message: "Logged out" });
}

export async function userProfile(req, res) {
  res.status(200).json(req.user);
}
