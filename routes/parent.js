const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/User");
const Kid = require("../models/Kid");
const Day = require("../models/Day");

// GET route => to get the data of the day
router.get("/day/:date", async (req, res, next) => {
  console.log("coucou");

  if (!req.isAuthenticated()) {
    return res
      .status(401)
      .json({ message: "you need to login to see the days" });
  }

  try {
    const date = req.params.date; // 2019-05-22
    console.log("date", date);

    const kidid = req.user.kid;
    const kid = await Kid.findById(kidid).populate("days");
    console.log("kid", kid);

    const matchedDays = kid.days
      .map(day => JSON.parse(JSON.stringify(day)))
      .filter(day => new RegExp(date, "i").test(day.date));

    console.log("matchedDays", matchedDays);

    if (matchedDays.length <= 0) {
      res.status(404).json({ message: "no matching day" });
      return;
    }

    res.json(matchedDays[0]);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
});

module.exports = router;
