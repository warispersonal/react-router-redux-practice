import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../component/Home/Home";
import About from "../component/About/About";
import Contact from "../component/Contact/Contact";
import NotFound from "../component/NotFound";

class Router extends Component {
    render() {
        return (
            <Routes>
                {/* These are simple route */}
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />

                {/* These are nested routes or prefix routes   */}
                <Route path="/admin">
                    <Route exact path="" element={<Home />} />
                    <Route exact path="about" element={<About />} />
                    <Route exact path="contact" element={<Contact />} />
                </Route>

                {/* 404 Page   */}
                <Route path="*" element={<NotFound />}/>
            </Routes>
        );
    }
}

export default Router;