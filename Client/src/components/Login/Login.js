import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./login.css";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { google } from "../../assets/svgs/google";
import { apple } from "../../assets/svgs/apple";
import { facebook } from "../../assets/svgs/facebook";
import Navbar2 from "../Navbar2/Navbar2";
const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
 const [formData, setFormData] = useState({ email: '', name: '' });
 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};
 const handleLogin = async (e) => {
  debugger
  e.preventDefault()
    try {
      const response = await fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Successfully logged in, you can handle redirection or other actions here
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Welcome" + formData.name,
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
        }).then(function () {
          window.location = "/home";
        });
        setUserName(formData.name)
        setIsLoggedIn(true);
        console.log('Login successful',isLoggedIn);

      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Please Enter Correct details",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        }).then(function () {
          // window.location = "/";
        });
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    
  };
  const handleLogout = () => {
    // Implement logout logic here
    setIsLoggedIn(false);
    setUserName('');
  };
  const fire = () => {
    if (formData.contact && formData.email) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "OTP sent to" + formData.contact,
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      }).then(function () {
        window.location = "/otp";
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please Enter details",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      }).then(function () {
        window.location = "/";
      });
    }
  };
  return (
    <>
      <Navbar2 isLoggedIn={isLoggedIn} userName={userName} handleLogout={handleLogout}/>
      <p className="textClass">Login</p>
      <div className="mainSignup">
        <div className="containerz">

          <div className="inner-page2">
            <div className="Inner_main2">
              <form onSubmit={handleLogin}>
              <label for="name" className="everyLabel">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="emailClass"
                  value={formData.name}
                  onChange={handleChange}
                />
               
                <label for="email" className="everyLabel">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="emailClass"
                  value={formData.email}
                  onChange={handleChange}
                />
               
                <button
                  type="submit"
                  className="button-Sign"
                
                >
                  Login
                </button>
              </form>
              <p>Dont have an account <span><a href="/signup">Signup</a></span></p>
            </div>
            <div className="Inner_main3">
              <div className="social-Login">{google}</div>
              <div className="social-Login">{facebook}</div>
              <div className="social-Login">{apple}</div>
            </div>
          </div>

          <div className="inner-page3">
            <a className="acnhor-tags" style={{ fontWeight: "bold" }}>
              Help
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a className="acnhor-tags" style={{ fontWeight: "bold" }}>
              Terms and Conditions
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a className="acnhor-tags" style={{ fontWeight: "bold" }}>
              Privacy
            </a>
          </div>
        </div>
        
      </div>
    </>
  );
};
export default Login;
