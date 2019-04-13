const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const daySchema = new Schema(
  {
    date: Date,
    morningActivity: String,
    meal: String,
    afternoonActivity: String,
    nap: Number
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Day = mongoose.model("Day", daySchema);
module.exports = Day;
