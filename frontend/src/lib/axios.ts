import axios from "axios";

export const api = axios.create({
  baseURL: process.env.BACKEND_URI || "http://localhost:4000",
  headers: { "Content-Type": "application/json" },
});
