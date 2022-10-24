import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const token = localStorage.getItem("accessToken");
axios.defaults.baseURL = "https://efruits-management-server.onrender.com";
axios.defaults.headers = {
  authorization: `Bearer ${token}`
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
