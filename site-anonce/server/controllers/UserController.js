const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

/**
 * Cette fonction gère l'enregistrement d'un nouvel utilisateur.
 * @param {Object} req - L'objet de requête HTTP.
 * @param {Object} res - L'objet de réponse HTTP.
 */
exports.register = async (req, res) => {
  try {
    const { username, password, fullname } = req.body;
    const HashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      password: HashedPassword,
      fullname,
    });
    await user.save();
    res.status(200).json({ user, message: "Utilisateur créé avec succès" });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Erreur interne du serveur",
    });
  }
};

/**
 * Cette fonction gère la connexion d'un utilisateur.
 * @param {Object} req - L'objet de requête HTTP.
 * @param {Object} res - L'objet de réponse HTTP.
 */
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "Identifiants invalides" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Identifiants invalides" });
    }
    const token = jwt.sign(
      {

        ...user.toObject(),
        Userid: user._id,
        
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );
    res.status(200).json({
      message: "Utilisateur connecté avec succès",
      token,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Erreur interne du serveur",
    });
  }
};


/**
 * Cette fonction récupère tous les utilisateurs.
 * @param {Object} req - L'objet de requête HTTP.
 * @param {Object} res - L'objet de réponse HTTP.
 */
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Erreur interne du serveur",
    });
  }
};

// Endpoint to update user details
// Endpoint to update user details
exports.updateUser = async (req, res) => {
  const { id } = req.params
  const userDetails = req.body;
  console.log(id)
  console.log(userDetails);
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      userDetails,
      { new: true, runValidators: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", user: updatedUser });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Endpoint to delete users
exports.deleteUser = async (req, res) => {
  const { id } = req.params
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal server error" });
  }
};