import User from "../models/userModel.js";

export async function signUp(req, res) {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      status: "Success",
      message: "User Created Successfully",
      data: user,
    });
  } catch (error) {
    res.status(404).json({ status: "Failed", message: error.message });
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
