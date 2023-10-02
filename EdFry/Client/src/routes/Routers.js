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
import SurveyForm from "../SurveyForm";
import Sign from "components/Signup/Sign";
import ErrorPage from "components/404/ErrorPage";
import Logout from "components/Logout/Logout";
import TeacherHome from "components/User/Home/UserHome";
import UserHome from "components/User/Home/UserHome";

const Routers = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  const userType = localStorage.getItem("userType");
  return (
    <>
      <Routes>
        {/* {!isAuthenticated && ( 
          <>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Login />} />
           
          </>
       )} 
       {isAuthenticated && ( 
          <>
           <Route path="/verify" element={<Verification />} />
            {userType == "user" ? (
              <Route path="/user" element={<UserHome />} />
            ) : (
              <Route path="/teacher" element={<UserHome />} />
            )}
          </>
        )} */}

        <Route path="/logout" element={<Logout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/immigration" element={<Immigration />} />
        <Route path="/admission" element={<Admission />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </>
  );
};

export default Routers;
