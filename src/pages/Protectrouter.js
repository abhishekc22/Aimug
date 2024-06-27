import React from 'react';
import { Navigate } from 'react-router-dom';

const Protectrouter = ({ element }) => {
    const isLoggedIn = localStorage.getItem('loginStatus') === 'loggedIn';
    return isLoggedIn ? element : <Navigate to="/login" />;
};

export default Protectrouter;
