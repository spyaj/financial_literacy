import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8001/api",
  timeout: 60000,
  headers: { "Content-Type": "application/json" },
});

