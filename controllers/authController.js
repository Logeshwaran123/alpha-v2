import User from "../models/userModel.js";

export async function signUpUser(req, res) {
  try {
    await User.create(req.body);
    res.status(201).json({ status: "Success", message: "User Created!" });
  } catch (error) {
    res.status(400).json({ status: "Failed", message: error.message });
  }
}

export async function login(req, res) {
  try {
    res
      .status(201)
      .json({ status: "Success", message: "User Logged in Successfully" });
  } catch (error) {
    res.status(404).json({ status: "Failed", message: error.message });
  }
}
