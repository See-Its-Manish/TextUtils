import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
        <Navbar title = "Text Utils" aboutText="About Us"></Navbar>
        <div className="container my-3" >
          <TextForm TextForm heading = "Enter Text to Analyze Below"></TextForm>
        </div>
        
    </>
  );
}

export default App;
