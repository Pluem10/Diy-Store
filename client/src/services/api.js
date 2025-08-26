import axios from "axios"; // ถูกต้อง

import TokenService from "./token.service.js"; // ต้องมี .js ต่อท้าย

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json", // คุยกันเป็น JSON
  },
});

// Add interceptor to request object
instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken(); // ดึง token จาก login หรือที่เก็บไว้
    if (token) {
      config.headers["x-access-token"] = token; // ใส่ token เข้าไปใน header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
