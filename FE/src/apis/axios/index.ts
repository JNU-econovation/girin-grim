import axios from "axios";

export const Server = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: true,
});
