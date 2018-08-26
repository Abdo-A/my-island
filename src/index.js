import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";

import App from "./App";
import authenticationReducer from "./store/reducers/authenticationReducer";
import basicReducer from "./store/reducers/basicReducer";
import internetReducer from "./store/reducers/internetReducer";
import registerServiceWorker from "./registerServiceWorker";
import saveAndFetchReducer from "./store/reducers/saveAndFetchReducer";

import "./index.css";

const reducer = combineReducers({
  basic: basicReducer,
  internet: internetReducer,
  authentication: authenticationReducer,
  saveAndFetch: saveAndFetchReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/my-island">
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

//Setup for publishing on gitpages is only:
//1-the basename "/my-island" in the BrowserRouter
//2-the changes in the package.json

//https://abdo-a.github.io/my-island/

//https://myisland.netlify.com
