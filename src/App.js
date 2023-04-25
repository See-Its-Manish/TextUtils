import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#202124";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
        <Navbar title = "Text Utils" aboutText="About Us" mode = {mode} toggleMode = {toggleMode}></Navbar>
        <div className="container my-3" >
          <TextForm TextForm heading = "Enter Text to Analyze Below" mode = {mode} toggleMode = {toggleMode}></TextForm>
        </div>
        {/* <About/> */}
        
    </>
  );
}

export default App;
