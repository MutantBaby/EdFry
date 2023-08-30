import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import MainPage from "pages/Main";
import ProfilePage from "pages/Profile";

// Components
import Home from "components/Home/Home";
import Signup from "components/Signup/Signup";
import Navbar from "components/Navbar/Navbar";
import Verification from "components/Verification/Verification";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/otp" element={<Verification />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
