import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextProvider from "./components/Context";
import LoginLayout from "./layouts/LoginLayout";
import Login from "./components/Login";
import Register from "./components/Register";
import UserLayout from "./layouts/UserLayout";
import Dashboard from "./components/Dashboard";
import EmailConfirm from "./components/EmailConfirm";
import Videos from "./components/Videos";
import AddVideo from "./components/AddVideo";
import PlayVideo from "./components/PlayVideo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/emailconfirm/:token" element={<EmailConfirm />} />
        </Route>
        <Route element={<UserLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/addvideo" element={<AddVideo />} />
          <Route path="/videos/:title" element={<PlayVideo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ContextProvider>
);
