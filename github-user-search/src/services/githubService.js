import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const searchUsers = async ({ query, location, minRepos }) => {
  try {
    let q = query;
    if (location) q += ` location:${location}`;
    if (minRepos) q += ` repos:>${minRepos}`;
    
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q },
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    });

    // Fetch additional details for each user
    const usersWithDetails = await Promise.all(
      response.data.items.map(async (user) => {
        const userDetails = await axios.get(user.url);
        return {
          ...user,
          ...userDetails.data
        };
      })
    );

    return usersWithDetails;
  } catch (error) {
    console.error('GitHub API error:', error);
    throw new Error('Failed to search users');
  }
};
