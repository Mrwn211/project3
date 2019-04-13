const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/User");
const Kid = require("../models/Kid");
const Day = require("../models/Day");

// GET route => to get the data of the day
router.get("/day/:id", (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res
      .status(401)
      .json({ message: "you need to login to see the days" });
  }
  const day = Day.findById(req.params.id)
    .then(day => {
      res.json(day);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
