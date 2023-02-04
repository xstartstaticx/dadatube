import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

import LoginLayout from "./layouts/LoginLayout";
import UserLayout from "./layouts/UserLayout";
import ContextProvider from "./components/Context";
import Dashboard from "./components/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<UserLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ContextProvider>
);
