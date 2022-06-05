import './App.css';
import Navbar from './components/Navbar';
import Display from './components/Display';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Form from './components/Form';

function App() {
  const {isAuth}=useContext(AuthContext);
  return (
    <div className="App">
     <Navbar/>
     {isAuth?<Display/>:<Form/>}
    </div>
  );
}

export default App;
