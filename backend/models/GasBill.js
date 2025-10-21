const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GasBillSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  billType: { type: String, default: "Gas" },
  meterNumber: { type: String, required: true },
  consumerName: { type: String, required: true },
  readingDate: { type: Date, required: true },
  prevReading: { type: Number, required: true },
  currReading: { type: Number, required: true },
  totalConsumption: { type: Number, required: true },
  costPerUnit: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("GasBill", GasBillSchema);
