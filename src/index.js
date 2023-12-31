import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./redux/Store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom"; 


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
     <Router> 
  <Provider store={store}>
    <App />

  </Provider>
    </Router>
);
