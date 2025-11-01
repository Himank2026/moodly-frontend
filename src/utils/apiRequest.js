import axios from "axios";

const apiRequest = axios.create({
  baseURL: process.env.REACT_APP_Backend_API, // <-- This must match your .env file
  withCredentials: true,
});

export default apiRequest;