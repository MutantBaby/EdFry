import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import SweetAlertService from '../services/SweetAlert';

const Protected = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    SweetAlertService.error('Error', 'Please Login First');
    return <Navigate to='/' />;
  }

  return children;
};

export default Protected;
