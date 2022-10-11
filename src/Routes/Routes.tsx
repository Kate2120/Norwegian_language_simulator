import {Route, Routes} from "react-router-dom";
import {Path} from "../Constants/path";
import Home from "../Home/Home";
import NounsPage from "../Nouns/NounsPage";
import Header from "../Header/header";
import React from "react";
import Footer from "../Footer/Footer";
import styles from './routes.module.scss';
import VideoPage from "../Video/VideoPage";
import GrammarPage from "../Grammar/GrammarPage";

function AllRoutes() {
    return (
        <div className={styles.page_container}>
            <Header/>
            <Routes>
                <Route path={Path.HOME} element={<Home/>}/>
                <Route path={Path.NOUNS} element={<NounsPage/>}/>
                <Route path={Path.VIDEO} element={<VideoPage/>}/>
                <Route path={Path.GRAMMAR} element={<GrammarPage/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default AllRoutes;
