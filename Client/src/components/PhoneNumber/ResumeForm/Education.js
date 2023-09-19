import React from "react";

const Education = () => {
  return (
    <>
      <h2 style={{fontWeight:"bolder"}}>Education</h2>
      <form
        action="https://formsubmit.co/e5cc5f7becc8fe1ead61e9e9f5afc74a"
        class="form"
        method="POST"
      >
        <div class="form_container">
          <div class="form_control">
            <label for="job_rol">Level of Education</label>
            <select className="input-control"name="job_rol" id="job_rol">
              <option value="frontend">Bachelors</option>
              <option value="backend">Master</option>
              <option value="full_stack">Phd</option>
            </select>
          </div>
          <div class="form_control">
            <label for="job_rol">Institution</label>
            <select className="input-control" name="job_rol" id="job_rol">
              <option value="frontend">CUST</option>
              <option value="backend">NUST</option>
              <option value="full_stack">LUMS</option>
            </select>
          </div>
          <div class="form_control">
            <label for="job_rol">Subjects / Group </label>
            <select className="input-control" name="job_rol" id="job_rol">
              <option value="frontend">CS</option>
              <option value="backend">IT</option>
              <option value="full_stack">EE</option>
            </select>
          </div>
          <div class="form_control">
            <label for="job_rol">Educational Board</label>
            <select className="input-control" name="job_rol" id="job_rol">
              <option value="frontend">HEC</option>
              <option value="backend">FBISE</option>
            </select>
          </div>
        </div>
      </form>
     
    </>
  );
};

export default Education;
