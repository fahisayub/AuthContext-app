import React from 'react';
import { AuthContext } from '../context/AuthContext';

const Display = () => {
    const {token} = React.useContext(AuthContext);
 
    return (
        <div>
        <h1> User Logged in(token):{token}</h1>
        
        </div>
    );
};

export default Display;