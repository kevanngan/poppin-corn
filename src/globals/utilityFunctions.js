import { IMAGE_PATH_ENDPOINT } from "../globals/globalVariables";

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
};

const isInMyList = (myList, id) => {
    if (myList.length === 0) return false;

    return myList.some(movie => movie.id === id);
}

const parseDate = (date) => {
    const dateObject = new Date(date);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };

    return dateObject.toLocaleDateString('en-US', options);
}

const createMovieObject = (movie) => {
    return {
        posterPath: movie.poster_path ? `${IMAGE_PATH_ENDPOINT}/w300${movie.poster_path}` : null,
        id: movie.id,
        title: movie.title.length > 25 ? movie.title.slice(0, 25) + '...' : movie.title,
        releaseDate: parseDate(movie.release_date),
        voteAverage: movie.vote_average.toFixed(1),
        overview: movie.overview.length > 80 ? movie.overview.slice(0, 80) + '...' : movie.overview, 
    }
}

export {
    scrollToTop,
    isInMyList,
    parseDate,
    createMovieObject,
};