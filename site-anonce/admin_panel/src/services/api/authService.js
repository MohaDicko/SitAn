import axiosInstance from "../config/axiosInstance";
import handleError from "../config/errorHandler";

const authService = {
  login: (data) => {
    return axiosInstance.post("/auth/login", data);
  },
};

export default authService;
