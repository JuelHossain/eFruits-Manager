import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { FruitProvider } from "./context/fruit-context/FruitContext";
import "./index.css";

axios.defaults.baseURL = "https://efruits-management.herokuapp.com/";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <FruitProvider>
        <App />
      </FruitProvider>
    </React.StrictMode>
  </BrowserRouter>
);
