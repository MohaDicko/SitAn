
import axiosInstance from '../config/axiosInstance';
import handleError from '../config/errorHandler';

const villeService = {
  
    getAll: async () => {
        try {
          const response = await axiosInstance.get(`/villes`);
          return response.data;
        } catch (error) {
          handleError(error);
        }
      },
  
    get: async (id) => {
    try {
      const response = await axiosInstance.get(`/villes/${id}`);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  create: async (data) => {
    try {
      const response = await axiosInstance.post('/villes', data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  update: async (id, data) => {
    try {
      const response = await axiosInstance.put(`/villes/${id}`, data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  delete: async (userId) => {
    try {
      const response = await axiosInstance.delete(`/villes/${userId}`);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },
};

export default villeService;
