
import axiosInstance from '../config/axiosInstance';
import handleError from '../config/errorHandler';

const paysService = {
  
    getAll: async () => {
        try {
          const response = await axiosInstance.get(`/pays`);
          return response.data;
        } catch (error) {
          handleError(error);
        }
      },
  
    get: async (id) => {
    try {
      const response = await axiosInstance.get(`/pays/${id}`);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  create: async (data) => {
    try {
      const response = await axiosInstance.post('/pays', data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  update: async (id, data) => {
    try {
      const response = await axiosInstance.put(`/pays/${id}`, data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  delete: async (userId) => {
    try {
      const response = await axiosInstance.delete(`/pays/${userId}`);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },
};

export default paysService;
