import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import basicReducer from "./store/reducers/basicReducer";
import internetReducer from "./store/reducers/internetReducer";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";
import thunk from "redux-thunk";

const reducer = combineReducers({
  basic: basicReducer,
  internet: internetReducer
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
