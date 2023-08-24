import { phone } from "../../assets/svgs/phone";
import { useKeyPress } from "../../hooks/keyPress/useKeyPress";
import Navbar from "../Navbar/Navbar";
import "./Verification.css";
import { useEffect, useRef } from "react";
const Verification = () => {
  const wPressed = useKeyPress();
  const myRef = useRef(null);
  const element = myRef.current;
  const handleChange = (e) => {
    const target = e.target;

    console.log(e.target.innerHTML);
    const val = target.value;

    if (isNaN(val)) {
      target.value = "";
      return;
    }

    if (val != "") {
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
      {/* <div className="main">
        <div className="mainContent">
          <div className="description">
            <div className="image">{phone}</div>
            <h2 className="OtpVerification">OTP verification</h2>
            <p className="enterCode">
              Please enter the 5 digit OTP sent on your
              <br />
              phone number. The code will expire in
              <br />
              <span className="minute">2 minutes</span>
              <span>.</span>
            </p>
          </div>
          <div className="codeBlock">
            <div className="blockOne">
              <p className="digit">0</p>
            </div>
            <div className="blockTwo">
              <p className="digitTwo">2</p>
            </div>
            <div className="blockThree">
              <p className="digitTwo">2</p>
            </div>
            <div className="blockFour">
              <p className="digitTwo">1</p>
            </div>
            <div className="blockFive">
              <p className="digitThree">8</p>
            </div>
          </div>
          <div className="verifyButton">
            <button className="">Verify</button>
          </div>
        </div>
      </div> */}
      <Navbar />
      <div className="verfication_main">
        <div className="outer_main">
          <div className="main1">
            <div className="Inner_main1">{phone}</div>
            <div className="Inner_main2">
              <h3 className="text1_main2">OTP verification</h3>
              <p className="text2_main2" style={{fontWeight:"bolder"}}>
                Please enter the 5 digit OTP sent on your
                <br />
                phone number. The code will expire in
                <br />
                <span className="minutes" style={{fontWeight:"bolder"}}>2 minutes</span>
              </p>
            </div>
            <div className="Inner_main3">
              <div id="inputs" className="inputs" ref={myRef}>
                <input
                  className="input"
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  onChange={handleChange}
                  onKeyDown={(e) => handleKeyPress(e)}
                />
                <input
                  className="input"
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  onChange={handleChange}
                  onKeyDown={(e) => handleKeyPress(e)}
                />
                <input
                  className="input"
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  onChange={handleChange}
                  onKeyDown={(e) => handleKeyPress(e)}
                />
                <input
                  className="input"
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  onChange={handleChange}
                  onKeyDown={(e) => handleKeyPress(e)}
                />
                <input
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
              <button className="button">Verify</button>
            </div>
          </div>
          <div className="main2">
            <a className="acnhor-tags" style={{ fontWeight: "bold" }}>
              Help
            </a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a className="acnhor-tags" style={{ fontWeight: "bold" }}>
              Terms and Conditions
            </a>&nbsp;&nbsp;&nbsp;&nbsp;
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
