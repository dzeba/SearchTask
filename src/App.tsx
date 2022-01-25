import React, {Suspense} from 'react';
import './App.css';
import Header from "./Components/Header";
import Title from "./Components/Title";
import Footer from "./Components/Footer";
import Search from "./Components/Search/Search";
import HotelsPage from "./Components/Hotels/HotelsPage";
import {BrowserRouter} from "react-router-dom";


function App() {
    return <div className="App">

        <header>
            <Header/>
        </header>
        <Title/>
        <BrowserRouter>
                <Search/>
        </BrowserRouter>
        <HotelsPage/>
        <footer>
            <Footer/>
        </footer>

    </div>
}

export default App;

