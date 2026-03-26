import axios from "axios";

export const api = axios.create({
  baseURL: process.env.BACKEND_URI,
  headers: { "Content-Type": "application/json" },
});
