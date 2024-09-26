import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_TMDB_API_URL,
  headers: {
    accept: import.meta.env.VITE_TMDB_API_ACCEPT_TOKEN,
    Authorization: `Bearer + ${import.meta.env.VITE_TMDB_API_AUTHORIZATION_KEY}`,
  },
});
