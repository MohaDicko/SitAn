const MarqueService = require("../services/MarqueService");

const MarqueController = {
  findAll: async (req, res, next) => {
    try {
      const {
        page = 1,
        limit = 3,
        orderBy = "designation",
        sortBy = "asc",
        keyword,
      } = req.query;
      const data = await MarqueService.findAll({
        page: +page ? +page : 1,
        limit: +limit ? +limit : 3,
        orderBy,
        sortBy,
        keyword,
      });
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },

  findById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await MarqueService.findById(id);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },

  create: async (req, res, next) => {
    if (!req.file) {
      // Handle case where file is not provided or is rejected by Multer
      return res
        .status(400)
        .json({ error: "File upload failed or no file provided." });
    }
    try {
      const { designation } = req.body;
      const data = await MarqueService.create({
        designation: designation,
        imagePath: req.file.path,
      });
      return res.json({ success: true, data });
    } catch (error) {
      fs.unlink(req.file.path, (unlinkErr) => {
        if (unlinkErr) {
          console.error("Failed to delete uploaded file:", unlinkErr);
        }
      });
      next(error);
    }
  },

  updateById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { designation } = req.body;
      const data = await MarqueService.updateById(id, { designation });
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },

  deleteById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await MarqueService.deleteById(id);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = MarqueController;
