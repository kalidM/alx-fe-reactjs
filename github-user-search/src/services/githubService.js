import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

export const searchUsers = async (searchTerm, filters = {}) => {
  try {
    // Construct the search query
    let query = `${searchTerm}`;
    if (filters.location) query += `+location:${filters.location}`;
    if (filters.minRepos) query += `+repos:>${filters.minRepos}`;
    if (filters.language) query += `+language:${filters.language}`;

    // Make the API request to GitHub's search endpoint
    const response = await axios.get(
      `${GITHUB_API_URL}/search/users?q=${encodeURIComponent(query)}`, 
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        },
        params: {
          per_page: filters.perPage || 10,
          page: filters.page || 1
        }
      }
    );

    // Get detailed information for each user
    const usersWithDetails = await Promise.all(
      response.data.items.map(async (user) => {
        const userDetails = await axios.get(`${GITHUB_API_URL}/users/${user.login}`);
        return {
          ...user,
          ...userDetails.data
        };
      })
    );

    return {
      users: usersWithDetails,
      totalCount: response.data.total_count
    };
  } catch (error) {
    console.error('GitHub API error:', error);
    throw new Error(error.response?.data?.message || 'Failed to search users');
  }
};

export const fetchUserRepos = async (username) => {
  try {
    const response = await axios.get(
      `${GITHUB_API_URL}/users/${username}/repos`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        },
        params: {
          sort: 'updated',
          per_page: 5
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('GitHub API error:', error);
    throw new Error('Failed to fetch user repositories');
  }
};
