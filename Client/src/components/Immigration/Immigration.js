import React, { useState } from "react";
import "./Immigration.css";
import Navbar2 from "../Navbar2/Navbar2";
const Immigration = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [age, setAge] = useState("");
  const [qualification, setQualification] = useState("");
  const [cost, setCost] = useState("");
  const [experience, setExperience] = useState("");
  const [ieltsTaken, setIeltsTaken] = useState("");
  const [ieltsScore, setIeltsScore] = useState("");

  const handleIeltsTaken = (event) => {
    setIeltsTaken(event.target.value);
  };
  const handleCost = (event) => {
    setCost(event.target.value);
  };
  const handleQualification = (event) => {
    setQualification(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://edfry-backend.vercel.app/api/immigration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
        body: JSON.stringify({
          age, contact, cost, experience, ieltsScore, ieltsTaken,name, qualification,
        }),
      });
      console.log("RESPO",response)
    if (response.ok) {
      console.log('User registered successfully');
    } else {
      console.error('Error registering user');
    }
  } catch (error) {
    console.error('Error:', error);
  }
  };
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

    <Navbar2/>
      <div className="contain">
        <div className="content">
          <header className="header">
            <h1 id="title" className="h1">
              Immigration Form
            </h1>
            <p id="description" className="descriptions">
              Averou, an Ontario-based Immigration firm. Our services include
              <br />
              Express Entry, Provincial Nominee Program, Entrepreneurs and
              <br />
              Self-Employed Visa C12, Intra-Company Transfer C11 and other
              <br />
              investment Study and visit visas.
            </p>
          </header>
          <hr/>
          <main>
            <form onSubmit= {handleSubmit} id="survey-form">
              <div>
                <ul className="ul">
                  <li className="li">
                    <label for="name" id="name-label" className="label-main">
                      Name
                    </label>
                    <input
                      autofocus
                      id="name"
                      className="input-text"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)} 
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
                      onChange={(e)=> setContact(e.target.value)}
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
                      onChange={(e)=> setAge(e.target.value)}
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
                  {" "}
                  Immigration process can cost around 1 million PKR. Do you have
                  enough funds?{" "}
                </label>
                <ul>
                  <li style={{ listStyle: "none" }}>
                    Some of the costs include
                  </li>
                  <li style={{ listStyle: "none" }}>
                    1. WES for degree verification that is around USD 350
                  </li>
                  <li style={{ listStyle: "none" }}>
                    2. IELTS Cost that is around 55,000
                  </li>
                  <li style={{ listStyle: "none" }}>
                    3. Administration cost 250,000
                  </li>
                  <li style={{ listStyle: "none" }}>
                    4. Other costs can come up
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
                    <input id="no" type="radio" name="cost" value="no"
                      onChange={handleCost}/>
                    <label for="no">No</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
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
                  Highest Qualification
                </label>
                <ul id="qualification" className="ul">
                  <li className="li-horiz input radio">
                    <input
                      id="bachelors"
                      type="radio"
                      name="qualification"
                      value="bachelors"
                      onChange={handleQualification}
                      className="master"
                    />
                    <label for="bachelors">Bachelors</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="masters"
                      type="radio"
                      name="qualification"
                      value="masters"
                      onChange={handleQualification}
                    />
                    <label for="masters">Masters</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input id="phd" type="radio" name="qualification" value="phd" />
                    <label for="phd">PhD</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="intermediate"
                      type="radio"
                      name="qualification"
                      value="intermediate"
                      onChange={handleQualification}
                    />
                    <label for="intermediate">Inter</label>
                  </li>
                  <li className="li-horiz input radio">
                    <input
                      id="diploma"
                      type="radio"
                      name="qualification"
                      value="diploma"
                      onChange={handleQualification}
                    />
                    <label for="diploma">Diploma</label>
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
                      How many years of work Experience do you have?{" "}
                    </label>
                    <input
                      autofocus
                      id="experience"
                      className="input-text"
                      type="text"
                      name="experience"
                      placeholder="Your Answer"
                      value={experience}
                      onChange={(e)=>setExperience(e.target.value)}
                      required
                    />
                  </li>
                  <li className="li">
                    <label for="email" id="email-label" className="label-main">
                      Have you taken the General IELTS?*
                    </label>
                    <ul id="ielts" className="ul">
                      <li className="li-horiz input radio">
                        <input
                          id="yes-ielts"
                          type="radio"
                          name="ielts"
                          value="yes"
                          onChange={handleIeltsTaken}
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
                          onChange={handleIeltsTaken}
                        />
                        <label for="nor-ielts">No</label>
                      </li>
                    </ul>
                  </li>
                  <li className="li">
                    <label
                      for="number"
                      id="number-label"
                      className="label-main"
                    >
                      What is Your IELTS score?
                    </label>
                    <input
                      id="number"
                      className="input-text"
                      type="text"
                      name="score"
                      value={ieltsScore}
                      onChange={(e)=>setIeltsScore(e.target.value)}
                      placeholder="Your Answer"
                      required
                    />
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

export default Immigration;
