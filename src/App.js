import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compteurs from "./components/Compteurs/Compteurs.js";
import Home from "./components/Home/Home.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="compteurs" element={<Compteurs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
