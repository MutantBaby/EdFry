import React, { useEffect, useState } from "react";
import "./Immigration.css";
import Navbar2 from "../Navbar2/Navbar2";
import SweetAlertService from "../../services/SweetAlert";
const Immigration = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    contact: "",
    age: "",
    martialStatus: "",
    familyUnitSize: "",
    funds: "",
    education: "",
    experience: "",
    relatives: "",
    financialCapacity: "",
  });

  const [errors, setErrors] = useState({});
  useEffect(() => {
    setErrors({});
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
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
          "https://edfry-backend.vercel.app/api/immigration",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              formData,
            }),
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
              Immigration Form
            </h1>
            <p id="description" className="descriptions">
              You answers to this form will help our team assess whether you
              <br />
              qualify for a free 15 min consultation. Averou Immigration
              <br />
              Services is a registered Canadian Immigration firm and authorized
              <br />
              by the Government of Canada to provider immigration advice and
              <br />
              services. The principle consultant at the firm is Mr. Amir Ala
              <br />
              Moyaeri RCIC#: R532525 Averou Immigration Services 9131 Keele St.
              <br />
              Suite A4 Vaughn, ON LK4 0G7 pakistan@averou.ca
            </p>
          </header>
          <hr />
          <main>
            <form onSubmit={handleSubmit} id="survey-form">
              <div>
                <ul className="ul">
                  <li className="li">
                    <label for="email" id="email-label" className="label-main">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={
                        errors.email ? "input-text-error" : "input-text"
                      }
                    />
                    {errors.email && (
                      <div className="error-text">{errors.email}</div>
                    )}
                  </li>
                  <li className="li">
                    <label
                      for="firstName"
                      id="firstName-label"
                      className="label-main"
                    >
                      First Name
                    </label>
                    <input
                      autofocus
                      id="firstName"
                      type="text"
                      name="firstName"
                      placeholder="Your furst name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={
                        errors.firstName ? "input-text-error" : "input-text"
                      }
                    />
                    {errors.firstName && (
                      <div className="error-text">{errors.firstName}</div>
                    )}
                  </li>
                  <li className="li">
                    <label
                      for="lastName"
                      id="lastName-label"
                      className="label-main"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      placeholder="Your last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={
                        errors.lastName ? "input-text-error" : "input-text"
                      }
                    />
                    {errors.lastName && (
                      <div className="error-text">{errors.lastName}</div>
                    )}
                  </li>
                  <li className="li">
                    <label for="email" id="email-label" className="label-main">
                      Contact
                    </label>
                    <input
                      id="contact"
                      type="text"
                      name="contact"
                      placeholder="Your contact"
                      value={formData.contact}
                      onChange={handleChange}
                      className={
                        errors.contact ? "input-text-error" : "input-text"
                      }
                    />
                    {errors.contact && (
                      <div className="error-text">{errors.contact}</div>
                    )}
                  </li>
                  <li className="li">
                    <label
                      for="number"
                      id="number-label"
                      className="label-main"
                    >
                      Age
                    </label>
                    <input
                      id="number"
                      type="text"
                      name="age"
                      placeholder="Your age"
                      value={formData.age}
                      onChange={handleChange}
                      className={errors.age ? "input-text-error" : "input-text"}
                    />
                    {errors.age && (
                      <div className="error-text">{errors.age}</div>
                    )}
                  </li>
                  <li className="li">
                    <label for="email" id="email-label" className="label-main">
                      What is Your Martial Status
                    </label>
                    <ul id="martialStatus" className="ul">
                      <li className="li-horiz input radio">
                        <input
                          id="yes-martialStatus"
                          type="radio"
                          name="martialStatus"
                          value="Single"
                          onChange={handleChange}
                          className={errors.martialStatus ? "error" : "master"}
                        />
                        <label for="yes-martialStatus">Single</label>
                      </li>
                      <li className="li-horiz input radio">
                        <input
                          id="nor-martialStatus"
                          type="radio"
                          name="martialStatus"
                          value="Married"
                          onChange={handleChange}
                          className={errors.martialStatus ? "error" : "master"}
                        />
                        <label for="nor-martialStatus">Married</label>
                      </li>
                      <li className="li-horiz input radio">
                        <input
                          id="not-engaged"
                          type="radio"
                          name="martialStatus"
                          value="Engaged"
                          onChange={handleChange}
                          className={errors.martialStatus ? "error" : "master"}
                        />
                        <label for="not-engaged">Engaged</label>
                      </li>
                    </ul>
                    {errors.martialStatus && (
                      <div className="error-text">{errors.martialStatus}</div>
                    )}
                  </li>
                  <li className="li">
                    <label
                      for="number"
                      id="number-label"
                      className="label-main"
                    >
                      If you are married, what is your family unit size? <br />
                      (Unitsize = both spouses + total number of children){" "}
                      <br />
                      Forexample: a family with 4 children will have a family
                      unit size of 6
                    </label>
                    <input
                      id="number"
                      type="text"
                      name="familyUnitSize"
                      placeholder="Your Answer"
                      value={formData.familyUnitSize}
                      onChange={handleChange}
                      className={
                        errors.familyUnitSize ? "input-text-error" : "input-text"
                      }
                    />
                    {errors.familyUnitSize && (
                      <div className="error-text">{errors.familyUnitSize}</div>
                    )}
                  </li>
                </ul>
              </div>

              {/* <div className="separator">
                <label for="dropdown" className="label-main">
                  Your place
                </label>
                <div className="custom-dropdown">
                  <select id="dropdown" name="place">
                    <option disabled selected value className="option-select">
                      Select your continent
                    </option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                  </select>
                </div>
              </div> */}
              <div className="separator">
                <label for="funds" className="label-main">
                  Beyond proof of settlement funds, you must also ensure that
                  <br />
                  you have enough funds to cover service and government fee.
                </label>
                <ul>
                  <li style={{ listStyle: "none" }}>
                    1) Degree equivalency: $350 USD
                  </li>
                  <li style={{ listStyle: "none" }}>2) ILETS: $55,000 PKR</li>
                  <li style={{ listStyle: "none" }}>
                    3) Professional Fee: Starts from $2,500 CAD
                  </li>
                  <li style={{ listStyle: "none" }}>
                    4) Government Fee: $235 - $1400 CAD
                  </li>
                </ul>

                <ul id="funds" className="ul">
                  <li className="li-horiz input radio">
                    <input
                      id="yes"
                      type="radio"
                      name="funds"
                      value="yes"
                      onChange={handleChange}
                      className={errors.funds ? "input-text-error" : "error"}
                    />
                    <label for="yes">Yes</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="no"
                      type="radio"
                      name="funds"
                      value="no"
                      onChange={handleChange}
                      className={errors.funds ? "input-text-error" : "error"}
                    />
                    <label for="no">No</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="maybe"
                      type="radio"
                      name="funds"
                      value="maybe"
                      onChange={handleChange}
                      className={errors.funds ? "input-text-error" : "error"}
                    />
                    <label for="maybe">Maybe</label>
                  </li>
                  {errors.funds && (
                    <div className="error-text">{errors.funds}</div>
                  )}
                </ul>
              </div>
              <div className="separator">
                <label for="education" className="label-main">
                  What is your highest level of education? *
                </label>
                <ul
                  id="education"
                  className="ul"
                  style={{ whiteSpace: "nowrap", display: "grid" }}
                >
                  <li className="li-horiz input radio">
                    <input
                      id="highSchool"
                      type="radio"
                      name="education"
                      value="highSchool"
                      onChange={handleChange}
                      className={
                        errors.education ? "input-text-error" : "error"
                      }
                    />
                    <label for="highSchool">High School or Less</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="diploma or certificate"
                      type="radio"
                      name="education"
                      value="diploma or certificate"
                      onChange={handleChange}
                      className={
                        errors.education ? "input-text-error" : "error"
                      }
                    />
                    <label for="diploma or certificate">
                      One to two year diploma or certificate
                    </label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="3year undergrad degree"
                      type="radio"
                      name="education"
                      value="3year undergrad degree"
                      onChange={handleChange}
                      className={
                        errors.education ? "input-text-error" : "error"
                      }
                    />
                    <label for="3year undergrad degree">
                      Three or more year diploma, certificate, or undergraduate
                      level degree
                    </label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="master's"
                      type="radio"
                      name="education"
                      value="master's"
                      onChange={handleChange}
                      className={
                        errors.education ? "input-text-error" : "error"
                      }
                    />
                    <label for="master's">Master's Degree</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="Phd"
                      type="radio"
                      name="education"
                      value="Phd"
                      onChange={handleChange}
                      className={
                        errors.education ? "input-text-error" : "error"
                      }
                    />
                    <label for="Phd">Doctoral Degree (PhD)</label>
                  </li>
                </ul>
                {errors.education && (
                  <div className="error-text">{errors.education}</div>
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
                      How much skilled work experience do you have? *
                    </label>
                    <ul
                      id="experience"
                      className="ul"
                      style={{ whiteSpace: "nowrap", display: "grid" }}
                    >
                      <li className="li-horiz input radio">
                        <input
                          id="lessthan 6 months"
                          type="radio"
                          name="experience"
                          value="lessthan 6 months"
                          onChange={handleChange}
                          className={
                            errors.experience ? "input-text-error" : "error"
                          }
                        />
                        <label for="lessthan 6 months">
                          Less than 6 months.
                        </label>
                      </li>
                      <li className="li-horiz input radio">
                        <input
                          id="6 months to 5 years"
                          type="radio"
                          name="experience"
                          value="6 months to 5 years"
                          onChange={handleChange}
                          className={
                            errors.experience ? "input-text-error" : "error"
                          }
                        />
                        <label for="6 months to 5 years">
                          6 months to 5 years
                        </label>
                      </li>
                      <li className="li-horiz input radio">
                        <input
                          id="More than 5 years"
                          type="radio"
                          name="experience"
                          value="More than 5 years"
                          onChange={handleChange}
                          className={
                            errors.experience ? "input-text-error" : "error"
                          }
                        />
                        <label for="More than 5 years">More than 5 years</label>
                      </li>
                    </ul>
                    {errors.experience && (
                      <div className="error-text">{errors.experience}</div>
                    )}
                  </li>
                  <li className="li">
                    <label for="email" id="email-label" className="label-main">
                      Do you have any close family relatives in Canada such as
                      parents or siblings?
                    </label>
                    <ul id="relatives" className="ul">
                      <li className="li-horiz input radio">
                        <input
                          id="Relative Exist"
                          type="radio"
                          name="relatives"
                          value="yes"
                          onChange={handleChange}
                          className={
                            errors.relatives ? "input-text-error" : "error"
                          }
                        />
                        <label for="Relative Exist">Yes</label>
                      </li>
                      <li className="li-horiz input radio">
                        <input
                          id="Relative Not Exist"
                          type="radio"
                          name="relatives"
                          value="no"
                          onChange={handleChange}
                          className={
                            errors.relatives ? "input-text-error" : "error"
                          }
                        />
                        <label for="Relative Not Exist">No</label>
                      </li>
                    </ul>
                    {errors.relatives && (
                      <div className="error-text">{errors.relatives}</div>
                    )}
                  </li>
                </ul>
              </div>
              <div>
                <ul className="ul">
                  <li className="li">
                    <label
                      for="experience"
                      id="experience-label"
                      className="label-main"
                    >
                      What is your level of financial capacity for proof of
                      settlement funds?*
                    </label>
                    <ul
                      id="financial"
                      className="ul"
                      style={{ whiteSpace: "nowrap", display: "grid" }}
                    >
                      <li className="li-horiz input radio">
                        <input
                          id="Less than 10k CAD"
                          type="radio"
                          name="financialCapacity"
                          value="Less than 10k CAD"
                          onChange={handleChange}
                          className={
                            errors.financialCapacity
                              ? "input-text-error"
                              : "error"
                          }
                        />
                        <label for="Less than 10k CAD">Less than 10k CAD</label>
                      </li>
                      <li className="li-horiz input radio">
                        <input
                          id="10-20k CAD"
                          type="radio"
                          name="financialCapacity"
                          value="10-20k CAD"
                          onChange={handleChange}
                          className={
                            errors.financialCapacity
                              ? "input-text-error"
                              : "error"
                          }
                        />
                        <label for="10-20k CAD">10-20k CAD</label>
                      </li>
                      <li className="li-horiz input radio">
                        <input
                          id="20k plus CAD"
                          type="radio"
                          name="financialCapacity"
                          value="20k plus CAD"
                          onChange={handleChange}
                          className={
                            errors.financialCapacity
                              ? "input-text-error"
                              : "error"
                          }
                        />
                        <label for="20k plus CAD">20k plus CAD</label>
                      </li>
                    </ul>
                  </li>
                  {errors.financialCapacity && (
                    <div className="error-text">{errors.financialCapacity}</div>
                  )}
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

export default Immigration;
