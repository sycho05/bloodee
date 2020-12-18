import React from 'react';
import {AuthProvider} from './AuthProvider';
import Route from '../route/Route';

//Mengawasi perubahan auth user yang terjadi pada Route
const Providers = () => {
  return (
    <AuthProvider>
      <Route />
    </AuthProvider>
  );
};

export default Providers;
