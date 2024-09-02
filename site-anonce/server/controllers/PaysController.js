const Pays = require('../models/Pays');

// Créer un nouveau pays
const createPays = async (req, res) => {
  try {
    const { designation } = req.body;
    const newPays = await Pays.create({ designation });
    res.status(201).json(newPays);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer tous les pays
const getPays = async (req, res) => {
  try {
    const pays = await Pays.findAll();
    res.status(200).json(pays);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer un pays par ID
const getPaysById = async (req, res) => {
  try {
    const { id } = req.params;
    const pays = await Pays.findByPk(id);
    if (pays) {
      res.status(200).json(pays);
    } else {
      res.status(404).json({ error: 'Pays non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un pays
const updatePays = async (req, res) => {
  try {
    const { id } = req.params;
    const { designation } = req.body;
    const [updated] = await Pays.update({ designation }, {
      where: { id }
    });
    if (updated) {
      const updatedPays = await Pays.findByPk(id);
      res.status(200).json(updatedPays);
    } else {
      res.status(404).json({ error: 'Pays non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer un pays
const deletePays = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Pays.destroy({
      where: { id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Pays non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPays,
  getPays,
  getPaysById,
  updatePays,
  deletePays
};