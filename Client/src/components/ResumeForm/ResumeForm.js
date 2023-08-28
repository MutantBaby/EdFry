import { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import "./resume.css";
import Picture from "./Picture";
import Navbar from "../Navbar/Navbar";
const ResumeForm = () => {
  const [educationSections, setEducationSections] = useState([
    <Education key={0} />,
  ]);
  const [experienceSections, setExperienceSections] = useState([
    <Experience key={0} />,
  ]);

  const addAnotherEducation = () => {
    setEducationSections([
      ...educationSections,
      <Education key={educationSections.length} />,
    ]);
  };

  const addAnotherExperience = () => {
    setExperienceSections([
      ...experienceSections,
      <Experience key={experienceSections.length} />,
    ]);
  };
  return (
    <>
    <Navbar/>
      <div class="containerzs">
        <div class="apply_box">
          <h3 className="profileClass">Setup Profile</h3>
          <hr style={{marginTop:"40px"}}/>
          <Picture/>
          <PersonalInfo />
          {educationSections}
          <button
            class="add-button"
            onClick={addAnotherEducation}
            type="button"
          >
            <span class="plus-sign">+</span> Add Another Education
          </button>
          <hr style={{marginTop : "70px"}}/>
          {experienceSections}
          <button
            class="add-button"
            onClick={addAnotherEducation}
            type="button"
          >
            <span class="plus-sign">+</span> Add Another Experience
          </button>
        </div>
      </div>
      
    </>
  );
};
export default ResumeForm;
