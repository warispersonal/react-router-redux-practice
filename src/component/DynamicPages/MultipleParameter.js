import React from 'react';
import {useParams} from "react-router";

const MultipleParameter = () => {
    const useParam = useParams()
    const {name, phone} = useParam
    return (
        <div>
            <h1>Name: {name}</h1>
            <h1>Phone number: {phone}</h1>
        </div>
    );
}

export default MultipleParameter;