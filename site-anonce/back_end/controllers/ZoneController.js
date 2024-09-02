const Zone = require('../models/Zone');

// Créer une nouvelle zone
const createZone = async (req, res) => {
  try {
    const { designation } = req.body;
    const newZone = await Zone.create({ designation });
    res.status(201).json(newZone);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer toutes les zones
const getZones = async (req, res) => {
  try {
    const zones = await Zone.findAll();
    res.status(200).json(zones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer une zone par ID
const getZoneById = async (req, res) => {
  try {
    const { id } = req.params;
    const zone = await Zone.findByPk(id);
    if (zone) {
      res.status(200).json(zone);
    } else {
      res.status(404).json({ error: 'Zone non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour une zone
const updateZone = async (req, res) => {
  try {
    const { id } = req.params;
    const { designation } = req.body;
    const [updated] = await Zone.update({ designation }, {
      where: { id }
    });
    if (updated) {
      const updatedZone = await Zone.findByPk(id);
      res.status(200).json(updatedZone);
    } else {
      res.status(404).json({ error: 'Zone non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer une zone
const deleteZone = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Zone.destroy({
      where: { id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Zone non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createZone,
  getZones,
  getZoneById,
  updateZone,
  deleteZone
};