/** @format */

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const withBaseComp = Component => props => {
    const navigate = useNavigate();
    const location = useLocation();

    return <Component {...props} navigate={navigate} location={location} />;
};

export default withBaseComp;
