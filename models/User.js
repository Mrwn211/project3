const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    // 👇
    type: {
      accountType: String,
      enum: ["Parent", "Childcare"]
    },
    // 👆
    kid: { type: Schema.ObjectId, ref: "Kid" }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
