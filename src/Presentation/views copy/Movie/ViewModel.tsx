import { useEffect, useRef, useState } from "react";
import { Movie } from "../../../Domain/entities/Movie";

const MovieViewModel = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [videoStatus, setVideoStatus] = useState(0);
  const video = useRef(null);
  const startPauseVideo = () => setIsStarted((prevState) => !prevState);
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  const [tabActive, setTabActive] = useState(0);

  // useEffect(() => {
  //   if (isStarted === false) {
  //     setIsStarted(true);
  //   }
  // }, []);

  return {
    isStarted,
    videoStatus,
    setVideoStatus,
    video,
    startPauseVideo,
    setIsStarted,
    movie,
    setMovie,
    tabActive,
    setTabActive,
  };
};

export default MovieViewModel;
