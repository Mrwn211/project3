const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chileSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    image: String
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
