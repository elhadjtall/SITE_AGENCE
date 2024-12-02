import axios from 'axios';


// URL de base de l'API du backend
const API_BASE_URL = 'http://localhost:3000/redis';

// Récupération de tous les immeubles
export const getAllImmeubles = async () => {
  const response = await axios.get(`${API_BASE_URL}/view`);
  return response.data;
};


// Ajout d'un nouvel immeuble
export const addImmeuble = async (immeuble) => {
  const response = await axios.post(`${API_BASE_URL}/add`, immeuble);
  return response.data;
};

export const deleteImmeuble = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/delete/${id}`);
  return response.data;
};
