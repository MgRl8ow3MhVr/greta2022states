import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compteurs from "./components/Compteurs/";
import Home from "./components/Home/";
import Header from "./components/Header";
import Selecteurs from "./components/Selecteurs";
import Movers from "./components/Movers";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="compteurs" element={<Compteurs />} />
        <Route path="selecteurs" element={<Selecteurs />} />
        <Route path="movers" element={<Movers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
