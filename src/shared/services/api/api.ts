// src/api/api.ts
import axios from "axios";

const api = axios.create({
  // baseURL: window.appConfig?.API_URL || "https://api.melhorconsulta.com",
  //baseURL: "https://api.melhorconsulta.com"
  baseURL: "http://localhost:8080",
});

export default api;