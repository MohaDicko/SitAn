const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");

const secret = require(__dirname + '/../config/jwt.json')['secret-key']

exports.login = async (req, res) => {
    
  const { phoneNumber, password } = req.body;

  try {

    const user = await User.findOne({
      where: {
        [Op.or]: [{ phoneNumber: phoneNumber }],
      },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user.id, phoneNumber: user.phoneNumber, role: user.role },
      secret,
      {
        expiresIn: "1d",
      }
    );

    return res.json({
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        dateNaissance: user.dateNaissance,
        phoneNumber: user.phoneNumber,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

exports.register = async (req, res) => {
  const { firstName, password, lastName, email, phoneNumber, dateNaissance } =
    req.body;

  const existingUser = await User.findOne({
    where: {
      [Op.or]: [{ phoneNumber: phoneNumber }],
    },
  });

  if (existingUser) {
    return res.status(400).json({
      message: "phoneNumber already exists",
    });
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const newUser = await User.create({
    email,
    password: hashedPassword,
    firstName,
    lastName,
    phoneNumber,
    role: "internaute",
  });

  return res.json({
    data: {
      id: newUser.id,
      email: newUser.email,
      role: newUser.role,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      dateNaissance: newUser.dateNaissance,
      phoneNumber: newUser.phoneNumber,
    },
  });
};
