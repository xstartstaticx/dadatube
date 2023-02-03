import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

import LoginLayout from "./layouts/LoginLayout";
import ContextProvider from "./components/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
      <App />
    </BrowserRouter>
  </ContextProvider>
);
