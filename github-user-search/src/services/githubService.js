import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const searchUsers = async (searchParams) => {
  try {
    // Construct query string from search parameters
    let query = searchParams.username || '';
    if (searchParams.location) query += ` location:${searchParams.location}`;
    if (searchParams.minRepos) query += ` repos:>${searchParams.minRepos}`;
    
    // Make request to GitHub Search API
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q: query,
        per_page: 10 // Limit to 10 results by default
      },
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    // Get detailed information for each user
    const usersWithDetails = await Promise.all(
      response.data.items.map(async (user) => {
        const userResponse = await axios.get(user.url);
        return {
          id: user.id,
          login: user.login,
          avatar_url: user.avatar_url,
          html_url: user.html_url,
          ...userResponse.data
        };
      })
    );

    return usersWithDetails;
  } catch (error) {
    console.error('GitHub API error:', error);
    throw new Error(error.response?.data?.message || 'Failed to search users');
  }
};

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
