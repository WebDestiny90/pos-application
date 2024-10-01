const User = require("../models/User.js");
const router = require("express").Router();
const bcrypt = require("bcryptjs");


//! register
router.post("/register", async (req, res) => {
  try {
    const { userName, userEmail, userPassword } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userPassword, salt);
    const newUser = new User({ userName, userEmail, userPassword: hashedPassword });
    await newUser.save();
    res.status(200).json("A new user created successfully.")
  } catch (error) {
    res.status(400).json(error)
  }
});

//! login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ userEmail: req.body.userEmail });
    !user && res.status(404).send({ error: "User not found" });
    const validPassword = await bcrypt.compare(req.body.userPassword, user.userPassword);
    if (!validPassword) {
      res.status(403).json("Invalid password")
    } else {
      res.status(200).json(user)
    }
  } catch (error) {
    res.status(400).json(error)
  }
});


module.exports = router;