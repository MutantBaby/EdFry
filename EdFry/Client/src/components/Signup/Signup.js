// Import your CSS file
import "./Signup.css";
import "../Login/login.css";
import Navbar from "../Navbar/Navbar";
import { google } from "../../assets/svgs/google";
import { facebook } from "../../assets/svgs/facebook";
import { apple } from "../../assets/svgs/apple";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import PhoneNumberInput from "../PhoneNumber/PhoneNumber";
import { useHistory, useNavigate } from "react-router-dom";
import Phone from "./Phone";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../context/AuthContext";
import SweetAlertService from "services/SweetAlert";
import PasswordStrengthMeter from "./PasswordStrengthMeter";

function Signup() {
  const countries = [
    { code: "+1", name: "United States", flag: "🇺🇸" },
    { code: "+2", name: "United Kingdom", flag: "🇬🇧" },
    { code: "+3", name: "Australia", flag: "🇦🇺" },
    { code: "+92", name: "Pakistan", flag: "🇵🇰" },
  ];
  const roles = [
    { id: "1", name: "user" },
    { id: "2", name: "teacher" },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    role: "",
  });

  const [passwordStrength, setPasswordStrength] = useState({
    password: "",
    strengthData: {
      width: "0%",
      color: "",
      label: "Weak",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const evaluatePassword = (password) => {
    let score = password.length;
    score += password.match(/[@!]/g) ? password.match(/[@!]/g).length * 3 : 0;
    score += password.match(/[A-Z]/g) ? 6 : 0;
    score += password.match(/[0-9]/g) ? 6 : 0;
    score += password.match(/[a-z]/g) ? 6 : 0;

    return score;
  };

  const scoreToData = (score) => {
    if (score >= 30) {
      return {
        width: "100%",
        color: "#26de81",
        label: "Strong",
      };
    } else if (score >= 20) {
      return {
        width: "66%",
        color: "#fd9644",
        label: "Medium",
      };
    } else {
      return {
        width: "33%",
        color: "#fc5c65",
        label: "Weak",
      };
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    const score = evaluatePassword(newPassword);
    const data = scoreToData(score);
    setPasswordStrength(data);
    setFormData({ ...formData, password: newPassword }); // Update password in form data
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const contact = `+${formData.countryCode}${formData.phoneNumber}`;
      const response = await fetch("http://localhost:5000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          contact: formData.contact,
          userType: formData.role,
        }),
      });
      // onSubmit(formData);
      const responseData = await response.json();
      localStorage.setItem("userType", responseData.user.userType);
      localStorage.setItem("token", responseData.token);
      console.log("RESPO", response.body);
      if (response.ok) {
        console.log("User registered successfully", responseData);
        SweetAlertService.success("Great Job", "Redirecting");
        window.location = "/user";
      } else {
        console.error("Error registering user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    console.log("SHITR", formData);
    // history.push("/otpverify", { phone: formData.contact });
  };
  // const fire = () => {
  //   if (formData.contact && formData.email) {
  //     Swal.fire({
  //       position: "center",
  //       icon: "success",
  //       title: "OTP sent to" + formData.contact,
  //       showConfirmButton: false,
  //       timer: 2500,
  //       timerProgressBar: true,
  //     }).then(function () {
  //       window.location = "/otp";
  //     });
  //   } else {
  //     Swal.fire({
  //       position: "center",
  //       icon: "error",
  //       title: "Please Enter details",
  //       showConfirmButton: false,
  //       timer: 1500,
  //       timerProgressBar: true,
  //     }).then(function () {
  //       window.location = "/";
  //     });
  //   }
  // };
  return (
    <>
      <Navbar />
      <div className="mainSignup">
        <div className="containerz">
          {/* <div className="inner-page1">
          <div className="inner-main1">
            <button
              className={"button-Signup"}
              onClick={() => handleOptionChange(true)}
            >
              Signup as a teacher
            </button>
            <div className="divider" />
            <button
              className={"button-Signup"}
              onClick={() => handleOptionChange(false)}
            >
              Signup as a student
            </button>
          </div>
        </div> */}
          <div className="inner-page2">
            <div className="Inner_main2">
              <form onSubmit={handleSubmit}>
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
                <label for="name" className="everyLabel">
                  Phone
                </label>
                <select
                  name="code"
                  value={formData.code}
                  className="emailClass"
                  onChange={handleChange}
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.flag} {country.name} ({country.code})
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder="Phone Number"
                  className="emailClass"
                  value={formData.contact}
                  onChange={handleChange}
                />
                {/* <label htmlFor="password" className="everyLabel">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="passwordClass" // You can style this as needed
                  value={formData.password}
                  onChange={handleChange}
                /> */}

                <label htmlFor="password" className="everyLabel">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="emailClass"
                  value={formData.password}
                  onChange={handlePasswordChange}
                />
                <div className="progress">
                  <div class="password-meter__bar">
                    <div
                      className="password-meter__bar__inner js--password-bar"
                      style={{
                        width: passwordStrength.width,
                        background: passwordStrength.color,
                      }}
                    ></div>
                  </div>
                </div>

                <p className="password-meter__label">
                  Password Strength:{" "}
                  <span class="js--password-text">
                    {" "}
                    {passwordStrength?.label}
                  </span>
                </p>

                <label for="name" className="everyLabel">
                  Role
                </label>
                <select
                  name="role"
                  value={formData.userType}
                  className="emailClass"
                  onChange={handleChange}
                >
                  {roles.map((role) => (
                    <option key={role.id} value={role.name}>
                      {role.name}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="button-Sign"
                  // onClick={() => {
                  //   fire();
                  // }}
                >
                  Signup
                </button>
              </form>
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
    //   <div className="mainSignup">
    //   <div className="containerz">
    //     <div className="inner-page1">
    //       <div className="Inner_main1">
    //         <button className="button-Signup">Signup as a Student</button>
    //         <div className="divider" />
    //         <button className="button-Signup">Signup as a Teacher</button>
    //       </div>
    //     </div>
    //     <Phone/>
    //     <div className="inner-page2">
    //       <div className="Inner_main2">
    //         <form onSubmit={handleSubmit}>
    //           <label for="email" className="everyLabel">
    //             Email
    //           </label>
    //           <input
    //             type="email"
    //             id="email"
    //             name="email"
    //             placeholder="Email"
    //             className="emailClass"
    //             value={formData.email}
    //             onChange={handleChange}
    //           />
    //           <label for="name" className="everyLabel">
    //             Name
    //           </label>
    //           <input
    //             type="text"
    //             id="name"
    //             name="name"
    //             placeholder="Name"
    //             className="emailClass"
    //             value={formData.name}
    //             onChange={handleChange}
    //           />
    //           <label for="name" className="everyLabel">
    //             Phone
    //           </label>
    //           <select
    //             name="code"
    //             value={formData.code}
    //             className="emailClass"
    //             onChange={handleChange}
    //           >
    //             {countries.map((country) => (
    //               <option key={country.code} value={country.code}>
    //                 {country.flag} {country.name} ({country.code})
    //               </option>
    //             ))}
    //           </select>

    //           <input
    //             type="text"
    //             id="contact"
    //             name="contact"
    //             placeholder="Phone Number"
    //             className="emailClass"
    //             value={formData.contact}
    //             onChange={handleChange}
    //           />
    //           <button
    //             type="submit"
    //             className="button-Sign"
    //             // onClick={() => {
    //             //   fire();
    //             // }}
    //           >
    //             Signup
    //           </button>
    //         </form>
    //       </div>
    //       <div className="Inner_main3">
    //         <div className="social-Login">{google}</div>
    //         <div className="social-Login">{facebook}</div>
    //         <div className="social-Login">{apple}</div>
    //       </div>
    //     </div>

    //     <div className="inner-page3">
    //       <a className="acnhor-tags" style={{ fontWeight: "bold" }}>
    //         Help
    //       </a>
    //       &nbsp;&nbsp;&nbsp;&nbsp;
    //       <a className="acnhor-tags" style={{ fontWeight: "bold" }}>
    //         Terms and Conditions
    //       </a>
    //       &nbsp;&nbsp;&nbsp;&nbsp;
    //       <a className="acnhor-tags" style={{ fontWeight: "bold" }}>
    //         Privacy
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Signup;
