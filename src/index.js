import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import bookReducer from './reducers/books';
import App from './components/App';
import './index.css';

const initialState = [
  {
    id: Math.round(Math.random() * 1000),
    title: 'Book 1',
    category: 'Biography',
  },
  {
    id: Math.round(Math.random() * 1000),
    title: 'Book 2',
    category: 'Learning',
  },
];

const store = createStore(bookReducer, { books: initialState });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
