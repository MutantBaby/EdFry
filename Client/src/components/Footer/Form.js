import { useState } from "react";
import "./Form.css";
import Swal from "sweetalert2";
const Form = () => {
  const [firstName , setFirstName] = useState();
  const [lastName , setLastName] = useState();
  const [email , setEmail] = useState();
  const [phone , setPhone] = useState(0);
  const [message , setMessage] = useState();
  const fire = () => {
    if(firstName && lastName && email && phone && message) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "FeedBack Sent",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      }).then(function () {
        // window.location = "/otp";
      });
    }
  else{
    Swal.fire({
      position: "center",
      icon: 'error',
      title: "Please Enter details",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    }).then(function () {
      // window.location = "/";
    });
  }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          message,
        }),
      });
    } catch (error) {
      // Handle error
    }
  };

  return (
    <>
    <h2 style={{display:"flex", justifyContent:"center",alignItems:"center"}}>Contact Form</h2>
      <div className="formbold-main-wrapper">

        <div className="formbold-form-wrapper">
    
          <form onSubmit={handleSubmit}>
            <div className="formbold-input-flex">
              <div>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  placeholder="Jane"
                  className="formbold-form-input"
                  onChange={(e) => setFirstName(e.target.value)}
                />

                <label for="firstName" className="formbold-form-label">
                  {" "}
                  First name{" "}
                </label>
              </div>
              <div>
              <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  placeholder="Cooper"
                  className="formbold-form-input"
                  onChange={(e) => setLastName(e.target.value)}
                />
                <label for="lastName" className="formbold-form-label">
                  {" "}
                  Last name{" "}
                </label>
              </div>
            </div>

            <div className="formbold-input-flex">
              <div>
              <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="jhon@mail.com"
                  className="formbold-form-input"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label for="email" className="formbold-form-label">
                  {" "}
                  Mail{" "}
                </label>
              </div>
              <div>
              <input
                  type="number"
                  name="phone"
                  id="phone"
                  value={phone}
                  placeholder="(319) 555-0115"
                  className="formbold-form-input"
                  onChange={(e) => setPhone(e.target.value)}
                />

                <label for="phone" className="formbold-form-label">
                  {" "}
                  Phone{" "}
                </label>
              </div>
            </div>

            <div className="formbold-textarea">
              <textarea
                rows="6"
                name="message"
                id="message"
                value={message}
                placeholder="Write your message..."
                className="formbold-form-input"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <label for="message" className="formbold-form-label">
                {" "}
                Message{" "}
              </label>
            </div>

            <button className="formbold-btn" type="submit" onClick={()=>{fire()}}>Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Form;
