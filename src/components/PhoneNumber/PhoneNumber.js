import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import the CSS for default styles
import './PhoneNumberInput.css'; // Create your custom styles in this file

function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState();

  return (
    <div className="phone-input-container">
      <label htmlFor="phone">Phone Number:</label>
      <PhoneInput
        id="phone"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={setPhoneNumber}
        defaultCountry="US" // Set your default country code here
        countries={['US', 'CA', 'GB', 'AU', 'IN' , 'PK']} // Specify the list of allowed countries
      />
    </div>
  );
}

export default PhoneNumberInput;
