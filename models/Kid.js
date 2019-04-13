const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KidSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    age: Number,
    image: String,
    days: [{ type: Schema.ObjectId, ref: "Day" }]
  },

  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Kid = mongoose.model("Kid", KidSchema);
module.exports = Kid;
