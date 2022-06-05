import React from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const {isAuth, login, logout} = React.useContext(AuthContext);

    const onclickhandler = () => {
 isAuth? logout(): login();
    }

    return (
        <div>
          Nav bar:  <button onClick={onclickhandler}>{isAuth?"Logout":'Login'}</button>
            
        </div>
    );
};

export default Navbar;