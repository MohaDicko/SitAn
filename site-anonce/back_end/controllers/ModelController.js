const Model = require('../models/Model');

// Créer un nouveau modèle
const createModel = async (req, res) => {
  try {
    const { marqueId, designation } = req.body;
    const newModel = await Model.create({ marqueId, designation });
    res.status(201).json(newModel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer tous les modèles
const getModels = async (req, res) => {
  try {
    const models = await Model.findAll();
    res.status(200).json(models);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer un modèle par ID
const getModelById = async (req, res) => {
  try {
    const { id } = req.params;
    const model = await Model.findByPk(id);
    if (model) {
      res.status(200).json(model);
    } else {
      res.status(404).json({ error: 'Modèle non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un modèle
const updateModel = async (req, res) => {
  try {
    const { id } = req.params;
    const { marqueId, designation } = req.body;
    const [updated] = await Model.update({ marqueId, designation }, {
      where: { id }
    });
    if (updated) {
      const updatedModel = await Model.findByPk(id);
      res.status(200).json(updatedModel);
    } else {
      res.status(404).json({ error: 'Modèle non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer un modèle
const deleteModel = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Model.destroy({
      where: { id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Modèle non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createModel,
  getModels,
  getModelById,
  updateModel,
  deleteModel
};