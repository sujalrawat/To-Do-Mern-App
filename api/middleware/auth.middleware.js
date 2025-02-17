import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export default async function authMiddleware(req, res, next) {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decoded.id);

    req.user = user;
    // console.log(req.user);

    return next();
  } catch (err) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
}
