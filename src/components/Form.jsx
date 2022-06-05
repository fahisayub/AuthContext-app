import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { AuthContext } from '../context/AuthContext';
const Form = () => {
    const {login,setToken}=React.useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');
    const onsubmithandler=(e)=>{
        e.preventDefault();
        axios('https://reqres.in/api/login',{
            method:'POST',
            data:{email,password
            },
            header:{'Content-Type':'application/json'},
        }).then(res=>{
            console.log(res.data.token);
           let token=res.data.token;
              setToken(token);
            login();
        });
                

    }
    return (
        <div>
             <form onSubmit={onsubmithandler}>
                <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Form;