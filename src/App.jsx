import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Acceuil";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import SearchDoctor from "./pages/SearchDoctor";
import DoctorProfile from "./pages/DoctorProfile";


function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
            <RegisterPage />
        }
      />
      <Route
        path="/login"
        element={
            <LoginPage />
        }
      />
      <Route
        path="/search"
        element={
          <Layout>
            <SearchDoctor />
          </Layout>
        }
      />
      <Route
        path="/profile/:id"
        element={
          <Layout>
            <DoctorProfile />
          </Layout>
        }
      />
      <Route
        path="/test"
        element={
          <Layout>
            <div className="min-h-screen w-full bg-gray-200 flex items-center justify-center">
              <h1 className="text-white text-3xl">Page  found</h1>
            </div>
          </Layout>
          
        }
      />
      <Route
        path="*"
        element={
          <div className="min-h-screen w-full bg-red-200 flex items-center justify-center">
            <h1 className="text-white text-3xl">Page Not found</h1>
          </div>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter future={{ v7_startTransition: true }}>
        
            <AppRoutes />
        
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
