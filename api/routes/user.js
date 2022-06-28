<<<<<<< HEAD
const User = require("../models/User");
=======
const User = require('../models/User');
const CryptoJS = require('crypto-js');

>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
<<<<<<< HEAD
} = require("./verifyToken");

const router = require("express").Router();

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
=======
} = require('./verifyToken');

const router = require('express').Router();

//UPDATE
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
<<<<<<< HEAD
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
=======
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User has been deleted...');
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER
<<<<<<< HEAD
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
=======
router.get('/find/:id', verifyTokenAndAdmin, async (req, res) => {
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL USER
<<<<<<< HEAD
router.get("/", verifyTokenAndAdmin, async (req, res) => {
=======
router.get('/', verifyTokenAndAdmin, async (req, res) => {
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER STATS

<<<<<<< HEAD
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
=======
router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
<<<<<<< HEAD
          month: { $month: "$createdAt" },
=======
          month: { $month: '$createdAt' },
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
        },
      },
      {
        $group: {
<<<<<<< HEAD
          _id: "$month",
=======
          _id: '$month',
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
          total: { $sum: 1 },
        },
      },
    ]);
<<<<<<< HEAD
    res.status(200).json(data)
=======
    res.status(200).json(data);
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
