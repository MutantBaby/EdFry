import React, { useState } from "react";
import "./Immigration.css";
import Navbar2 from "../Navbar2/Navbar2";
import SweetAlertService from "../../services/SweetAlert";
const Immigration = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [age, setAge] = useState("");
  const [qualification, setQualification] = useState("");
  const [cost, setCost] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [experience, setExperience] = useState("");
  const [marriage, setMarriage] = useState("");
  const [ieltsScore, setIeltsScore] = useState("");
  const [family, setFamily] = useState("");
  const [relative, setRelative] = useState("");
  const [expense  , setExpense] = useState("")
  const handleIeltsTaken = (event) => {
    setMarriage(event.target.value);
  };
  const handleCost = (event) => {
    setCost(event.target.value);
  };
  const handleQualification = (event) => {
    setQualification(event.target.value);
  };
  const handleRelative = (event) =>{
    setRelative(event.target.value)
  }
  const handleExperience = (event)=>{
    setExperience(event.target.value)
  }  
  const handleExpense = (event) =>{
    setExpense(event.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://edfry-backend.vercel.app/api/immigration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
          body: JSON.stringify({
            age,
            contact,
            cost,
            experience,
            ieltsScore,
            marriage,
            name,
            qualification,
          }),
        }
      );
      console.log("RESPO", response);
      if (response.ok) {
        console.log("User registered successfully");
      } else {
        console.error("Error registering user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleResponse = () =>{
    SweetAlertService.success("Congrats","Your Response has been submitted successfully")
  }
  return (
    <>
      {/* <div classNameName="form-container">
      <h2>Application Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Contact:</label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />

        <label>Age:</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <label>Highest Qualification:</label>
        <div classNameName="radio-group">
          <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
          <label for="html">Bachelors</label>
          <input type="radio" id="css" name="fav_language" value="CSS" /> {" "}
          <label for="css">Masters</label>
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
          <label for="javascript">PhD</label>
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
          <label for="javascript">Intermediate/A-levels</label>
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
          <label for="javascript">Diploma</label>
        </div>

        <label>How many years of experience do you have?</label>
        <input
          type="text"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          required
        />

        <label>Have you taken the General IELTS?</label>
        <div classNameName="radio-group">
          <label for="css">Masters</label>
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
          <label for="javascript">PhD</label>
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
        </div>

        <label>What is your IELTS score?</label>
        <input type="text" onChange={(e) => setIeltsScore(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </div> */}

 
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
                      autofocus
                      id="email"
                      className="input-text"
                      type="text"
                      name="name"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </li>
                  <li className="li">
                    <label for="fname" id="fname-label" className="label-main">
                      First Name
                    </label>
                    <input
                      autofocus
                      id="fname"
                      className="input-text"
                      type="text"
                      name="fname"
                      placeholder="Your furst name"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                      required
                    />
                  </li>
                  <li className="li">
                    <label for="lname" id="lname-label" className="label-main">
                      Last Name
                    </label>
                    <input
                      autofocus
                      id="lname"
                      className="input-text"
                      type="text"
                      name="lanem"
                      placeholder="Your last name"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                      required
                    />
                  </li>
                  <li className="li">
                    <label for="email" id="email-label" className="label-main">
                      Contact
                    </label>
                    <input
                      id="contact"
                      className="input-text"
                      type="text"
                      name="contact"
                      placeholder="Your contact"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      required
                    />
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
                      className="input-text"
                      type="text"
                      name="age"
                      placeholder="Your age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      required
                    />
                  </li>
                  <li className="li">
                    <label for="email" id="email-label" className="label-main">
                      What is Your Martial Status
                    </label>
                    <ul id="marriage" className="ul">
                      <li className="li-horiz input radio">
                        <input
                          id="yes-marriage"
                          type="radio"
                          name="marriage"
                          value="Single"
                          onChange={handleIeltsTaken}
                          className="master"
                        />
                        <label for="yes-marriage">Single</label>
                      </li>
                      <li className="li-horiz input radio">
                        <input
                          id="nor-marriage"
                          type="radio"
                          name="marriage"
                          value="Married"
                          onChange={handleIeltsTaken}
                        />
                        <label for="nor-marriage">Married</label>
                      </li>
                      <li className="li-horiz input radio">
                        <input
                          id="not-engaged"
                          type="radio"
                          name="marriage"
                          value="Engaged"
                          onChange={handleIeltsTaken}
                        />
                        <label for="not-engaged">Engaged</label>
                      </li>
                    </ul>
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
                      className="input-text"
                      type="text"
                      name="age"
                      placeholder="Your Answer"
                      value={family}
                      onChange={(e) => setFamily(e.target.value)}
                      required
                    />
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
                <label for="cost" className="label-main">
                  Beyond proof of settlement funds, you must also ensure that<br/>
                  you have enough funds to cover service and government fee.
                </label>
                <ul>
                  <li style={{ listStyle: "none" }}>
                    1) Degree equivalency: $350 USD
                  </li>
                  <li style={{ listStyle: "none" }}>
                    2) ILETS: $55,000 PKR</li>
                  <li style={{ listStyle: "none" }}>
                    3) Professional Fee: Starts from $2,500 CAD
                  </li>
                  <li style={{ listStyle: "none" }}>
                    4) Government Fee: $235 - $1400 CAD
                  </li>
                </ul>

                <ul id="cost" className="ul">
                  <li className="li-horiz input radio">
                    <input
                      id="yes"
                      type="radio"
                      name="cost"
                      value="yes"
                      onChange={handleCost}
                      className="master"
                    />
                    <label for="yes">Yes</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="no"
                      type="radio"
                      name="cost"
                      value="no"
                      onChange={handleCost}
                    />
                    <label for="no">No</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="maybe"
                      type="radio"
                      name="cost"
                      value="maybe"
                      onChange={handleCost}
                    />
                    <label for="maybe">Maybe</label>
                  </li>
                </ul>
              </div>
              <div className="separator">
                <label for="qualification" className="label-main">
                  What is your highest level of education? *
                </label>
                <ul
                  id="qualification"
                  className="ul"
                  style={{ whiteSpace: "nowrap", display: "grid" }}
                >
                  <li className="li-horiz input radio">
                    <input
                      id="highSchool"
                      type="radio"
                      name="qualification"
                      value="highSchool"
                      onChange={handleQualification}
                      className="master"
                    />
                    <label for="highSchool">High School or Less</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="diploma or certificate"
                      type="radio"
                      name="qualification"
                      value="diploma or certificate"
                      onChange={handleQualification}
                    />
                    <label for="diploma or certificate">
                      One to two year diploma or certificate
                    </label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="3year undergrad degree"
                      type="radio"
                      name="qualification"
                      value="3year undergrad degree"
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
                      name="qualification"
                      value="master's"
                      onChange={handleQualification}
                    />
                    <label for="master's">Master's Degree</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="Phd"
                      type="radio"
                      name="qualification"
                      value="Phd"
                      onChange={handleQualification}
                    />
                    <label for="Phd">Doctoral Degree (PhD)</label>
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
                          onChange={handleExperience}
                          className="master"
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
                          onChange={handleExperience}
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
                          onChange={handleExperience}
                        />
                        <label for="More than 5 years">More than 5 years</label>
                      </li>
                    </ul>
                  </li>
                  <li className="li">
                    <label for="email" id="email-label" className="label-main">
                    Do you have any close family relatives in Canada such as parents or siblings?
                    </label>
                    <ul id="ielts" className="ul">
                      <li className="li-horiz input radio">
                        <input
                          id="yes-ielts"
                          type="radio"
                          name="ielts"
                          value="yes"
                          onChange={handleRelative}
                          className="master"
                        />
                        <label for="yes-ielts">Yes</label>
                      </li>
                      <li className="li-horiz input radio">
                        <input
                          id="nor-ielts"
                          type="radio"
                          name="ielts"
                          value="no"
                          onChange={handleRelative}
                        />
                        <label for="nor-ielts">No</label>
                      </li>
                    </ul>
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
                          name="expense"
                          value="Less than 10k CAD"
                          onChange={handleExpense}
                          className="master"
                        />
                        <label for="Less than 10k CAD">Less than 10k CAD</label>
                      </li>
                      <li className="li-horiz input radio">
                        <input
                          id="10-20k CAD"
                          type="radio"
                          name="expense"
                          value="10-20k CAD"
                          onChange={handleExpense}
                        />
                        <label for="10-20k CAD">10-20k CAD</label>
                      </li>
                      <li className="li-horiz input radio">
                        <input
                          id="20k plus CAD"
                          type="radio"
                          name="expense"
                          value="20k plus CAD"
                          onChange={handleExpense}
                        />
                        <label for="20k plus CAD">20k plus CAD</label>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <button id="submit" className="final-button" type="submit" onClick={handleResponse}>
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
