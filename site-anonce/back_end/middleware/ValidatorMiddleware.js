const { validationResult } = require("express-validator");

exports.validate = (rules) => {
  return [
    ...rules,
    async (req, res, next) => {
      try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({
            errors: errors
              .formatWith((error) => ({ [error.path]: error.msg }))
              .array(),
          });
        }
        next();
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
      }
    },
  ];
};
