// services/emergencyService.js
import axios from 'axios';

const API_URL = 'https://your-backend-api.com/api/emergency';

export const sendSOS = async (userId) => {
  const response = await axios.post(`${API_URL}/sos`, { userId });
  return response.data;
};

export const fetchEmergencyContacts = async () => {
  const response = await axios.get(`${API_URL}/contacts`);
  return response.data;
};
