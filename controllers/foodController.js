import FoodModel from "../models/foodModel.js";

export async function getUsers(req, res) {
  try {
    const foods = await FoodModel.find({}, "foodName foodPrice");
    res.status(200).json({ status: "Success", data: foods });
  } catch (err) {
    res.status(404).json({ status: "Failed", message: "Data Not Found" });
  }
}

export async function postUser(req, res) {
  try {
    const food = await FoodModel.create(req.body);
    res.status(201).json({ status: "Success", data: food });
  } catch (err) {
    res.status(400).json({ status: "Failed", message: err.message });
  }
}
