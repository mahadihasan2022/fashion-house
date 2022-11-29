import React from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import HomeIndex from '../Pages/HomeIndex/HomeIndex';

const LoginPrivateRoute = () => {
    const {user} = useAuth();
    return !user?.email ? <Outlet/>:<HomeIndex/>
};

export default LoginPrivateRoute;