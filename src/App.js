import Home from "./pages/Home";
import './App.css';
import Form from "./components/form/Form";
import Admin from "./pages/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Success from "./components/form/Success"

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
