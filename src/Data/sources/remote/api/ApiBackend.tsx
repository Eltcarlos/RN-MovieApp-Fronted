import axios from "axios";

const ApiBackend = axios.create({
  baseURL: "http://192.168.1.13:7000/api",
  headers: {
    "Content-type": "application/json",
  },
});

export { ApiBackend };
