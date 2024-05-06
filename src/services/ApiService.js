import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

const ApiService = {
  getAllUsers: async (token) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      };
      const response = await axios.get(`${BASE_URL}/users`, config); // Fetch users from the correct endpoint
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  createUser: async (user, token) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      };
      const response = await axios.post(`${BASE_URL}/users`, user, config); // Create user using the correct endpoint
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  deleteUser: async (userId, token) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      };
      await axios.delete(`${BASE_URL}/users/${userId}`, config); // Delete user using the correct endpoint
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  changePassword: async (userId, newPassword, token) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      };
      await axios.put(`${BASE_URL}/users/change-password/${userId}`, { password: newPassword }, config); // Change password using the correct endpoint
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  assignUserToDatabase: async (userId, databaseId, token) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      };
      await axios.post(`${BASE_URL}/assign-to-database`, { userId, databaseId }, config); // Assign user to database using the correct endpoint
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};

export default ApiService;
