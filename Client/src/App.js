import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Verification from "./components/Verification/Verification";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<Verification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
