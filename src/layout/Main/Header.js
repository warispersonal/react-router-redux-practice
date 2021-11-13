import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <nav style={{ textAlign: "center"}}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/dynamic-single/Waris">Single Dynamic Parameter URL</Link>
                    <Link to="/dynamic-multiple/Waris/03086529243">Multiple Dynamic Parameter URL</Link>

                </nav>
            </div>
        );
    }
}

export default Header;