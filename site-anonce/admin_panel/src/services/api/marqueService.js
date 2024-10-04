import axiosInstance from "../config/axiosInstance";

const uri = "/marques";

const marqueService = {
  getAll: async () => {
    const controller = new AbortController();
    return {
      request: axiosInstance.get(`${uri}`, { signal: controller.signal }),
      controller: controller,
    };
  },

  get: async (id) => {
    const controller = new AbortController();
    return {
      request: axiosInstance.get(`${uri}/${id}`, { signal: controller.signal }),
      controller: controller,
    };
  },

  create: async (data) => {
    const controller = new AbortController();
    return {
      request: axiosInstance.post(`${uri}`, data, {
        signal: controller.signal,
      }),
      controller: controller,
    };
  },

  update: async (id, data) => {
    const controller = new AbortController();
    return {
      request: axiosInstance.put(`${uri}/${id}`, data, {
        signal: controller.signal,
      }),
      controller: controller,
    };
  },

  delete: async (userId) => {

    const controller = new AbortController();
    return {
      request: axiosInstance.delete(`${uri}/${userId}`, {
        signal: controller.signal,
      }),
      controller: controller,
    };
  },
};

export default marqueService;
