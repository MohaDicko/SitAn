const Ville = require('../models/Ville');

// Créer une nouvelle ville
const createVille = async (req, res) => {
  try {
    const { designation } = req.body;
    const newVille = await Ville.create({ designation });
    res.status(201).json(newVille);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer toutes les villes
const getVilles = async (req, res) => {
  try {
    const villes = await Ville.findAll();
    res.status(200).json(villes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer une ville par ID
const getVilleById = async (req, res) => {
  try {
    const { id } = req.params;
    const ville = await Ville.findByPk(id);
    if (ville) {
      res.status(200).json(ville);
    } else {
      res.status(404).json({ error: 'Ville non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour une ville
const updateVille = async (req, res) => {
  try {
    const { id } = req.params;
    const { designation } = req.body;
    const [updated] = await Ville.update({ designation }, {
      where: { id }
    });
    if (updated) {
      const updatedVille = await Ville.findByPk(id);
      res.status(200).json(updatedVille);
    } else {
      res.status(404).json({ error: 'Ville non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer une ville
const deleteVille = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Ville.destroy({
      where: { id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Ville non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createVille,
  getVilles,
  getVilleById,
  updateVille,
  deleteVille
};