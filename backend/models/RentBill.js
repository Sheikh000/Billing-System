const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RentBillSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  billType: { type: String, default: "Rent" },
  tenantName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  emailAddress: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  rentAmount: { type: Number, required: true },
  rentalPeriodStart: { type: Date, required: true },
  rentalPeriodEnd: { type: Date, required: true },
  maintenanceFees: { type: Number, default: 0 },
  latePaymentFees: { type: Number, default: 0 },
  totalAmount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("RentBill", RentBillSchema);
