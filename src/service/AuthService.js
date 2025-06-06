
import axios from 'axios';


const API_URL = 'https://your-backend-api.com/api/auth';

const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};
// src/service/AuthService.js
export const getAllUsers = async () => {
  return {
    data: [
      { _id: "1", name: "John Doe", email: "john@example.com", role: "user" },
      { _id: "2", name: "Admin User", email: "admin@example.com", role: "admin" },
    ],
  };
};

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

const logout = () => {
  localStorage.removeItem('user');
};

const loginUser = async (credentials) => {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  return response.json();
};

const authService = {
  login,
  register,
  logout,
  loginUser
};

export default authService;
