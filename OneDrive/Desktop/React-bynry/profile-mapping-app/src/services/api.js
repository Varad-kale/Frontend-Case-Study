// services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getProfiles = () => axios.get(`${API_URL}/profiles`);
export const getProfileById = (id) => axios.get(`${API_URL}/profiles/${id}`);
export const createProfile = (profile) => axios.post(`${API_URL}/profiles`, profile);
export const updateProfile = (id, profile) => axios.put(`${API_URL}/profiles/${id}`, profile);
export const deleteProfile = (id) => axios.delete(`${API_URL}/profiles/${id}`);
