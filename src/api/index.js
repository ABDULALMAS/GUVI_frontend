import axios from 'axios';
import jwt_decode from "jwt-decode";

const API = axios.create({
    baseURL: "https://guvi-backend-klay.onrender.com",
  });

  API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).token
      }`;
    }
    return req;
  });

  export const fetchProfile = () => API.get("/profile");

  export const createProfile = (newProfile) => API.post("/profile", newProfile)
  export const updateProfile = (id, updatedProfile) =>
  API.patch(`/profile/${id}`, updatedProfile);
  export const signIn = (FormData) => API.post("/users/signin", FormData);
  export const signUp = (FormData) => API.post("/users/signup", FormData);