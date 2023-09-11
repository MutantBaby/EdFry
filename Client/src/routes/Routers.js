// import {
//   BrowserRouter,
//   NavLink,
//   Route,
//   Router,
//   Routes,
//   Switch,
// } from "react-router-dom";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Login from "../components/Login/Login";
import Verification from "../components/Verification/Verification";
import Home from "../components/Home/Home";
import Immigration from "../components/Immigration/Immigration";
import Admission from "../components/Admission/Admission";
import Signup from "../components/Signup/Signup";
import { useState } from "react";
import { AuthContextProvider } from "../context/AuthContext";
import Navbar2 from "../components/Navbar2/Navbar2";
import Protected from "../context/Protected";

const Routers = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/immigration"
            element={
              <Protected>
                <Immigration />
              </Protected>
            }
          />
          <Route
            path="/admission"
            element={
              <Protected>
                <Admission />
              </Protected>
            }
          />
          {/* <Route  path="/immigration" element={<Immigration/>}/>
          <Route  path="/admission" element={<Admission/>}/> */}
          {/* <Route path="/otpverify" component={Verification} />
          <Route path="/home" component={Home} /> */}
        </Routes>
      </AuthContextProvider>

      {/* <BrowserRouter>
      
          <Route path="/nav" element={<Navbar />} />
          <Route path="/" element={<Signup />} />
          <Route path="/otp" element={<Verification />} />
          <Route path="/home" element={<Home />} />
          <Route path="/immigration" element={<Immigration />} />
          <Route path="/admission" element={<Admission />} />
        
      </BrowserRouter> */}
    </>
  );
};
export default Routers;
