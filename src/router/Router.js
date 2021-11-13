import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../component/Home/Home";
import About from "../component/About/About";
import Contact from "../component/Contact/Contact";

class Router extends Component {
    render() {
        return (
            <Routes>
                {/* These are simple route */}
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        );
    }
}

export default Router;