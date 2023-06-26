import io from "socket.io-client";

const socket = io("https://backend-movie-y8xq.onrender.com", {
  path: "/socket.io/",
  transports: ["websocket"],
});

export default socket;
