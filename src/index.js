import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import bookReducer from '../src/reducers/books'
import App from '../src/components/App';
import "./index.css";
import { createStore } from "redux";

const initialState = [
    {
        id: Math.round(Math.random() * 1000),
        title: 'Book 1',
        category: 'Biography'
    }, 
    {
        id: Math.round(Math.random() * 1000),
        title: 'Book 2',
        category: 'Learning'
    }
]

const store = createStore(bookReducer, initialState)

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, 
    document.getElementById("root"));

