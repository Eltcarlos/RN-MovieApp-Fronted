import axios from "axios";

const ApiBackend = axios.create({
  baseURL: "https://backend-movie-y8xq.onrender.com/api",
  headers: {
    "Content-type": "application/json",
  },
});

export { ApiBackend };
