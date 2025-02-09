import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const END_POINTS = {
  GET_USER: "/users/user",
  LOGIN: "/users/login",
  SIGNUP: "/users/signup",
};

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export { api, END_POINTS };
