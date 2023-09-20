// Import necessary dependencies and other code...

const Verification = ({ location }) => {
  // ...

  const verifyOTP = async () => {
    // Get OTP from all four input fields
    const otp1 = document.getElementById("otp1").value;
    const otp2 = document.getElementById("otp2").value;
    const otp3 = document.getElementById("otp3").value;
    const otp4 = document.getElementById("otp4").value;

    const fullOTP = otp1 + otp2 + otp3 + otp4;

    try {
      const response = await fetch("/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "", // Replace with the user's name
          email: "", // Replace with the user's email
          phone: phone, // You already have the phone number from props
          otp: fullOTP, // Combined OTP from all four input fields
        }),
      });

      if (response.status === 200) {
        // OTP verification successful
        console.log("OTP verified successfully");
        fire(); // Trigger the success notification
      } else {
        // Handle OTP verification failure
        console.error("OTP verification failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // ...

  return (
    <>
      {/* ... Your JSX code ... */}

      <div id="inputs" className="inputs" ref={myRef}>
        <input
          id="otp1" // Added unique IDs for each input field
          className="input"
          type="text"
          inputMode="numeric"
          maxLength={1}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyPress(e)}
        />
        <input
          id="otp2" // Added unique IDs for each input field
          className="input"
          type="text"
          inputMode="numeric"
          maxLength={1}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyPress(e)}
        />
        <input
          id="otp3" // Added unique IDs for each input field
          className="input"
          type="text"
          inputMode="numeric"
          maxLength={1}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyPress(e)}
        />
        <input
          id="otp4" // Added unique IDs for each input field
          className="input"
          type="text"
          inputMode="numeric"
          maxLength={1}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyPress(e)}
        />
      </div>

      {/* ... Your JSX code ... */}
    </>
  );
};

export default Verification;
