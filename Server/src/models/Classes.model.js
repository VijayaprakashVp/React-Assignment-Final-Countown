// Class's Model

const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
    Grade: { type: String, required: true },
    Section: { type: String, required: true },
    Subject: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

const Class = new mongoose.model("class", classSchema);

module.exports = Class;
