import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(()=>{
        setAlert(null);
      }, 1000);
  }
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#042743";
      showAlert("Dark Mode enabled", "success");
      document.title="TextUtis - Dark";
    }else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlert("Light Mode enabled", "success");
      document.title="TextUtis - Light";
    }
  }
  return (
  <>
  <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode} aboutText="About"/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <About/> */}
      <Routes>
        {/* exact use for full matching otherwise react performs partial matching */}
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />} />
      </Routes>
    </div>
    </Router>
  </>
  );
}

export default App;
