
import axiosInstance from '../config/axiosInstance';
import handleError from '../config/errorHandler';

const modeleService = {
  
    getAll: async () => {
        try {
          const response = await axiosInstance.get(`/modeles`);
          return response.data;
        } catch (error) {
          handleError(error);
        }
      },
  
    get: async (id) => {
    try {
      const response = await axiosInstance.get(`/modeles/${id}`);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  create: async (data) => {
    try {
      const response = await axiosInstance.post('/modeles', data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  update: async (id, data) => {
    try {
      const response = await axiosInstance.put(`/modeles/${id}`, data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  delete: async (userId) => {
    try {
      const response = await axiosInstance.delete(`/modeles/${userId}`);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },
};

export default modeleService;
