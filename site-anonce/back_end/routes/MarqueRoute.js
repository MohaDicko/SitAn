const express = require("express");
const {
  findAll,
  create,
  findById,
  updateById,
  deleteById,
} = require("../controllers/MarqueController");
const { ImageUpload } = require("../middleware/fileUploads/ImageUpload");
const { createValidator } = require("../validators/MarqueValidator");
const { validate } = require("../middleware/ValidatorMiddleware");
const { validRole } = require("../middleware/AuthMiddleware");

const router = express.Router();

// Route pour créer une nouvelle marque
router.post(
  "/",
  validRole(['admin']),
  validate(createValidator),
  ImageUpload.single("image"),
  create
);

// Route pour récupérer toutes les marques
router.get("/", findAll);

// Route pour récupérer une marque par ID
router.get("/:id", findById);

// Route pour mettre à jour une marque
router.put("/:id", updateById);

// Route pour supprimer une marque
router.delete("/:id", deleteById);

module.exports = router;
