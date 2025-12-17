const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    phone: { type: String, required: true }, // ✅ add phone
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctor", doctorSchema);
