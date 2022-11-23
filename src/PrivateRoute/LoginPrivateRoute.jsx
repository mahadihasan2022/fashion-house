import React from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Promotion from '../Pages/Promotion/Promotion';

const LoginPrivateRoute = () => {
    const {user} = useAuth();
    return !user?.email ? <Outlet/>:<Promotion/>
};

export default LoginPrivateRoute;