import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Verification from "../components/Verification/Verification";
import Home from "../components/Home/Home";
import Immigration from "../components/Immigration/Immigration";
import Admission from "../components/Admission/Admission";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/nav" element={<Navbar />} />
          <Route path="/" element={<Signup />} />
          <Route path="/otp" element={<Verification />} />
          <Route path="/home" element={<Home />} />
          <Route path="/immigration" element={<Immigration />} />
          <Route path="/admission" element={<Admission />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routers