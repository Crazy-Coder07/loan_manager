const express = require("express");
const {
applyLoansController
} = require("../controllers/applyLoan");

const router = express.Router();


router.post("/create-loan", applyLoansController);


module.exports = router;