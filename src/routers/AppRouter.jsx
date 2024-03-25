import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import MyListPage from "../pages/MyListPage";
import MoviePage from "../pages/MoviePage";
import ErrorPage from "../pages/ErrorPage";
// import SearchPage from "../pages/SearchPage";

const AppRouter = () => {
    return (
        <BrowserRouter basename={`/${poppincorn}`}>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/:tab" exact element={<HomePage />}></Route>
                    <Route path="/about" element={<AboutPage />}></Route>
                    <Route path="/my-list" element={<MyListPage />}></Route>
                    <Route path="/movie/:id" element={<MoviePage />}></Route>
                    <Route path="*" exact element={<ErrorPage />}></Route>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;