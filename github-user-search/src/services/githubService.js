import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_GITHUB_API_URL,
});

export const searchUsers = async (query) => {
  try {
    const response = await api.get(`/search/users?q=${query}`);
    return response.data.items;
  } catch (error) {
    console.error('Error searching users:', error);
    return [];
  }
};