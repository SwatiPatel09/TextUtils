// import logo from './logo.svg';
import './App.css';
import './Components/Navbar'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React,{useState} from 'react';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
   
   const [mode,setMode]=useState('light');
   const toggleMode=()=>{
     if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#08273b';
      showAlert("Dark mode enabled","success");
     }
     else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled","success");
     }
   }

   const [alert,setAlert]=useState(null);

   const showAlert=(msg,type)=>{
     setAlert({
       msg:msg,
       type:type
     })
     setTimeout(()=>{
       setAlert(null);
     },1500)
   }
  return (
        <>
        <Router>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            <Routes>

                <Route exact path="/about" element={<About mode={mode}/>}></Route>

                <Route
                  exact
                  path="/"
                  element={
                    <div className="container my-3">
                  <TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert}/>
                    </div>
                  }
                ></Route>

            </Routes>
  
          </Router>
        </>
  );
}

export default App;
