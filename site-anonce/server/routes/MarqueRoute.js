const express = require('express');
const {
  createMarque,
  getMarques,
  getMarqueById,
  updateMarque,
  deleteMarque
} = require('../controllers/MarqueController');

const router = express.Router();

// Route pour créer une nouvelle marque
router.post('/marques', createMarque);

// Route pour récupérer toutes les marques
router.get('/marques', getMarques);

// Route pour récupérer une marque par ID
router.get('/marques/:id', getMarqueById);

// Route pour mettre à jour une marque
router.put('/marques/:id', updateMarque);

// Route pour supprimer une marque
router.delete('/marques/:id', deleteMarque);

module.exports = router;