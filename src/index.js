import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import App from './components/App';
import './style/index.css';

const initialState = {
  books: [
    {
      id: Math.round(Math.random() * 100000),
      title: 'Under the Udala Trees',
      category: 'Action',
      price: 200
    },
    {
      id: Math.round(Math.random() * 100000),
      title: 'Things Fall Apart',
      category: 'Kids',
      price: 100
    }
  ]
};
const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
