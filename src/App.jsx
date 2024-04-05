import './App.css';
import Navbar from './componenta/Navbar';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Heading from './pages/Heading';
import { useState } from 'react';

function App() {
  const [navdata, setnavdata] = useState('');
  function tran(data){
    setnavdata(data)
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar tran={tran}/>
      <Routes>
        <Route path='/'element={<Home ans={navdata}/>}/>
        <Route path='/Login'element={<Login/>}/>
        <Route path='/Signup'element={<Signup/>}/>
        <Route path='/Heading'element={<Heading/>}/>
       
      </Routes>
    <marquee behavior="" direction=""><Heading/></marquee>
      </BrowserRouter>

   
    </div>
  );
}

export default App;
