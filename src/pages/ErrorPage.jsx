import { useEffect } from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {

    useEffect(() => {
        document.title = `404 Page Not Found`;
    }, []);

    return (
        <main className="errorPage">
            <h2>404 Error</h2>
            <p>It looks like there's been an error while trying to process your request.</p>
            <p>Don't worry, our team of movie-loving techies is on it!</p>
            <p>In the meantime, you can always go back to <Link to="/">Back to Home</Link> and continue your movie adventure.</p>

            <Link to="/">Back to Home</Link>
        </main>
    )
}

export default ErrorPage;