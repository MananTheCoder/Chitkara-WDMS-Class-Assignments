import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
function App() {
  return (
    <>
      <Navbar title="Text Utitlity" aboutText="About" />

      <div className="container">
        <TextForm heading="Enter Text here to Analyze" />
      </div>
    </>
  );
}

export default App;
