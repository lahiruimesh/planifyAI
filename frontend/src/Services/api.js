import axios from "axios";

// set your backend base URL
const api = axios.create({
  baseURL: "http://localhost:5238/api", // 👈 replace with your backend port
});

export default api;
