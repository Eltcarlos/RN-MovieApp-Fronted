import { useEffect, useRef, useState } from "react";
import { Movie } from "../../../Domain/entities/Movie";
import socket from "../../utils/Socket/SocketIO";
import { GetSimilarMoviesUseCase } from "../../../Domain/useCases/movie/GerSimilarMovies";

const MovieViewModel = (user: any, item: Movie) => {
  const [isStarted, setIsStarted] = useState(false);
  const [videoStatus, setVideoStatus] = useState(0);
  const [similarMovies, setSimilarMovies] = useState({});
  const video = useRef(null);
  const startPauseVideo = () => setIsStarted((prevState) => !prevState);
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  const [tabActive, setTabActive] = useState(0);
  const [showLines, setShowLines] = useState(1);
  const openCloseDescription = () => {
    setShowLines(showLines === 1 ? 100 : 1);
  };

  useEffect(() => {
    if (isStarted === false) {
      setIsStarted(true);
    }
  }, []);

  const myListHandle = () => {
    socket.connect();
    socket.emit("my-list-add", {
      user: user.id,
      movieId: item._id,
    });
    socket.disconnect();
  };

  const getSimilarMovies = async () => {
    const result = await GetSimilarMoviesUseCase(item);
    setSimilarMovies(result);
  };

  return {
    isStarted,
    videoStatus,
    setVideoStatus,
    getSimilarMovies,
    similarMovies,
    video,
    startPauseVideo,
    setIsStarted,
    movie,
    setMovie,
    tabActive,
    setTabActive,
    showLines,
    openCloseDescription,
    myListHandle,
  };
};

export default MovieViewModel;
