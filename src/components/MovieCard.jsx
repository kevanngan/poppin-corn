import React from 'react';
import { Link } from 'react-router-dom';

import useMyListHandler from '../hooks/useMyListHandler';
import AddToListBtn from './AddToListBtn';
import Rating from './Rating';

function MovieCard({ movie, isInMyList}) {
    const { handleMyListClick } = useMyListHandler();

    return (
        <div className="movieCard" key={movie.id}>
            {movie.posterPath && (<img src={movie.posterPath} alt={`Poster for ${movie.title}`} />)}
            <div className="overlay">
            <Rating rating={movie.voteAverage} />
                <p>{movie.releaseDate}</p>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                <div className="bottom-buttons">
                    <Link to={`/movie/${movie.id}`}>More Info</Link>
                    <AddToListBtn
                        size="1x"
                        movieCardObj={movie}
                        isInMyList={isInMyList}
                        handleClick={handleMyListClick}
                    />
                </div>
            </div>
        </div>
    );
}

export default MovieCard;