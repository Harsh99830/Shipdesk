import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MyOrders from './pages/MyOrders';
import PickupRequest from './pages/PickupRequest';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/pickup-request" element={<PickupRequest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
