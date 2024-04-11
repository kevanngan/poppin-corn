import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_KEY, POPULAR_ENDPOINT, NOW_PLAYING_ENDPOINT, TOP_RATED_ENDPOINT, UPCOMING_ENDPOINT } from '../globals/globalVariables';
import { isInMyList, createMovieObject } from '../globals/utilityFunctions';
import MovieCard from './MovieCard';

function MovieTabs({ myList }) {
    const [currentTab, setCurrentTab] = useState('popular'); // State variable to track the currently active tab
    const [movies, setMovies] = useState([]); // State variable to store the list of movies fetched from the API
    const tabsRefs = useRef({}); // Reference object to store references to tab elements
    const [displayCount, setDisplayCount] = useState(12); // State variable to control the number of movies displayed on the page
    const [currentPage, setCurrentPage] = useState(1); // State variable to keep track of the current page number for pagination
    const { tab } = useParams(); // Get the tab parameter from the URL using useParams hook
    const tabContentRef = useRef(null); // Reference object to store reference to the tab content element for scrolling
    const navigate = useNavigate(); // useNavigate hook to navigate programmatically to different URLs

    const tabs = {
        popular: POPULAR_ENDPOINT,
        now_playing: NOW_PLAYING_ENDPOINT,
        top_rated: TOP_RATED_ENDPOINT,
        upcoming: UPCOMING_ENDPOINT,
    };

    // useEffect to set tab based on url, and scroll to tab from external page
    useEffect(() => {
        if (tab && tabs[tab]) {
            setCurrentTab(tab);
        } else {
            navigate('/'); // Redirect to a valid tab if URL param is invalid
            return;
        }
        // Delayed scroll to account for dynamic content loading
        setTimeout(() => {
            if (tabContentRef.current) {
                const position = tabContentRef.current.getBoundingClientRect().top + window.pageYOffset;
                const offset = 90; // Adjust as needed
                window.scrollTo({ top: position - offset, behavior: 'smooth' });
            }
        }, 100); // Adjust delay as necessary
    }, [tab, currentTab, navigate]);

    // useEffect to fetch and update movie api data
    useEffect (() => {
        const fetchMovies = async () => {
            const endpoint =`${tabs[currentTab]}&api_key=${API_KEY}&page=${currentPage}`;
            try {
                const response = await fetch(endpoint);
                const data = await response.json();
                const transformedMovies = data.results.map(createMovieObject);
                setMovies(prevMovies => {
                    const allMovies = [...prevMovies, ...transformedMovies];

                    const uniqueMovies = allMovies.filter((movies, index, self) => index === self.findIndex((m) => m.id === movies.id));
                    return uniqueMovies;
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchMovies();
    }, [currentTab, currentPage]);
}

export default MovieTabs;