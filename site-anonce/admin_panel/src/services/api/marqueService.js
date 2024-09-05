
import axiosInstance from '../config/axiosInstance';
import handleError from '../config/errorHandler';

const marqueService = {
  
    getAll: async () => {
        try {
          const response = await axiosInstance.get(`/marques`);
          return response.data;
        } catch (error) {
          handleError(error);
        }
      },
  
    get: async (id) => {
    try {
      const response = await axiosInstance.get(`/marques/${id}`);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  create: async (data) => {
    try {
      const response = await axiosInstance.post('/marques', data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  update: async (id, data) => {
    try {
      const response = await axiosInstance.put(`/marques/${id}`, data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  delete: async (userId) => {
    try {
      const response = await axiosInstance.delete(`/marques/${userId}`);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },
};

export default marqueService;
