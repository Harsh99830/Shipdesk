import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MyOrders from './pages/MyOrders';
import PickupRequest from './pages/PickupRequest';
import MopRequest from './pages/MopRequest';
import NdrExceptions from './pages/NdrExceptions';
import DeliveryAppointment from './pages/DeliveryAppointment';
import WeightReconciliation from './pages/WeightReconciliation';
import RateCalculatorDomestic from './pages/RateCalculatorDomestic';
import RateCalculatorInternational from './pages/RateCalculatorInternational';
import PickupPoints from './pages/PickupPoints';
import FinanceWallet from './pages/FinanceWallet';
import FinanceCodRemittance from './pages/FinanceCodRemittance';
import FinanceFranchiseRemittance from './pages/FinanceFranchiseRemittance';
import CustomerSupport from './pages/CustomerSupport';
import IntegrationsRestApis from './pages/IntegrationsRestApis';
import IntegrationsPlugins from './pages/IntegrationsPlugins';
import IntegrationsCouriers from './pages/IntegrationsCouriers';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/pickup-points" element={<PickupPoints />} />
        <Route path="/pickup-request" element={<PickupRequest />} />
        <Route path="/mop-request" element={<MopRequest />} />
        <Route path="/ndr" element={<NdrExceptions />} />
        <Route path="/delivery-appointment" element={<DeliveryAppointment />} />
        <Route path="/weight-reconciliation" element={<WeightReconciliation />} />
        <Route path="/rate-calculator/domestic" element={<RateCalculatorDomestic />} />
        <Route path="/rate-calculator/international" element={<RateCalculatorInternational />} />
        <Route path="/finance/wallet" element={<FinanceWallet />} />
        <Route path="/finance/cod-remittance" element={<FinanceCodRemittance />} />
        <Route path="/finance/franchise-remittance" element={<FinanceFranchiseRemittance />} />
        <Route path="/customer-support" element={<CustomerSupport />} />
        <Route path="/integrations/rest-apis" element={<IntegrationsRestApis />} />
        <Route path="/integrations/plugins" element={<IntegrationsPlugins />} />
        <Route path="/integrations/courier-integrations" element={<IntegrationsCouriers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
