const { body } = require("express-validator");

const createValidator = [
  body("designation", "Invalid does not Empty").not().isEmpty()
];

module.exports = {
  createValidator,
};
