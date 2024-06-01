// API CONSTANTS
const BASE_URL = 'https://nomoreparties.co/v1/wff-cohort-13';
const AUTHORIZATION_KEY = '70d4b308-094b-447b-90dc-851238a69354';

// Helper function to handle responses
const handleResponse = async (response) => {
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
    }
    return response.json();
};

// Helper function to make API calls
const makeRequest = async (uri, method = "GET", data = null) => {
    const options = {
        method,
        headers: {
            'Authorization': AUTHORIZATION_KEY,
            'Content-Type': 'application/json'
        }
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(`${BASE_URL}/${uri}`, options);
        return await handleResponse(response);
    } catch (error) {
        console.error(`${method} request failed:`, error);
        throw error;
    }
};

