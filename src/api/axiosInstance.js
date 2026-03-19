import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://denty-white-website-back-end.vercel.app/api",
  withCredentials: true,
});

export default axiosInstance;

export const getAxiosWithToken = () => {
  const instance = axios.create({
    baseURL: "https://denty-white-website-back-end.vercel.app/api",
    withCredentials: true,
  });

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return instance;
};