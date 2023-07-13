// Import dependencies
const axios = require('axios');

// Base URL of the server
const baseURL = 'http://<alamat IP>:3000';

// Sign Up (Mendaftar)
const signUp = async (name, email, password) => {
  try {
    const response = await axios.post(`${baseURL}/signup`, { name, email, password });
    console.log(response.data);
  } catch (error) {
    console.error('Sign up error:', error.response.data);
  }
};

// Login (Masuk)
const login = async (email, password) => {
  try {
    const response = await axios.post(`${baseURL}/login`, { email, password });
    console.log(response.data);
  } catch (error) {
    console.error('Login error:', error.response.data);
  }
};

// Forgot Password (Lupa Password)
const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${baseURL}/forgot-password`, { email });
    console.log(response.data);
  } catch (error) {
    console.error('Forgot password error:', error.response.data);
  }
};

// Usage examples
signUp('adi septian', 'adiseptian@example.com', 'password123');
login('adiseptian@example.com', 'password123');
forgotPassword('adiseptian@example.com');
