import Swal from "sweetalert2";
import { phone } from "../../assets/svgs/phone";
import { useKeyPress } from "../../hooks/keyPress/useKeyPress";
import Navbar from "../Navbar/Navbar";
import "./Verification.css";
import { useEffect, useRef, useState } from "react";
const Verification = ({ location }) => {
  const phone = location.state.phone;
  const verifyOTP = async () => {
  const otp1 = document.getElementById('otp1').value;
  const otp2 = document.getElementById('otp2').value;
  const otp3 = document.getElementById('otp3').value;
  const otp4 = document.getElementById('otp4').value;
  const fullOTP = otp1 + otp2 + otp3 + otp4;
  try {
    const response = await fetch('http://localhost:5000/api/signup/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: phone, // You already have the phone number from props
        otp: fullOTP, // Combined OTP from all four input fields
      }),
    });
console.log("OTP",fullOTP)
    if (response.status === 200) {
      // OTP verification successful
      console.log('OTP verified successfully');
      fire(); // Trigger the success notification
    } else {
      // Handle OTP verification failure
      console.error('OTP verification failed');
    }
  } catch (error) {
    console.error('Error:', error);
  }
   }
console.log("DATRAA",phone)
  const wPressed = useKeyPress();
  const myRef = useRef(null);
  const element = myRef.current;
  const handleChange = (e) => {
    const target = e.target;
    console.log(e.target.innerHTML);
    const val = target.value;
    console.log("TSA",val)
    if (isNaN(val)) {
     
      target.value = "";
      return ;
    }

    if (val != "") {
      console.log("VALUE",val.length)
      const next = target.nextElementSibling;
      if (next) {
        next.focus();
      }
      
    }
   
  };
  
  const handleKeyPress = (e) => {
    console.log("You pressed a key.", e.key);
    const target = e.target;
    const key = e.key.toLowerCase();
    if (key == "backspace" || key == "delete") {
      target.value = "";
      const prev = target.previousElementSibling;
      if (prev) {
        prev.focus();
      }
      return;
    }
  };
  const fire = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "OTP Verified",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    }).then(function () {
      window.location = "/home";
    });
  };
  // element?.addEventListener("keyup", function (e) {
  //   const target = e.target;
  //   const key = e.key.toLowerCase();
  //   console.log("KEYS",key)

  //   if (key == "backspace" || key == "delete") {
  //     target.value = "";
  //     const prev = target.previousElementSibling;
  //     if (prev) {
  //       prev.focus();
  //     }
  //     return;
  //   }
  // });
  // }
  return (
    <>
      <Navbar />
      <div className="verfication_main">
        <div className="outer_main">
          <div className="main1">
            <div className="Inner_main1">{phone}</div>
            <div className="Inner_main2">
              <h3 className="text1_main2">OTP verification</h3>
              <p className="text2_main2" style={{ fontWeight: "bolder" }}>
                Please enter the 5 digit OTP sent on your
                <br />
                phone number. The code will expire in
                <br />
                <span className="minutes" style={{ fontWeight: "bolder" }}>
                  10 minutes
                </span>
              </p>
            </div>
            <div className="Inner_main3">
              <div id="inputs" className="inputs" ref={myRef}>
                <input
                id="otp1"
                  className="input"
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  onChange={handleChange}
                  onKeyDown={(e) => handleKeyPress(e)}
                />
                <input
                id="otp2"
                  className="input"
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  onChange={handleChange}
                  onKeyDown={(e) => handleKeyPress(e)}
                />
                <input
                id="otp3"
                  className="input"
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  onChange={handleChange}
                  onKeyDown={(e) => handleKeyPress(e)}
                />
                <input
                id="otp4"
                  className="input"
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  onChange={handleChange}
                  onKeyDown={(e) => handleKeyPress(e)}
                />
              
              </div>
            </div>
            <div className="Inner_main4">
              {" "}
              <button
                className="button"
                onClick={() => {
                  verifyOTP();
                }}
              >
                Verify
              </button>
            </div>
          </div>
          <div className="main2">
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

export default Verification;
