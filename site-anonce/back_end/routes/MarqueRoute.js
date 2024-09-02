const express = require("express");
const {
  create,
  index,
  show,
  update,
  destroy,
} = require("../controllers/MarqueController");

const router = express.Router();

// Route pour créer une nouvelle marque
router.post("/marques", create);

// Route pour récupérer toutes les marques
router.get("/marques", index);

// Route pour récupérer une marque par ID
router.get("/marques/:id", show);

// Route pour mettre à jour une marque
router.put("/marques/:id", update);

// Route pour supprimer une marque
router.delete("/marques/:id", destroy);

module.exports = router;
