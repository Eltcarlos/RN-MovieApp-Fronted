import io from "socket.io-client";

const socket = io("http://192.168.1.13:7000", {
  autoConnect: false,
  reconnection: true,
  reconnectionAttempts: 3,
  timeout: 5000,
  transports: ["websocket"],
});
export default socket;
