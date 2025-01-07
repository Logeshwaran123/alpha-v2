import { Schema, model } from "mongoose";

const reviewSchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    stats: {
      like: {
        type: Number,
        default: 0,
      },
      disLike: {
        type: Number,
        default: 0,
      },
    },
  },
  { _id: false }
);

const foodSchema = new Schema({
  foodName: { type: String, required: true, unique: true },
  foodPrice: { type: Number, required: true },
  foodReview: {
    type: reviewSchema,
    default: { uid: "USER", message: "Hey! there" },
  },
});

const FoodModel = model("Food", foodSchema);

export default FoodModel;
