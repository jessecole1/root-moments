import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import AppProvider from './components/AppProvider';
import Main from './components/Main';
import PhotoScanService from './components/PhotoScanService';
import OrderPage from './components/OrderPage';
import Facts from './components/Facts';
import PricingTier from './components/PricingTier'
import Solutions from './components/Solutions';
import HowItWorksPage from './components/HowItWorksPage';
import OrderSuccessPage from './components/OrderSuccessPage';
import AdminLoginForm from './components/AdminLoginForm';
import AdminRegisterForm from './components/AdminRegisterForm';
import AdminDashboard from './components/AdminDashboard';
import AdminOrdersPage from './components/AdminOrdersPage';

function App({ children }) {
  return (
    <AppProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div style={{fontFamily: ""}}>
          <BrowserRouter>
            <Routes>
              <Route element={<Main />} path="/" />
              <Route element={<PhotoScanService />} path="/services/photo-scanning" />
              <Route element={<PricingTier />} path="/pricing" />
              <Route element={<OrderPage />} path="/order/photo-scanning" />
              <Route element={<Facts />} path="/facts" />
              <Route element={<Solutions />} path="/solutions" />
              <Route element={<HowItWorksPage />} path="/how-it-works" />
              <Route element={<OrderSuccessPage />} path="/order-success" />
              <Route element={<AdminLoginForm />} path="/admin-login" />
              <Route element={<AdminRegisterForm />} path="/admin-register" />
              <Route element={<AdminDashboard path="/dashboard" />}/>
              <Route element={<AdminOrdersPage />} path="/orders" />

              {/* <Route path="*" element={<Navigate to="/" />} /> */}
            </Routes>
          </BrowserRouter>
        </div>
      </LocalizationProvider>
    </AppProvider>
  );
}

export default App;
