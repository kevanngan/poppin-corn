import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { appTitle } from "../globals/globalVariables";
import MovieCard from "../components/MovieCard";

const MyListPage = () => {
    // Get myList movies from state
    const myList = useSelector((state) => state.myList.items);
    
    // Set local state with the list from state
    const [myLocalList, setMyLocalList] = useState(myList);

    // Update local state when state changes
    useEffect(() => {
        setMyLocalList(myList); // Update local state with myList from state
    }, [myList]); // Listen for changes in myList from state

    useEffect(() => {
        document.title = `${appTitle} - My List`;    
    }, []);

    return (
        <main>
            {/* <section className="" */}
            <div className="my-list">
                <h1>MY LIST</h1>
                {myLocalList.length === 0 ? (
                    <p className="empty-list" >Looks like your popcorn bag is empty! 🍿 Add some flavor to your movie list by marking your favorites and make your Poppin'Corn experience even more enjoyable! 🎬</p>
                ) : (
                    <div className="movie-list">
                        {myLocalList.map(movie => (
                            <MovieCard key={movie.id} movie={movie} isInMyList={true}/>
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
}

export default MyListPage;