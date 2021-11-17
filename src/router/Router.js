import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../component/Home/Home";
import About from "../component/About/About";
import Contact from "../component/Contact/Contact";
import NotFound from "../component/NotFound";
import SingleParameter from "../component/DynamicPages/SingleParameter";
import MultipleParameter from "../component/DynamicPages/MultipleParameter";
import * as URL from "./MianRouteList/DataRoutes";
import {POST_PAGE_URL} from "./MianRouteList/DataRoutes";
import Posts from "../component/Post/Posts";

class Router extends Component {
    render() {
        return (
            <Routes>
                {/* These are simple route */}
                {/*<Route exact path="/" element={<Home />} />*/}
                {/*<Route exact path="/about" element={<About />} />*/}
                {/*<Route exact path="/contact" element={<Contact />} />*/}

                {/* These are nested routes or prefix routes   */}
                {/*<Route path="/admin">*/}
                {/*    <Route exact path="" element={<Home />} />*/}
                {/*    <Route exact path="about" element={<About />} />*/}
                {/*    <Route exact path="contact" element={<Contact />} />*/}
                {/*</Route>*/}

                {/* Pass parameter to route */}
                {/*<Route exact path="/dynamic-single/:name" element={<SingleParameter />} />*/}
                {/*<Route exact path="/dynamic-multiple/:name/:phone" element={<MultipleParameter />} />*/}

                {/* 404 Page   */}
                <Route path="*" element={<NotFound />}/>

                {/*  Route url from constant file  */}
                <Route exact path={URL.HOME_PAGE_URL} element={<Home />} />
                <Route exact path={URL.ABOUT_PAGE_URL} element={<About />} />
                <Route exact path={URL.POST_PAGE_URL} element={<Posts />} />
                <Route exact path={URL.CONTACT_PAGE_URL} element={<Contact />} />
                <Route exact path={URL.DYNAMIC_SINGLE_PAGE_URL} element={<SingleParameter />} />
                <Route exact path={URL.DYNAMIC_MULTIPLE_PAGE_URL} element={<MultipleParameter />} />

            </Routes>
        );
    }
}

export default Router;