import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error.response?.status === 404 
        ? 'User not found' 
        : 'Error fetching user data',
    };
  }
};