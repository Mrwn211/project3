const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/User");
const Kid = require("../models/Kid");
const Day = require("../models/Day");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.post("/addkid", async (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "you need to login to add a kid" });
  }

  try {
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(req.body.firstname, salt);
    // Création du Kid

    const kid = await Kid.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      age: req.body.age
    });

    // Assignation du Kid à la creche

    await User.findByIdAndUpdate(req.user._id, {
      $push: { kid: kid._id }
    });

    // Creation du parent associé au Kid

    const newUser = new User({
      username: req.body.username,
      password: hashPass,
      accountType: "Parent",
      kid: kid._id
    });
    await newUser.save();
    res.status(201).json({ kid, newUser });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e });
  }
});

const uploader = require("../cloudinary.js");
router.post(
  "/upload/:kid",
  uploader.single("image"),
  async (req, res, next) => {
    // Check user is logged in
    if (!req.isAuthenticated()) {
      res
        .status(401)
        .json({ message: "You need to be logged in to upload a kid photo" });
      return;
    }

    // Check a file has been provided
    if (!req.file) {
      res.status(400).json({ message: "No file uploaded!" });
      return;
    }
    try {
      await Kid.findByIdAndUpdate(req.params.kid, {
        image: req.file.secure_url
      });
    } catch (error) {
      return res.status(500).json(error);
    }
    res.status(200).json({ url: req.file.secure_url });
  }
);

// GET route => to get all the kids
router.get("/kids", (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res
      .status(401)
      .json({ message: "you need to login to add see the admin page" });
  }
  User.findById(req.user._id)
    .populate("kid")
    .then(allTheKids => {
      res.json(allTheKids.kid);
    })
    .catch(err => {
      res.json(err);
    });
});

// POST route => Fill the day

router.post("/fillday/:kid_id", async (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "you need to login" });
  }

  try {
    const kidid = req.params.kid_id;
    const kid = await Kid.findById(kidid);

    if (!kid) {
      return res.status(404).json({ message: "no kid with that kid_id" });
    }

    const day = await Day.create({
      date: req.body.date,
      start: req.body.start,
      end: req.body.end,
      morningActivity: req.body.morningActivity,
      meal: req.body.meal,
      afternoonActivity: req.body.afternoonActivity,
      nap: req.body.nap
    });

    kid.days.push(day);
    await kid.save();

    res.status(200).json(day);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
