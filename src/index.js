import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reducer from "./store/reducer";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
