import React, { useState } from "react";
import "./admission.css";
import Navbar2 from "../Navbar2/Navbar2";
import SweetAlertService from "../../services/SweetAlert";
const Admission = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [qualification, setQualification] = useState("");
  const [level, setLevel] = useState("");
  const [time, setTime] = useState("");
  const [country, setCountry] = useState("");
  const [budget, setBudget] = useState("");
  const [interest, setInterest] = useState("");
  const handleTime = (event) => {
    setTime(event.target.value);
  };
  const handleState = (event) => {
    setCountry(event.target.value);
  };
  const handleQualification = (event) => {
    setQualification(event.target.value);
  };
  const handleLevel = (event) => {
    setLevel(event.target.value);
  };
  const handleBudget = (event) => {
    setBudget(event.target.value);
  };
  const handleInterests = (event) => {
    setInterest(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/admission', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
        body: JSON.stringify({
         name ,
         contact,
         qualification,
         level,
         time,
         country,
         budget,
         interest
        }),
      });
      console.log("DATA",response)
    if (response.ok) {
      console.log('User registered successfully',response);
    } else {
      console.error('Error registering user');
    }
  } catch (error) {
    console.error('Error:', error);
  }
  };
  const handleResponse = () =>{
    SweetAlertService.success("Congrats","Your Response has been submitted successfully")
  }
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
                  <label for="interests" class="label-main">
                    Country you're interested in *
                  </label>
                  <ul id="interests" class="ul">
                    <li class="li-horiz input checkbox">
                      <input
                        id="usa"
                        type="checkbox"
                        name="interests"
                        value="usa"
                        onChange={handleState}
                      />
                      <label for="usa">USA</label>
                    </li>
                    <li class="li-horiz input checkbox">
                      <input
                        id="uk"
                        type="checkbox"
                        name="interests"
                        value="uk"
                        onChange={handleState}
                      />
                      <label for="uk">UK</label>
                    </li>
                    <li class="li-horiz input checkbox">
                      <input
                        id="europe"
                        type="checkbox"
                        name="interests"
                        value="europe"
                        onChange={handleState}
                      />
                      <label for="europe">Europe</label>
                    </li>
                    <li class="li-horiz input checkbox">
                      <input
                        id="austrailia"
                        type="checkbox"
                        name="interests"
                        value="austrailia"
                        onChange={handleState}
                      />
                      <label for="austrailia">Australia</label>
                    </li>
                    <li class="li-horiz input checkbox">
                      <input
                        id="canada"
                        type="checkbox"
                        name="interests"
                        value="canada"
                        onChange={handleState}
                      />
                      <label for="canada">Canada</label>
                    </li>
                    <li class="li-horiz input checkbox">
                      <input
                        id="other"
                        type="checkbox"
                        name="interests"
                        value="other"
                        onChange={handleState}
                      />
                      <label for="other">Other:</label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="separator">
                <label for="studies" className="label-main">
                  Level of Education you're interested in
                </label>
                <ul id="studies" className="ul">
                  <li className="li-horiz input radio">
                    <input
                      id="bachelors"
                      type="radio"
                      name="studies"
                      value="bachelors"
                      onChange={handleLevel}
                      className="master"
                    />
                    <label for="bachelors">Bachelors</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="masters"
                      type="radio"
                      name="studies"
                      value="masters"
                      onChange={handleLevel}
                    />
                    <label for="masters">Masters</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input id="phd" type="radio" name="studies" value="phd" />
                    <label for="phd">PhD</label>
                  </li>
                </ul>
              </div>
              <div className="separator">
                <label for="studies" className="label-main">
                  Current Highest Qualification
                </label>
                <ul id="qualification" className="ul">
                  <li className="li-horiz input radio">
                    <input
                      id="inter"
                      type="radio"
                      name="qualification"
                      value="inter"
                      onChange={handleQualification}
                      className="master"
                    />
                    <label for="inter">Inter</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="BS"
                      type="radio"
                      name="qualification"
                      value="BS"
                      onChange={handleQualification}
                    />
                    <label for="BS">Bachelors</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="MS"
                      type="radio"
                      name="qualification"
                      value="MS"
                    />
                    <label for="MS">Masters</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="other"
                      type="radio"
                      name="qualification"
                      value="other"
                      onChange={handleQualification}
                    />
                    <label for="other">Other</label>
                  </li>
                </ul>
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
                      onChange={handleBudget}
                      className="master"
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
                      onChange={handleBudget}
                      className="master"
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
                      onChange={handleBudget}
                      className="master"
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
                      onChange={handleBudget}
                      className="master"
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
                      onChange={handleBudget}
                      className="master"
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
                      onChange={handleBudget}
                      className="master"
                    />
                    <label style={{ marginLeft: "-23px" }} for="$36000-$40000">
                      {" "}
                      $36000-$40000
                    </label>
                  </li>
                </ul>
              </div>
              <div className="separator">
                <label for="time" className="label-main">
                  Preferred time for the Session [PST] *
                </label>
                <ul
                  id="time"
                  className="ul"
                  style={{ display: "grid", marginLeft: "23px" }}
                >
                  <li className="li-horiz input radio">
                    <input
                      id="3:00-4:00pm"
                      type="radio"
                      name="time"
                      value="3:00-4:00pm"
                      onChange={handleTime}
                      className="master"
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
                      name="time"
                      value="4:00-5:00pm"
                      onChange={handleTime}
                      className="master"
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
                      name="time"
                      value="5:00-6:00pm"
                      onChange={handleTime}
                      className="master"
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
                      name="time"
                      value="6:00-7:00pm"
                      onChange={handleTime}
                      className="master"
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
                      name="time"
                      value="7:00-8:00pm"
                      onChange={handleTime}
                      className="master"
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
                      name="time"
                      value="8:00-9:00pm"
                      onChange={handleTime}
                      className="master"
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
                      name="time"
                      value="other"
                      onChange={handleTime}
                      className="master"
                    />
                    <label style={{ marginLeft: "-23px" }} for="other">
                      {" "}
                      Other
                    </label>
                  </li>
                </ul>
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
                      name="interests"
                      value="business"
                      onChange={handleInterests}
                    />
                    <label for="business" style={{ marginLeft: "-23px" }}>
                      Business
                    </label>
                  </li>
                  <li class="li-horiz input checkbox">
                    <input
                      id="Computer Science"
                      type="checkbox"
                      name="interests"
                      value="Computer Science"
                      onChange={handleInterests}
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
                      name="interests"
                      value="Engineering"
                      onChange={handleInterests}
                    />
                    <label for="Engineering" style={{ marginLeft: "-23px" }}>
                      Engineering
                    </label>
                  </li>
                  <li class="li-horiz input checkbox">
                    <input
                      id="Education"
                      type="checkbox"
                      name="interests"
                      value="Education"
                      onChange={handleInterests}
                    />
                    <label for="Education" style={{ marginLeft: "-23px" }}>
                      Education
                    </label>
                  </li>
                  <li class="li-horiz input checkbox">
                    <input
                      id="Biomedical Sciences"
                      type="checkbox"
                      name="interests"
                      value="Biomedical Sciences"
                      onChange={handleInterests}
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
                      name="interests"
                      value="Political Science"
                      onChange={handleInterests}
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
                      name="interests"
                      value="Social Sciences"
                      onChange={handleInterests}
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
                      name="interests"
                      value="Communication"
                      onChange={handleInterests}
                    />
                    <label for="Communication" style={{ marginLeft: "-23px" }}>
                      Communication
                    </label>
                  </li>
                  <li class="li-horiz input checkbox">
                    <input
                      id="Other"
                      type="checkbox"
                      name="interests"
                      value="Other"
                      onChange={handleInterests}
                    />
                    <label for="Other" style={{ marginLeft: "-23px" }}>
                      Other
                    </label>
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
                      Name
                    </label>
                    <input
                      autofocus
                      id="experience"
                      className="input-text"
                      type="text"
                      name="experience"
                      placeholder="Your Answer"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
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
                      id="number"
                      className="input-text"
                      type="text"
                      name="score"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="Your Answer"
                      required
                    />
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

export default Admission;
