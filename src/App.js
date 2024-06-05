import React, { useState } from 'react'
import './App.css';
import Navbar from './component/Navbar'
import InputForm from './component/InputForm';
import Alert from './component/Alert';
import About from './component/About';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"
      document.body.style.color = "#fff"
      showAlert("Dark Mode Enable", "success")
    }
    else {
      setMode("light");
      document.body.style.color = "#000"
      document.body.style.backgroundColor = "#fff"
      showAlert("Light Mode Enable", "success")
    }
  }


  return (
    <>
        <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div alert={alert} className="container my-3">
        <InputForm showAlert={showAlert} />
              
        </div>
    
        
    </>
  );
}

export default App;
