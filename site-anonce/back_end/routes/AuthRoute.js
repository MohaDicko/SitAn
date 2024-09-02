const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");

const {
  loginValidator,
  registerValidator,
} = require("../validators/AuthValidator");
const { validate } = require("../middleware/ValidatorMiddleware");

router.post("/register", validate(registerValidator), AuthController.register);
router.post("/login", validate(loginValidator) , AuthController.login);
module.exports = router;
