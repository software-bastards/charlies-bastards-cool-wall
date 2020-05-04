<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers/index";
import * as serviceWorker from './serviceWorker';
import thunk from "redux-thunk";
=======
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers/index";
import thunk from "redux-thunk";

>>>>>>> b5939a3892d7989a8e01b0074a9c68ec5dca3191
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
<<<<<<< HEAD


=======
>>>>>>> b5939a3892d7989a8e01b0074a9c68ec5dca3191

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
<<<<<<< HEAD
  document.getElementById('root')
=======
  document.getElementById("root")
>>>>>>> b5939a3892d7989a8e01b0074a9c68ec5dca3191
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
