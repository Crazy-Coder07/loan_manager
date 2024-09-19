const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
    },
    loanTenure: {
      type: Number,
      required: [true, "Loan tenure is required"],
    },
    loanAmount: {
      type: Number,
      required: [true, "Loan amount is required"],
    },
    employmentStatus: {
      type: String,
      required: [true, "Employment status is required"],
    },
    reasonForLoan: {
      type: String,
      required: [true, "Reason for loan is required"],
    },
    employmentAddress: {
      type: String,
      required: [true, "Employment address is required"],
    },
  },
  { timestamps: true }
);

const loanModel = mongoose.model("Loan", LoanSchema);

module.exports = loanModel;
