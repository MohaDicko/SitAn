const { Op } = require("sequelize");

const NotFoundException = require("../exceptions/NotFoundException");
const BadRequestException = require("../exceptions/BadRequestException");
const { Marque } = require("../models");

const MarqueService = {
  findAll: ({ page, limit, orderBy, sortBy, keyword }) =>
    new Promise(async (resolve, reject) => {
      try {
        const query = {};

        if (keyword) {
          query.designation = { [Op.substring]: keyword };
          query.id = { [Op.substring]: keyword };
        }

        const queries = {
          offset: (page - 1) * limit,
          limit,
        };

        if (orderBy) {
          queries.order = [[orderBy, sortBy]];
        }

        const data = await Marque.findAndCountAll({
          where: query,
          ...queries,
        });

        const res = {
          totalPages: Math.ceil(data?.count / limit),
          totalItems: data?.count,
          data: data?.rows,
        };

        resolve(res);
      } catch (error) {
        reject(error);
      }
    }),

  findById: (id) =>
    new Promise(async (resolve, reject) => {
      try {
        const data = await Marque.findByPk(id, {
          include: [{ model: Address, as: "addresses" }],
        });
        if (!data) throw new NotFoundException("Not found marque!");

        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),

  create: ({ designation, imagePath = "" }) =>
    new Promise(async (resolve, reject) => {
      try {
        /* const marque = await Marque.findOne({ where: { email } });
        if (marque)
          throw new BadRequestException(`Email ${email} already exists`); */

        const data = await Marque.create({ designation, image: imagePath });
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),

  updateById: (id, data) =>
    new Promise(async (resolve, reject) => {
      try {
        const marque = await Marque.findByPk(id);
        if (!marque) throw new NotFoundException("Not found marque!");

        const data = await Marque.update(data, {
          where: {
            id,
          },
        });

        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),

  deleteById: (id) =>
    new Promise(async (resolve, reject) => {
      try {
        const marque = await Marque.findByPk(id);
        if (!marque) throw new NotFoundException("Not found marque!");

        const data = await Marque.destroy({
          where: {
            id,
          },
        });

        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
};

module.exports = MarqueService;
