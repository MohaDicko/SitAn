
import axiosInstance from '../config/axiosInstance';
import handleError from '../config/errorHandler';

const zoneService = {
  
    getAll: async () => {
        try {
          const response = await axiosInstance.get(`/zones`);
          return response.data;
        } catch (error) {
          handleError(error);
        }
      },
  
    get: async (id) => {
    try {
      const response = await axiosInstance.get(`/zones/${id}`);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  create: async (data) => {
    try {
      const response = await axiosInstance.post('/zones', data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  update: async (id, data) => {
    try {
      const response = await axiosInstance.put(`/zones/${id}`, data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  delete: async (userId) => {
    try {
      const response = await axiosInstance.delete(`/zones/${userId}`);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },
};

export default zoneService;
