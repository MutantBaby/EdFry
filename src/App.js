import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";
import Verification from "./components/Verification/Verification";

import MainPage from "pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<Verification />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
