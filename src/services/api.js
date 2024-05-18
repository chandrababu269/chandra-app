import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/';

// Function to register a user
export const register = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}register`, { username, password });
        if (response && response.data) {
            return response.data;
        } else {
            console.error('Unexpected response:', response);
            return null;
        }
    } catch (error) {
        console.error('Error during registration:', error);
        if (error.response && error.response.data && error.response.data.message) {
            return error.response.data.message; // Return error message from backend
        } else {
            return 'Failed to register. Please try again.'; // Default error message
        }
    }
};



// Function to login a user
export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}login`, { username, password });
        return response.data;  // Assuming the backend returns the user data on successful login
    } catch (error) {
        console.error('Error during login:', error.response.data);
        return null;
    }
};
