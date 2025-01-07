import { Schema, model } from "mongoose";

const userSchema = new Schema({
  uname: {
    type: String,
    required: [true, "User Name is a Mandatory field"],
  },
  email: {
    type: String,
    required: [true, "User must have a Email"],
  },
  password: {
    type: String,
    required: [true, "User must have a Password"],
  },
  confirmPassword: {
    type: String,
  },
  bio: {
    type: String,
    default: "About the User",
    maxLength: 60,
  },
});

const User = model("User", userSchema);

export default User;
