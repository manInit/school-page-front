import { observer } from 'mobx-react-lite';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import authStore from './store/auth';

const PrivateRoute = observer(() => {
  const auth = authStore.isAuth;
  return auth ? <Outlet /> : <Navigate to='/login' />;
});

export default PrivateRoute;
