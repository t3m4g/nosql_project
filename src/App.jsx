import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Toaster } from "./components/Toast/toaster";
import { Toaster as Sonner } from "./components/Toast/sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";



function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Index />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout>
            <Register />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
      />
    </Routes>
  );
}



function App() {
  return (
    <React.StrictMode>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Toaster />
        <Sonner />
        <AppRoutes />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
