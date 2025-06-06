

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import SchemeCatalog from './pages/SchemeCatalog';
import Marketplace from './pages/Marketplace';
import Emergency from './pages/Emergency';
import GrievanceForm from './pages/GrievanceForm';
import AdminPanel from './pages/AdminPanel';
import Schemes from './pages/Schemes';
import ApplySchemeForm from './pages/SchemeApplyForm';
import SOSButton from './pages/SOSButton';
import Resources from './pages/Resources';


import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className="container py-4">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/schemes" element={<Schemes />} />
            <Route path="/grievances" element={<GrievanceForm />} />
            

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute allowedRoles={['user', 'admin']}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/schemes-catalog"
              element={
                <ProtectedRoute allowedRoles={['user', 'admin']}>
                  <SchemeCatalog />
                </ProtectedRoute>
              }
            />
            <Route
              path="/marketplace"
              element={
                <ProtectedRoute allowedRoles={['user', 'admin']}>
                  <Marketplace />
                </ProtectedRoute>
              }
            />
            <Route
              path="/emergency"
              element={
                <ProtectedRoute allowedRoles={['user', 'admin']}>
                  <Emergency />
                </ProtectedRoute>
              }
            />
            <Route
              path="/grievance"
              element={
                <ProtectedRoute allowedRoles={['user', 'admin']}>
                  <GrievanceForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/resources"
              element={
                <ProtectedRoute allowedRoles={['user', 'admin']}>
                  <Resources />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sosbutton"
              element={
                <ProtectedRoute allowedRoles={['user', 'admin']}>
                  <SOSButton />
                </ProtectedRoute>
              }
            />
            <Route
              path="/apply-scheme"
              element={
                <ProtectedRoute allowedRoles={['user', 'admin']}>
                  <ApplySchemeForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
