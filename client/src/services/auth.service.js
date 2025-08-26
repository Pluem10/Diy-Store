import api from "./api.js";
import TokenService from "./token.service";

const BASE_URL = import.meta.env.VITE_BASE_URL; // http://localhost:5000/api
const AUTH_API = import.meta.env.VITE_AUTH_API; // /v1/auth

// Login user
const login = async (username, password) => {
  const url = `${BASE_URL}${AUTH_API}/signin`; // full URL
  const response = await api.post(url, { username, password });
  if (response.data.token) {
    TokenService.setUser(response.data); // เก็บ token ลง localStorage
  }
  return response;
};

// Register user
const register = async (username, name, email, password) => {
  const url = `${BASE_URL}${AUTH_API}/signup`;
  return api.post(url, { username, name, email, password });
};

// Logout user
const logout = () => {
  TokenService.removeUser();
};

const AuthService = { register, login, logout };
export default AuthService;
