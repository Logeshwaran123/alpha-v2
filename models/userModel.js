import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
  uname: {
    type: String,
    unique: true,
    required: [true, "User Name is a Mandatory field"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "User must have a Email"],
  },
  password: {
    type: String,
    required: [true, "User must have a Password"],
  },
  confirmPassword: {
    type: String,
    required: [true, "Confirm Password is a mandatory field."],
  },
  bio: {
    type: String,
    default: "About the User",
    maxLength: 60,
  },
});

userSchema.pre("save", async function (next) {
  // CREATE and SAVE
  this.password = await bcrypt.hash(this.password, 8);
  const result = await bcrypt.compare(this.confirmPassword, this.password);
  if (result) {
    // Making Field Undefined will make the data to not being posted in the DB.
    this.confirmPassword = undefined;
    next();
  } else {
    throw { message: "Password and Confirm Didn't Match" };
  }
  // if (this.password === this.confirmPassword) {
  //   next();
  // }

  // this.password = await bcrypt.hash(this.password, 12);
  // console.log(this.password);
  // console.log("User Not Created Successfully");
});

const User = model("User", userSchema);

export default User;
