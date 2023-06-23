import { useEffect, useRef, useState } from "react";
import socket from "../../utils/Socket/SocketIO";

const WatchViewModel = (item: any, user: any) => {
  const [showView, setShowView] = useState(false);
  const [videoStatus, setVideoStatus] = useState(false);
  const video: any = useRef(null);

  //180000
  useEffect(() => {
    const interval = setInterval(() => {
      getPositionMillis();
    }, 30000); // 3 minutos en milisegundos

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getPositionMillis = async () => {
    try {
      if (video.current) {
        const status = await video.current.getStatusAsync();
        console.log(status);
        const positionMillis = status.positionMillis;
        socket.connect();
        socket.emit("positionMillis", {
          user: user.id,
          id: item._id,
          positionMillis,
        });
      }
    } catch (error) {
      console.error("Error al obtener la posición del video:", error);
    }
  };

  return {
    showView,
    videoStatus,
    video,
    setVideoStatus,
    setShowView,
  };
};

export default WatchViewModel;
