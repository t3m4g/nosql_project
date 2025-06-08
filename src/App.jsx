import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { Toaster } from "./components/Toast/toaster";
import { Toaster as Sonner } from "./components/Toast/sonner";



function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Dashboard />
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
