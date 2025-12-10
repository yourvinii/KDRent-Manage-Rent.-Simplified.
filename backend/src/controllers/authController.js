import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User Alredy Exists" });
    }

    //hashed Password
    const hashedPass = await bcrypt.hash(password, 10);

    //create user

    await User.create({
      name,
      email,
      password: hashedPass,
    });

    return res.json({ success: true, message: "SignUp successful" });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Check User
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "User not found!" });
    }

    //Compare Password
    const ok = await bcrypt.compare(password, user.password);

    if (!ok) {
      return res.status(400).json({ success: false, message: "Incorrect Password" });
    }

    //Generate Token

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

    return res.json({ success: true, message: "Login Successful" });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export default {
  signup,
  login,
};
