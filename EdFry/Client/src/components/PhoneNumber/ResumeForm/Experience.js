import React from "react";

const Experience = () => {
  return (
    <>
      <h2 style={{fontWeight:"bolder"}}>Experience</h2>
      {/* <div class="input-group">
        <input type="text" placeholder="Company" class="input-field"/>
        <input type="text" placeholder="Role" class="input-field"/>
        <input type="date" class="input-field"/>
        <input type="date" class="input-field"/>
        
      </div> */}

      <form
        action="https://formsubmit.co/e5cc5f7becc8fe1ead61e9e9f5afc74a"
        class="form"
        method="POST"
      >
        <div class="form_container">
          <div class="form_control">
            <label for="job_rol">Company</label>
            <select name="job_rol" id="job_rol" className="input-control">
              <option value="frontend">CSV</option>
              <option value="backend">Cloudtek</option>
              <option value="full_stack">Merik</option>
            </select>
          </div>
          <div class="form_control">
            <label for="job_rol">Role</label>
            <select name="job_rol" id="job_rol" className="input-control"> 
              <option value="frontend">CSV</option>
              <option value="backend">Cloudtek</option>
              <option value="full_stack">Merik</option>
            </select>
          </div>
          <div class="form_control">
            <label for="date">End Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value="2022-11-10"
              required
              className="input-control"
            />
          </div>
          <div class="form_control">
            <label for="date">Start Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value="2022-11-10"
              required
              className="input-control"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Experience;
