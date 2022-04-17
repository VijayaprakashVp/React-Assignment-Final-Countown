// Teacher's Model

const mongoose = require("mongoose");

const TeachersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    img: { type: String, required: true },
    class_id: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "class",
        required: true,
      },
    ],
  },
  { timestamps: true, versionKey: false },
);

const Teacher = new mongoose.model("teacher", TeachersSchema);

module.exports = Teacher;
