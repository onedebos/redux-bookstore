import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import App from './components/App';
import './index.css';


const initialState = {
  books: [
    {
      id: Math.round(Math.random() * 100000),
      title: 'Book 1',
      category: 'Biography',
    },
    {
      id: Math.round(Math.random() * 100000),
      title: 'Book 2',
      category: 'Learning',
    },
  ],
};
const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
