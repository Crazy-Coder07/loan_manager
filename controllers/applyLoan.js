const mongoose = require("mongoose");
const loanModel = require("../models/applyLoan");

exports.applyLoansController = async (req, res) => {
  try {
    const {
      fullName,
      loanTenure,
      loanAmount,
      employmentStatus,
      reasonForLoan,
      employmentAddress,
    } = req.body;

    if (
      !fullName ||
      !loanTenure ||
      !loanAmount ||
      !employmentStatus ||
      !reasonForLoan ||
      !employmentAddress
    ) {
      return res.status(400).send({
        success: false,
        message: "Please provide all required fields",
      });
    }

    const newLoanApplication = new loanModel({
      fullName,
      loanTenure,
      loanAmount,
      employmentStatus,
      reasonForLoan,
      employmentAddress,
    });

    await newLoanApplication.save();

    return res.status(201).send({
      success: true,
      message: "Loan application created successfully",
      loan: newLoanApplication,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while creating loan application",
      error,
    });
  }
};
