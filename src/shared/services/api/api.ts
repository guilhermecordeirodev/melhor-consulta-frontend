// src/api/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: window.appConfig?.API_URL || "https://api.melhorconsulta.com",
});

export default api;