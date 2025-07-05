import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";


function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen w-full bg-blue-300 flex items-center justify-center">
            <h1 className="text-white text-3xl">Page test sans layout</h1>
          </div>
        }
      />
      <Route
        path="/test"
        element={
          <Layout>
            <div className="min-h-screen w-full bg-red-200 flex items-center justify-center">
              <h1 className="text-white text-3xl">Page Not found</h1>
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
