import React from 'react';
import {useNavigate} from "react-router";

const ProgmaticallyChangeRoute = () => {
    let navigate = useNavigate();
    return (
        <div>
            <button onClick={() => {navigate("/about")}}> Switch to About</button>
        </div>
    );
}

export default ProgmaticallyChangeRoute;