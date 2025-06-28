import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css'
import Layout from "./components/Layout/Layout";
import Home from './pages/Acceuil';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterDoctor from './pages/RegisterDocteur';
import Dashboard from './pages/Dashboard';
import DoctorProfile from './pages/DoctorProfile';
import SearchDoctor from './pages/SearchDoctor';
import PrendreRdv from './pages/PrendreRdv';

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
        path="/add-doctor"
        element={
          <Layout>
            <RegisterDoctor />
          </Layout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
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
        path="/search"
        element={
          <Layout>
            <SearchDoctor />
          </Layout>
        }
      />
      <Route
        path="/prendre-rdv"
        element={
          <Layout>
            <PrendreRdv />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <div>pas de pipo</div>
          </Layout>
        }
      />
    </Routes>
  );
}




function App() {
  return (
      <BrowserRouter future={{ v7_startTransition: true }}>
        {/* <Toaster /> */}
        {/* <Sonner /> */}
        <AppRoutes />
      </BrowserRouter>
  );
}

export default App
