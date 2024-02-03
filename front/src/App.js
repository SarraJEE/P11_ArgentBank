import * as React from "react";
import { Routes, Route,  BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
