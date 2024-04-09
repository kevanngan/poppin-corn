import { IMAGE_PATH_ENDPOINT } from "../globals/globalVariables";

const Hero = ({ movie }) => {

    return (
        <div className="heroContainer">
            <div className="heroImageContainer">
                {movie.backdrop_path && (<img className="heroImage" src={`${IMAGE_PATH_ENDPOINT}/w1280${movie.backdrop_path}`} alt={movie.title} />)}
            </div>

            <div className="heroTextContainer">
                <h3>NOW PLAYING:</h3>
                <h1>{movie.title}</h1>
            </div>
        </div>
    )
}

export default Hero;