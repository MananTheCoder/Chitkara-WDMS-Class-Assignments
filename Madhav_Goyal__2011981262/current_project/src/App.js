import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [colorTheme, setColorTheme] = useState("dark");

  const [alertInfo, setAlertInfo] = useState(null)
  const [alertTimeout, setAlertTimeout] = useState(null);

  const showAlert = (type, message) => {
    clearInterval(alertTimeout);

    setAlertInfo({
      type: type,
      message: message
    })

    setAlertTimeout(setTimeout(() => { setAlertInfo(null); }, 3000));
  }

  const toggleColorTheme = () => {
    if (colorTheme === "dark") {
      document.body.classList.remove("bg-dark");
      document.body.classList.remove("text-light");
      document.body.classList.add("bg-light");
      document.body.classList.add("text-dark");
    } else {
      document.body.classList.remove("bg-light");
      document.body.classList.remove("text-dark");
      document.body.classList.add("bg-dark");
      document.body.classList.add("text-light");
    }
    setColorTheme(colorTheme === "dark" ? "light" : "dark");
  }

  return (
    <BrowserRouter>
      <div data-bs-theme={colorTheme}>
        <Navbar title="TextUtils" colorTheme={colorTheme} toggleColorTheme={toggleColorTheme} />
        <Alert alertInfo={alertInfo} />
        <div className="container my-3 pt-3">
          <Routes>
            <Route exact path='/' element={<TextForm heading="TextUtils - Count Words, Count Characters, Remove Extra Spaces" showAlert={showAlert} />} />
            <Route exact path='/about' element={<About />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
