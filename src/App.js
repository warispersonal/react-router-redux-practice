import {BrowserRouter} from "react-router-dom";
import React from "react";
import Router from "./router/Router";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Router />
            </div>
        </BrowserRouter>
    );
}

export default App;
