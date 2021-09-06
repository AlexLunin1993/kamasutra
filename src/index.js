import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';

let rerender = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );

}

rerender(store);



store.subscribe(() => {
  let state = store;
  rerender(state);
});

