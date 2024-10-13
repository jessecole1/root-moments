import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress
} from '@mui/material';
import { useAppContext } from './AppProvider';
import Navbar from './Navbar';
import AdminDashboard from './AdminDashboard';

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { admin } = useAppContext();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8000/api/admin/orders', {
        withCredentials: true
      });
      setOrders(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching orders:', err);
      setError('Failed to fetch orders. Please try again later.');
      setLoading(false);
    }
  };

  const filteredOrders = orders.filter(order =>
    order.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!admin) {
    return <Typography>Please log in to view this page.</Typography>;
  }

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <div>
      <AdminDashboard />
      <Typography variant="h4" gutterBottom>
        Orders
      </Typography>
      <Box mb={3}>
        <TextField
          label="Search by name or email"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
        />
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Number of Photographs</TableCell>
              <TableCell>Package</TableCell>
              <TableCell>Service Type</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order._id}>
                <TableCell>{`${order.firstName} ${order.lastName}`}</TableCell>
                <TableCell>{order.email}</TableCell>
                <TableCell>{order.phone}</TableCell>
                <TableCell>{order.numberOfPhotographs}</TableCell>
                <TableCell>{order.package}</TableCell>
                <TableCell>{order.serviceType}</TableCell>
                <TableCell>{`${order.address}${order.unit ? `, ${order.unit}` : ''}, ${order.city}, ${order.zip}`}</TableCell>
                <TableCell>{new Date(order.startDate).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Button variant="outlined" size="small" onClick={() => alert(`View details for order ${order._id}`)}>
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {filteredOrders.length === 0 && (
        <Typography variant="body1" style={{ marginTop: '20px', textAlign: 'center' }}>
          No orders found.
        </Typography>
      )}
    </div>
  );
};

export default AdminOrdersPage;