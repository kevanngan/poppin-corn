import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import useMyListHandler from '../hooks/useMyListHandler';
import { REQUEST_OPTIONS, IMAGE_PATH_ENDPOINT } from "../globals/globalVariables";
import { parseVideos, createMovieObject, isInMyList } from "../globals/utilityFunctions";
import AddToListBtn from "./AddToListBtn";

const Hero = ({ movie, myList }) => {
    const [trailer, setTrailer] = useState(null);
    const { handleMyListClick } = useMyListHandler();

    // Fetch trailer video when component mounts or movie prop changes
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                // Construct URL to fetch videos for the movie
                const videosLink = `https://api.themoviedb.org/3/movie/${movie.id}/videos`;
                const response = await fetch(videosLink, REQUEST_OPTIONS);
                const videos = await response.json();
                const trailerVideo = parseVideos(videos);
                setTrailer(trailerVideo);
            } catch (error) {
                // Log any errors that occur during fetching
                console.error("Error fetching videos:", error);
            }
        };

        fetchVideos();
    }, [movie]);

    // Function to open the trailer video in a new tab
    const openTrailer = () => {
        if (trailer) {
            const youtubeUrl = `https://www.youtube.com/watch?v=${trailer}`;
            window.open(youtubeUrl, '_blank');
        }
    };

    const movieCardObj = createMovieObject(movie);

    return (
        <div className="heroContainer">
            <div className="heroImageContainer">
                {movie.backdrop_path && (
                    <img className="heroImage" src={`${IMAGE_PATH_ENDPOINT}/w1280${movie.backdrop_path}`} alt={movie.title} />
                )}
            </div>

            <div className="heroTextContainer">
                <h3>NOW PLAYING:</h3>
                <h1>{movie.title}</h1>

                <div className="utilityBtnContainer">
                    <button className="playTrailerBtn" onClick={trailer ? openTrailer : null}>PLAY TRAILER</button>
                    <div className="infoAddContainer">
                        <div className="infoBtn">
                            <Link to={`/movie/${movie.id}`}>
                                <FontAwesomeIcon icon={faCircleInfo} />
                            </Link>
                        </div>
                        <AddToListBtn size="1x" movieCardObj={movieCardObj} isInMyList={isInMyList(myList, movie.id)} handleClick={handleMyListClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;