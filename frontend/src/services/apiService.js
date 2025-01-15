import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api', // Adjust the base URL as needed
});

export const getExampleData = async () => {
  try {
    const response = await api.get('/example');
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
