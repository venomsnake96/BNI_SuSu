// src/routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppPage from './pages/Susu';
import HomePage from './pages/Homepage';
import TicketsPage from './pages/TicketsPage';
import Registropage from './pages/Registropage'
import ExpositorPage from './pages/ExpositorPage';
import PatrocinadoresPage from './pages/PatrocinadoresPage';
import Login from './atomic-components/login/Login';
import JornadaPage from './pages/JornadaPage'


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/app" element={<AppPage />} />
      <Route path="/tickets" element={<TicketsPage />} />
      <Route path="/expositores" element={<ExpositorPage />} />
      <Route path="/patrocinador" element={<PatrocinadoresPage />} />
      <Route path="/registro" element={<Registropage />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/jornada" element={<JornadaPage />} />


      {/* <Route path="/public" element={<PublicPage />} /> */}
      {/* <Route
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
