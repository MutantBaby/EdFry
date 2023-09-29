import React, { useEffect, useState } from "react";
import "./admission.css";
import Navbar2 from "../Navbar2/Navbar2";
import SweetAlertService from "services/SweetAlert";
const Admission = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    qualification: "",
    interestedEducation: "",
    budget: "",
    timeSlot: "",
    country: "",
    program: "",
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    setErrors({});
  }, []);

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  //   if (errors[name]) {
  //     setErrors({
  //       ...errors,
  //       [name]: "",
  //     });
  //   }
  // };
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(`Updating ${name} with value: ${value}`);
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      console.log(`Clearing error for ${name}`);
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    for (const field in formData) {
      if (!formData[field]) {
        validationErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required.`;
      }
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(
          "https://edfry-backend.vercel.app/api/admission",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData), // Send formData directly
           
          }
        );
        console.log("RESPO", response);
        if (response.ok) {
          console.log("User registered successfully");
          SweetAlertService.success("Congrats","Your Response has been submitted")
        } else {
          console.error("Error registering user");
        }
      } catch (error) {
        console.error("Error:", error);
      }
      console.log("Form data submitted:");
    }
  };
  return (
    <>
      <Navbar2 />
      <div className="contain">
        <div className="content">
          <header className="header">
            <h1 id="title" className="h1">
              Foreign Admissions Assessment Consultation
            </h1>
            <p id="description" className="descriptions">
              Fill the form to be contacted by our team for the first free
              consultation.
            </p>
          </header>
          <hr />
          <main>
            <form onSubmit={handleSubmit} id="survey-form">
              <div>
                <div class="separator">
                  <label for="country" class="label-main">
                    Country you're interested in *
                  </label>
                  <ul id="country" class="ul">
                    <li class="li-horiz input checkbox">
                      <input
                        id="usa"
                        type="checkbox"
                        name="country"
                        value="usa"
                        onChange={handleChange}
                        className={errors.country ? "error" : "master"}
                      />
                      <label for="usa">USA</label>
                    </li>
                    <li class="li-horiz input checkbox">
                      <input
                        id="uk"
                        type="checkbox"
                        name="country"
                        value="uk"
                        onChange={handleChange}
                        className={errors.country ? "error" : "master"}
                      />
                      <label for="uk">UK</label>
                    </li>
                    <li class="li-horiz input checkbox">
                      <input
                        id="europe"
                        type="checkbox"
                        name="country"
                        value="europe"
                        onChange={handleChange}
                        className={errors.country ? "error" : "master"}
                      />
                      <label for="europe">Europe</label>
                    </li>
                    <li class="li-horiz input checkbox">
                      <input
                        id="austrailia"
                        type="checkbox"
                        name="country"
                        value="austrailia"
                        onChange={handleChange}
                        className={errors.country ? "error" : "master"}
                      />
                      <label for="austrailia">Australia</label>
                    </li>
                    <li class="li-horiz input checkbox">
                      <input
                        id="canada"
                        type="checkbox"
                        name="country"
                        value="canada"
                        onChange={handleChange}
                        className={errors.country ? "error" : "master"}
                      />
                      <label for="canada">Canada</label>
                    </li>
                    <li class="li-horiz input checkbox">
                      <input
                        id="other"
                        type="checkbox"
                        name="country"
                        value="other"
                        onChange={handleChange}
                        className={errors.country ? "error" : "master"}
                      />
                      <label for="other">Other:</label>
                    </li>
                  </ul>
                  {errors.country && (
                    <div className="error-text">{errors.country}</div>
                  )}
                </div>
              </div>
              <div className="separator">
                <label for="interestedEducation" className="label-main">
                  Level of Education you're interested in
                </label>
                <ul id="interestedEducation" className="ul">
                  <li className="li-horiz input radio">
                    <input
                      id="bachelors"
                      type="radio"
                      name="interestedEducation"
                      value="bachelors"
                      onChange={handleChange}
                      className={
                        errors.interestedEducation ? "error" : "master"
                      }
                    />
                    <label for="bachelors">Bachelors</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="masters"
                      type="radio"
                      name="interestedEducation"
                      value="masters"
                      onChange={handleChange}
                      className={
                        errors.interestedEducation ? "error" : "master"
                      }
                    />
                    <label for="masters">Masters</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="phd"
                      type="radio"
                      name="interestedEducation"
                      value="phd"
                      onChange={handleChange}
                      className={
                        errors.interestedEducation ? "error" : "master"
                      }
                    />
                    <label for="phd">PhD</label>
                  </li>
                </ul>
                {errors.interestedEducation && (
                  <div className="error-text">{errors.interestedEducation}</div>
                )}
              </div>
              <div className="separator">
                <label for="qualification" className="label-main">
                  Current Highest Qualification
                </label>
                <ul id="qualification" className="ul">
                  <li className="li-horiz input radio">
                    <input
                      id="inter"
                      type="radio"
                      name="qualification"
                      value="inter"
                      onChange={handleChange}
                      className={
                        errors.qualification ? "error" : "master"
                      }
                    />
                    <label for="inter">Inter</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="BS"
                      type="radio"
                      name="qualification"
                      value="BS"
                      onChange={handleChange}
                      className={errors.qualification ? "error" : "master"}
                    />
                    <label for="BS">Bachelors</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="MS"
                      type="radio"
                      name="qualification"
                      value="MS"
                      onChange={handleChange}
                      className={errors.qualification ? "error" : "master"}
                    />
                    <label for="MS">Masters</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="other"
                      type="radio"
                      name="qualification"
                      value="other"
                      onChange={handleChange}
                      className={errors.qualification ? "error" : "master"}
                    />
                    <label for="other">Other</label>
                  </li>
                </ul>
                {errors.qualification && (
                  <div className="error-text">{errors.qualification}</div>
                )}
              </div>
              <div className="separator">
                <label for="budget" className="label-main">
                  Estimated budget for your Education *
                </label>
                <ul
                  id="budget"
                  className="ul"
                  style={{ display: "grid", marginLeft: "23px" }}
                >
                  <li className="li-horiz input radio">
                    <input
                      id="$12000-$15000"
                      type="radio"
                      name="budget"
                      value="$12000-$15000"
                      onChange={handleChange}
                      className={errors.budget ? "error" : "master"}
                    />
                    <label style={{ marginLeft: "-23px" }} for="$12000-$15000">
                      {" "}
                      $12000-$15000
                    </label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="$16000-$20000"
                      type="radio"
                      name="budget"
                      value="$16000-$20000"
                      onChange={handleChange}
                      className={errors.budget ? "error" : "master"}
                    />
                    <label style={{ marginLeft: "-23px" }} for="$16000-$20000">
                      {" "}
                      $16000-$20000
                    </label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="$21000-$24000"
                      type="radio"
                      name="budget"
                      value="$21000-$24000"
                      onChange={handleChange}
                      className={errors.budget ? "error" : "master"}
                    />
                    <label style={{ marginLeft: "-23px" }} for="$21000-$24000">
                      {" "}
                      $21000-$24000
                    </label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="$25000-$30000"
                      type="radio"
                      name="budget"
                      value="$25000-$30000"
                      onChange={handleChange}
                      className={errors.budget ? "error" : "master"}
                    />
                    <label style={{ marginLeft: "-23px" }} for="$25000-$30000">
                      {" "}
                      $25000-$30000
                    </label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="$31000-$35000"
                      type="radio"
                      name="budget"
                      value="$31000-$35000"
                      onChange={handleChange}
                      className={errors.budget ? "error" : "master"}
                    />
                    <label style={{ marginLeft: "-23px" }} for="$31000-$35000">
                      {" "}
                      $31000-$35000
                    </label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="$36000-$40000"
                      type="radio"
                      name="budget"
                      value="$36000-$40000"
                      onChange={handleChange}
                      className={errors.budget ? "error" : "master"}
                    />
                    <label style={{ marginLeft: "-23px" }} for="$36000-$40000">
                      {" "}
                      $36000-$40000
                    </label>
                  </li>
                </ul>
                {errors.budget && (
                  <div className="error-text">{errors.budget}</div>
                )}
              </div>
              <div className="separator">
                <label for="timeSlot" className="label-main">
                  Preferred timeSlot for the Session [PST] *
                </label>
                <ul
                  id="timeSlot"
                  className="ul"
                  style={{ display: "grid", marginLeft: "23px" }}
                >
                  <li className="li-horiz input radio">
                    <input
                      id="3:00-4:00pm"
                      type="radio"
                      name="timeSlot"
                      value="3:00-4:00pm"
                      onChange={handleChange}
                      className={errors.timeSlot ? "error" : "master"}
                    />
                    <label style={{ marginLeft: "-23px" }} for="3:00-4:00pm">
                      {" "}
                      3:00-4:00pm
                    </label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="4:00-5:00pm"
                      type="radio"
                      name="timeSlot"
                      value="4:00-5:00pm"
                      onChange={handleChange}
                      className={errors.timeSlot ? "error" : "master"}
                    />
                    <label style={{ marginLeft: "-23px" }} for="4:00-5:00pm">
                      {" "}
                      4:00-5:00pm
                    </label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="5:00-6:00pm"
                      type="radio"
                      name="timeSlot"
                      value="5:00-6:00pm"
                      onChange={handleChange}
                      className={errors.timeSlot ? "error" : "master"}
                    />
                    <label style={{ marginLeft: "-23px" }} for="5:00-6:00pm">
                      {" "}
                      5:00-6:00pm
                    </label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="6:00-7:00pm"
                      type="radio"
                      name="timeSlot"
                      value="6:00-7:00pm"
                      onChange={handleChange}
                      className={errors.timeSlot ? "error" : "master"}
                    />
                    <label style={{ marginLeft: "-23px" }} for="6:00-7:00pm">
                      {" "}
                      6:00-7:00pm
                    </label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="7:00-8:00pm"
                      type="radio"
                      name="timeSlot"
                      value="7:00-8:00pm"
                      onChange={handleChange}
                      className={errors.timeSlot ? "error" : "master"}
                    />
                    <label style={{ marginLeft: "-23px" }} for="7:00-8:00pm">
                      {" "}
                      7:00-8:00pm
                    </label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="8:00-9:00pm"
                      type="radio"
                      name="timeSlot"
                      value="8:00-9:00pm"
                      onChange={handleChange}
                      className={errors.timeSlot ? "error" : "master"}
                    />
                    <label style={{ marginLeft: "-23px" }} for="8:00-9:00pm">
                      {" "}
                      8:00-9:00pm
                    </label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="other"
                      type="radio"
                      name="timeSlot"
                      value="other"
                      onChange={handleChange}
                      className={errors.timeSlot ? "error" : "master"}
                    />
                    <label style={{ marginLeft: "-23px" }} for="other">
                      {" "}
                      Other
                    </label>
                  </li>
                </ul>
                {errors.timeSlot && (
                  <div className="error-text">{errors.timeSlot}</div>
                )}
              </div>
              <div class="separator">
                <label for="interests" class="label-main">
                  Program(s) you're interested in*
                </label>

                <ul
                  id="interests"
                  class="ul"
                  style={{
                    display: "grid",
                    whiteSpace: "nowrap",
                    marginLeft: "23px",
                  }}
                >
                  <li class="li-horiz input checkbox">
                    <input
                      id="business"
                      type="checkbox"
                      name="program"
                      value="business"
                      onChange={handleChange}
                      className={errors.program ? "error" : "master"}
                    />
                    <label for="business" style={{ marginLeft: "-23px" }}>
                      Business
                    </label>
                  </li>
                  <li class="li-horiz input checkbox">
                    <input
                      id="Computer Science"
                      type="checkbox"
                      name="program"
                      value="Computer Science"
                      onChange={handleChange}
                      className={errors.program ? "error" : "master"}
                    />
                    <label
                      for="Computer Science"
                      style={{ marginLeft: "-23px" }}
                    >
                      Computer Science
                    </label>
                  </li>
                  <li class="li-horiz input checkbox">
                    <input
                      id="Engineering"
                      type="checkbox"
                      name="program"
                      value="Engineering"
                      onChange={handleChange}
                      className={errors.program ? "error" : "master"}
                    />
                    <label for="Engineering" style={{ marginLeft: "-23px" }}>
                      Engineering
                    </label>
                  </li>
                  <li class="li-horiz input checkbox">
                    <input
                      id="Education"
                      type="checkbox"
                      name="program"
                      value="Education"
                      onChange={handleChange}
                      className={errors.program ? "error" : "master"}
                    />
                    <label for="Education" style={{ marginLeft: "-23px" }}>
                      Education
                    </label>
                  </li>
                  <li class="li-horiz input checkbox">
                    <input
                      id="Biomedical Sciences"
                      type="checkbox"
                      name="program"
                      value="Biomedical Sciences"
                      onChange={handleChange}
                      className={errors.program ? "error" : "master"}
                    />
                    <label
                      for="Biomedical Sciences"
                      style={{ marginLeft: "-23px" }}
                    >
                      Biomedical Sciences
                    </label>
                  </li>
                  <li class="li-horiz input checkbox">
                    <input
                      id="Political Science"
                      type="checkbox"
                      name="program"
                      value="Political Science"
                      onChange={handleChange}
                      className={errors.program ? "error" : "master"}
                    />
                    <label
                      for="Political Science"
                      style={{ marginLeft: "-23px" }}
                    >
                      Political Science
                    </label>
                  </li>
                  <li class="li-horiz input checkbox">
                    <input
                      id="Social Sciences"
                      type="checkbox"
                      name="program"
                      value="Social Sciences"
                      onChange={handleChange}
                      className={errors.program ? "error" : "master"}
                    />
                    <label
                      for="Social Sciences"
                      style={{ marginLeft: "-23px" }}
                    >
                      Social Sciences
                    </label>
                  </li>
                  <li class="li-horiz input checkbox">
                    <input
                      id="Communication"
                      type="checkbox"
                      name="program"
                      value="Communication"
                      onChange={handleChange}
                      className={errors.program ? "error" : "master"}
                    />
                    <label for="Communication" style={{ marginLeft: "-23px" }}>
                      Communication
                    </label>
                  </li>
                  <li class="li-horiz input checkbox">
                    <input
                      id="Other"
                      type="checkbox"
                      name="program"
                      value="Other"
                      onChange={handleChange}
                      className={errors.program ? "error" : "master"}
                    />
                    <label for="Other" style={{ marginLeft: "-23px" }}>
                      Other
                    </label>
                  </li>
                </ul>
                {errors.program && (
                  <div className="error-text">{errors.program}</div>
                )}
              </div>
              <div>
                <ul className="ul">
                  <li className="li">
                    <label
                      for="experience"
                      id="experience-label"
                      className="label-main"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={
                        errors.name ? "input-text-error" : "input-text"
                      }
                    />
                    {errors.name && (
                      <div className="error-text">{errors.name}</div>
                    )}
                  </li>
                  <li className="li">
                    <label
                      for="number"
                      id="number-label"
                      className="label-main"
                    >
                      Contact Number
                    </label>
                    <input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      className={
                        errors.contact ? "input-text-error" : "input-text"
                      }
                      placeholder="Your Contact"
                    />
                    {errors.contact && (
                      <div className="error-text">{errors.contact}</div>
                    )}
                  </li>
                </ul>
              </div>

              <button id="submit" className="final-button" type="submit">
                Submit
              </button>
            </form>
          </main>
        </div>
      </div>
    </>
  );
};

export default Admission;
