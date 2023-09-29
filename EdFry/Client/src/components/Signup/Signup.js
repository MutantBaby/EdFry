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

function Signup() {
  const [isTeacher, setIsTeacher] = useState(true); // State to track the selected signup option
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleOptionChange = (isTeacherOption) => {
    setIsTeacher(isTeacherOption);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log(formData);
  };

  // const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   contact: "",
  //   code: "",
  // });

  const countries = [
    { code: "+1", name: "United States", flag: "🇺🇸" },
    { code: "+2", name: "United Kingdom", flag: "🇬🇧" },
    { code: "+3", name: "Australia", flag: "🇦🇺" },
    { code: "+92", name: "Pakistan", flag: "🇵🇰" },
  ];

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
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const contact = `+${formData.countryCode}${formData.phoneNumber}`;
  //     const response = await fetch("http://localhost:5000/api/signup", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Headers": "Content-Type",
  //         "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
  //       },
  //       body: JSON.stringify({
  //         name: formData.name,
  //         email: formData.email,
  //         contact,
  //       }),
  //     });
  //     // onSubmit(formData);

  //     console.log("RESPO", response.body);
  //     if (response.ok) {
  //       console.log("User registered successfully");
  //     } else {
  //       console.error("Error registering user");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  //   console.log("SHITR", formData);
  //   // history.push("/otpverify", { phone: formData.contact });
  // };
  return (
    <>
    <Navbar/>
    <div className="mainSignup">
      <div className="containerz">
        <div className="inner-page1">
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
        </div>
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
              {!isTeacher && (
                <>
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
                </>
              )}
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
