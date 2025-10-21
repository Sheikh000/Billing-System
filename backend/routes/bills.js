const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

// Import Bill Models
const ElectricityBill = require("../models/ElectricityBill");
const GasBill = require("../models/GasBill");
const RentBill = require("../models/RentBill");

// @route   POST /api/bills/electricity
// @desc    Save an electricity bill
// @access  Private
router.post("/electricity", auth, async (req, res) => {
  try {
    const newBill = new ElectricityBill({ ...req.body, user: req.user.id });
    const bill = await newBill.save();
    res.json(bill);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST /api/bills/gas
// @desc    Save a gas bill
// @access  Private
router.post("/gas", auth, async (req, res) => {
  try {
    const newBill = new GasBill({ ...req.body, user: req.user.id });
    const bill = await newBill.save();
    res.json(bill);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST /api/bills/rent
// @desc    Save a rent bill
// @access  Private
router.post("/rent", auth, async (req, res) => {
  try {
    const newBill = new RentBill({ ...req.body, user: req.user.id });
    const bill = await newBill.save();
    res.json(bill);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET /api/bills/history
// @desc    Get all bills for a user
// @access  Private
router.get("/history", auth, async (req, res) => {
  try {
    const electricityBills = await ElectricityBill.find({
      user: req.user.id,
    }).sort({ date: -1 });
    const gasBills = await GasBill.find({ user: req.user.id }).sort({
      date: -1,
    });
    const rentBills = await RentBill.find({ user: req.user.id }).sort({
      date: -1,
    });

    const allBills = [...electricityBills, ...gasBills, ...rentBills];

    // Sort all combined bills by date descending
    allBills.sort((a, b) => b.date - a.date);

    res.json(allBills);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
