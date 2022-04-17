const Class = require("../models/Classes.model");
const express = require("express");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const classes = await Class.create(req.body);
    return res.status(200).send(classes);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const classes = await Class.find().lean().exec();
    return res.status(200).send(classes);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const classes = await Class.findById(req.params.id);
    return res.status(200).send(classes);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const classes = await Class.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(classes);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const classes = await Class.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(classes);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;
