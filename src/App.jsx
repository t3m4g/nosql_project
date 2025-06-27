import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css'
import Layout from "./components/Layout/Layout";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <div>pipo</div>
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
