const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ElectricityBillSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  billType: { type: String, default: "Electricity" },
  meterNumber: { type: String, required: true },
  consumerName: { type: String, required: true },
  month: { type: Date, required: true },
  modeOfPayment: { type: String, required: true },
  units: { type: Number, required: true },
  rate: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ElectricityBill", ElectricityBillSchema);
