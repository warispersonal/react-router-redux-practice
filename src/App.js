import {BrowserRouter} from "react-router-dom";
import React from "react";
import Router from "./router/Router";
import Header from "./layout/Main/Header";
import Footer from "./layout/Main/Footer";
import {Provider} from "react-redux";
import {store} from "./helpers";
import listPosts from "./actions/PostAction";

function App() {
    const loadPost = () =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json=>{
                store.dispatch(listPosts(json))
            })
    }
    loadPost()
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <div className="App">
                    <Router />
                </div>
                <Footer />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
