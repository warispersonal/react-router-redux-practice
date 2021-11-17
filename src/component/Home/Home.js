import React, {Component} from 'react';
import ProgmaticallyChangeRoute from "../ProgmaticallyChangeRoute/ProgmaticallyChangeRoute";

class Home extends Component {
    render() {
        const  {REACT_APP_SECRET_NAME, REACT_APP_TITLE} = process.env
        return (
            <div>
                <h1>{REACT_APP_TITLE}</h1>
                <p style={{textAlign: 'center'}}>{REACT_APP_SECRET_NAME}</p>
                <ProgmaticallyChangeRoute />
            </div>
        );
    }
}

export default Home;