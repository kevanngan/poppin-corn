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

    useEffect(() => {
        const fetchVideos = async() => {
            const videosLink = `https://api.themoviedb.org/3/movie/${movie.id}/videos`;
            const response = await fetch(videosLink, REQUEST_OPTIONS);
            const videos = await response.json();
            
            const trailerVideo = parseVideos(videos);
            
            setTrailer(trailerVideo);
        }
    
        fetchVideos();
    }, [movie]);

    const openTrailer = () => {
        if (trailer) {
            let youtubeUrl = `https://www.youtube.com/watch?v=${trailer}`;
            window.open(youtubeUrl, '_blank');
        }
    }
    
    const movieItemObj = createMovieObject(movie);

    return (
        <div className="heroContainer">
            <div className="heroImageContainer">
                {movie.backdrop_path && (<img className="heroImage" src={`${IMAGE_PATH_ENDPOINT}/w1280${movie.backdrop_path}`} alt={movie.title} />)}
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
                        <AddToListBtn size="1x" movieItemObj={movieItemObj} isInMyList={isInMyList(myList, movie.id)} handleClick={handleMyListClick} />    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;