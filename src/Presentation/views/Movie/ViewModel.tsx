import { useEffect, useRef, useState } from "react";
import { Movie } from "../../../Domain/entities/Movie";

const MovieViewModel = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [videoStatus, setVideoStatus] = useState(0);
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
    showLines,
    openCloseDescription,
  };
};

export default MovieViewModel;