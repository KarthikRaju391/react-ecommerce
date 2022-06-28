<<<<<<< HEAD
const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
=======
const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

//REGISTER
router.post('/register', async (req, res) => {
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

<<<<<<< HEAD
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong credentials!");
=======
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json('Wrong credentials!');
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    OriginalPassword !== req.body.password &&
<<<<<<< HEAD
      res.status(401).json("Wrong credentials!");
=======
      res.status(401).json('Wrong credentials!');
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
<<<<<<< HEAD
      {expiresIn:"3d"}
=======
      { expiresIn: '3d' }
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
    );

    const { password, ...others } = user._doc;

<<<<<<< HEAD
    res.status(200).json({...others, accessToken});
=======
    res.status(200).json({ ...others, accessToken });
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
