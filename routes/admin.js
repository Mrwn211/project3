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
  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(req.body.firstName, salt);

  const kid = await Kid.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age
  });

  const newUser = new User({
    username: req.body.username,
    password: hashPass,
    accountType: "Parent",
    kid: kid._id
  });

  try {
    await newUser.save();
  } catch (error) {
    res.status(500).json(err);
  }
  res.status(200).json(kid);
});

const uploader = require("../cloudinary.js");
router.post(
  "/upload/:kid",
  uploader.single("photo"),
  async (req, res, next) => {
    // Check user is logged in
    if (!req.isAuthenticated()) {
      res
        .status(401)
        .json({ message: "You need to be logged in to upload your avatar" });
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
    res.status(200).json("OK");
  }
);

// GET route => to get all the kids
router.get("/kids", (req, res, next) => {
  Kid.find()
    .then(allTheKids => {
      res.json(allTheKids);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
