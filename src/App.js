import {BrowserRouter} from "react-router-dom";
import React from "react";
import Router from "./router/Router";
import Header from "./layout/Main/Header";
import Footer from "./layout/Main/Footer";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="App">
                <Router />
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
