import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { 
    appTitle,
    REQUEST_OPTIONS,
    NOW_PLAYING_ENDPOINT,
} from "../globals/globalVariables";
import Hero from "../components/Hero";


const HomePage = () => {

    const [heroMovie, setHeroMovie] = useState(null);

    const myList = useSelector((state) => state.myList.items);

    useEffect(() => {
        document.title = `${appTitle} - Home`;
    }, []);

    useEffect(() => {
        const fetchMovies = async() => {
            const response = await fetch(NOW_PLAYING_ENDPOINT, REQUEST_OPTIONS);
            let data = await response.json();
            setHeroMovie(data.results[0]);
        }

        fetchMovies();

    }, []);

    return (
        <main>
            {heroMovie && <Hero movie={heroMovie} myList={myList}/>} 
        </main>
    )
}

export default HomePage;