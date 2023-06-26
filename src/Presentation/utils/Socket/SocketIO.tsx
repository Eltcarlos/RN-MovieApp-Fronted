import io from "socket.io-client";

const socket = io("http://192.168.1.13:7000", {
  path: "/socket.io/",
  transports: ["websocket"],
});

export default socket;
