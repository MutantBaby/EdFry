import "./Signup.css";
import "../Login/login.css";
import Navbar from "../Navbar/Navbar";
import { google } from "../../assets/svgs/google";
import { facebook } from "../../assets/svgs/facebook";
import { apple } from "../../assets/svgs/apple";
import { useState } from "react";
import Swal from "sweetalert2";
const Signup = () => {
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const fire = () => {
    if(phone && email) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "OTP sent to" + phone,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      }).then(function () {
        window.location = "/otp";
      });
    }
  else{
    Swal.fire({
      position: "center",
      icon: 'error',
      title: "Please Enter details",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    }).then(function () {
      window.location = "/";
    });
  }
  };
  const handleChange = (event) => {
    event.preventDefault();
    console.log("Values", email);
  };
  return (
    <>
    <Navbar/>
      <div className="mainSignup">
        <div className="containerz">
          <div className="inner-page1">
            <div className="Inner_main1">
              <button className="button-Signup">Signup as a Student</button>
              <div className="divider"/>
              <button className="button-Signup">Signup as a Teacher</button>
            </div>
          </div>
          <div className="inner-page2">
            <div className="Inner_main2">
              <form onSubmit={handleChange}>
                <label for="email" className="everyLabel">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="emailClass"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />

                <label for="number" className="everyLabel">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="number"
                  placeholder="Phone Number"
                  className="emailClass"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />

                <button
                  type="submit"
                  className="button-Sign"
                  onClick={() => {
                    fire();
                  }}
                >
                  Signup
                </button>
              </form>
            </div>
            <div className="Inner_main3">
              <div className="social-Signup">{google}</div>
              <div className="social-Signup">{facebook}</div>
              <div className="social-Signup">{apple}</div>
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
export default Signup;
