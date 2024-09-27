import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Main from './components/Main';
import PhotoScanService from './components/PhotoScanService';
import Order from './components/Order';

function App({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={{fontFamily: ""}}>
        <BrowserRouter>
          <Routes>
            <Route element={<Main />} path="/" />
            <Route element={<PhotoScanService />} path="/services/photo-scanning" />
            <Route element={<Order />} path="/order/photo-scanning" />
          </Routes>
        </BrowserRouter>
      </div>
    </LocalizationProvider>
  );
}

export default App;
