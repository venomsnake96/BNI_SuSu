// src/routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppPage from './pages/Susu';
import HomePage from './pages/Homepage';
import TicketsPage from './pages/TicketsPage';



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/app" element={<AppPage />} />
      <Route path="/tickets" element={<TicketsPage />} />

      {/* <Route path="/login" element={<LoginPage />} />
      <Route path="/public" element={<PublicPage />} />
      <Route
        path="/protected"
        element={
          <RequireAuth>
            <ProtectedPage />
          </RequireAuth>
        }
      /> */}
    </Routes>
  );
};

export default AppRoutes;