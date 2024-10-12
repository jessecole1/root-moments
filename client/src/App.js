import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Main from './components/Main';
import PhotoScanService from './components/PhotoScanService';
import OrderPage from './components/OrderPage';
import Facts from './components/Facts';
import PricingTier from './components/PricingTier'
import Solutions from './components/Solutions';
import HowItWorksPage from './components/HowItWorksPage';

function App({ children }) {
  return (
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
          </Routes>
        </BrowserRouter>
      </div>
    </LocalizationProvider>
  );
}

export default App;
