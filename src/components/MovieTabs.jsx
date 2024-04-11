import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_KEY, 
         POPULAR_ENDPOINT, 
         NOW_PLAYING_ENDPOINT, 
         TOP_RATED_ENDPOINT, 
         UPCOMING_ENDPOINT 
} from '../globals/globalVariables';
import { isInMyList, createMovieObject } from '../globals/utilityFunctions';
import MovieCard from './MovieCard';

function MovieTabs({ myList }) {
    // State variables
    const [currentTab, setCurrentTab] = useState('popular'); // Track the currently active tab
    const [movies, setMovies] = useState([]); // Store the list of movies fetched from the API
    const [displayCount, setDisplayCount] = useState(12); // Control the number of movies displayed on the page
    const [currentPage, setCurrentPage] = useState(1); // Keep track of the current page number for pagination

   // References
   const tabsRefs = useRef({}); // Object to store references to tab elements
   const tabContentRef = useRef(null); // Object to store reference to the tab content element for scrolling

   // Hooks
   const { tab } = useParams(); // Get the tab parameter from the URL using useParams hook
   const navigate = useNavigate(); // useNavigate hook to navigate programmatically to different URLs

    // API endpoints
    const tabs = {
        popular: POPULAR_ENDPOINT,
        now_playing: NOW_PLAYING_ENDPOINT,
        top_rated: TOP_RATED_ENDPOINT,
        upcoming: UPCOMING_ENDPOINT,
    };

    // called when tabs changed to update url
    const changeTab = (newTab) => {
        setCurrentTab(newTab);
        navigate(`/${newTab}`); // Change the URL to the new tab
    };

    // Effect to set tab based on URL and scroll to tab from external page
    useEffect(() => {
        if (tab && tabs[tab]) {
            setCurrentTab(tab);
        } else {
            navigate('/');
            return;
        }
        // Delayed scroll to account for dynamic content loading
        setTimeout(() => {
            if (tabContentRef.current) {
                const position = tabContentRef.current.getBoundingClientRect().top + window.pageYOffset;
                const offset = 90;
                window.scrollTo({ top: position - offset, behavior: 'smooth' });
            }
        }, 100);
    }, [tab, currentTab, navigate]);


    // Effect to fetch and update movie data based on current tab and page number
    useEffect(() => {
        const fetchMovies = async () => {
            const endpoint = `${tabs[currentTab]}&api_key=${API_KEY}&page=${currentPage}`;
            try {
                const response = await fetch(endpoint);
                const data = await response.json();
                const transformedMovies = data.results.map(createMovieObject);
                setMovies(prevMovies => {
                    const allMovies = [...prevMovies, ...transformedMovies];
                    const uniqueMovies = allMovies.filter((movie, index, self) => index === self.findIndex((m) => m.id === movie.id));
                    return uniqueMovies;
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchMovies();
    }, [currentTab, currentPage, tabs]);

    // Effect to reset page number to 1 when switching tabs
    useEffect(() => {
        setMovies([]);
        setCurrentPage(1);
        setDisplayCount(12);
    }, [currentTab]);

    // Effect to scroll the active tab into view when it's selected
    useEffect(() => {
        const activeTabElement = tabsRefs.current[currentTab];
        if (activeTabElement) {
            activeTabElement.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest', // vertical align
                inline: 'center'  // horizontal align
            });
        }
    }, [currentTab]);

    // Function to check if the tab is currently active
    const isActive = (tab) => currentTab === tab;

    // Function triggered when the "See More" button is clicked
    const handleSeeMore = () => {
        setCurrentPage(prevPage => prevPage + 1);
        setDisplayCount(prevDisplayCount => prevDisplayCount + 12);
    }

    // Render the MovieTabs component
    return (
        <div>
            <div className="tab-content" ref={tabContentRef}>
                <div className="tabs-container">
                    <div className="tabs">
                        {Object.keys(tabs).map((tab, index) => (
                            <button
                                key={tab}
                                ref={element => (tabsRefs.current[tab] = element)}
                                className={isActive(tab) ? 'active' : ''}
                                onClick={() => changeTab(tab)}
                            >
                                {tab.replace('_', ' ').toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="tab-content">
                {movies.length > 0 ? (
                    movies.slice(0, displayCount).map((movie) => (
                        <MovieCard key={movie.id} movie={movie} isInMyList={isInMyList(myList, movie.id)} />
                    ))
                ) : (
                    <p>No movies found!</p>
                )}
            </div>
            <div>
                {displayCount < movies.length && (
                    <button className="see-more-btn" onClick={handleSeeMore}>See More</button>
                )}
            </div>
        </div>
    );
}

export default MovieTabs;