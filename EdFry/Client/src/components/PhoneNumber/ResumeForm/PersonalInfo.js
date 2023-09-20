import React from "react";

const PersonalInfo = () => {
  return (
    <>
     <hr style={{marginTop:"40px"}}/>
      <h2 style={{fontWeight:"bolder"}}>Personal Information</h2>
          <form
            action="https://formsubmit.co/e5cc5f7becc8fe1ead61e9e9f5afc74a"
            class="form"
            method="POST"
          >
            <div class="form_container">
              <div class="form_control">
                <label for="first_name">Email</label>
                <input
                  id="User_name"
                  name="User_name"
                  placeholder="Email"
                  autocomplete="off"
                  required
                  className="input-control"
                />
                <input
                  type="hidden"
                  name="_next"
                  value="/freedom4/login2.html"
                />
              </div>

              <div class="form_control">
                <label for="date">Date of birth</label>
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
                <label for="job_rol">Country</label>
                <select name="job_rol" id="job_rol" className="input-control">
                  <option value="frontend">Pakistan</option>
                  <option value="backend">USA</option>
                  <option value="full_stack">London</option>
                  <option value="ui_ux">Russia</option>
                </select>
              </div>
              <div class="form_control">
                <label for="job_rol">City</label>
                <select name="job_rol" id="job_rol" className="input-control">
                  <option value="frontend">Islamabad</option>
                  <option value="backend">Rawalpindi</option>
                  <option value="full_stack">Lahore</option>
                  <option value="ui_ux">Krachi</option>
                </select>
              </div>
              <div class="form_control">
                <label for="linkedin">Linkedin Profile link</label>
                <input
                  id="linkedin"
                  name="linkedin"
                  placeholder="Linkedin.com/yourprofile"
                  autocomplete="off"
                  required
                  className="input-control"
                />
              </div>

           
            </div>
            </form>
            <hr style={{marginTop:"70px"}}/>

        
    </>
  );
};

export default PersonalInfo;
