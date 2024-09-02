const Marque = require('../models/Marque');

// Créer une nouvelle marque
const createMarque = async (req, res) => {
  try {
    const { image, designation } = req.body;
    const newMarque = await Marque.create({ image, designation });
    res.status(201).json(newMarque);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer toutes les marques
const getMarques = async (req, res) => {
  try {
    const marques = await Marque.findAll();
    res.status(200).json(marques);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer une marque par ID
const getMarqueById = async (req, res) => {
  try {
    const { id } = req.params;
    const marque = await Marque.findByPk(id);
    if (marque) {
      res.status(200).json(marque);
    } else {
      res.status(404).json({ error: 'Marque non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour une marque
const updateMarque = async (req, res) => {
  try {
    const { id } = req.params;
    const { image, designation } = req.body;
    const [updated] = await Marque.update({ image, designation }, {
      where: { id }
    });
    if (updated) {
      const updatedMarque = await Marque.findByPk(id);
      res.status(200).json(updatedMarque);
    } else {
      res.status(404).json({ error: 'Marque non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer une marque
const deleteMarque = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Marque.destroy({
      where: { id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Marque non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createMarque,
  getMarques,
  getMarqueById,
  updateMarque,
  deleteMarque
};