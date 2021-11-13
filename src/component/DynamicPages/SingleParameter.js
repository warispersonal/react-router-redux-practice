import React from 'react';
import {useParams} from "react-router";

const SingleParameter = () => {
    const params = useParams()
    return (
        <div>
            <h1>Name: {params.name} </h1>
        </div>
    );
}

export default SingleParameter;