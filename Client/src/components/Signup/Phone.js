import React, { useState } from 'react';

// Define a list of countries with country codes and flag icons
const countries = [
  { code: '+1', name: 'United States', flag: '🇺🇸' },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+92', name: 'Pakistan', flag: 'PK' },
];

function Phone() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    const selectedCountry = countries.find((country) => country.code === countryCode);
    setSelectedCountry(selectedCountry);
  };

  return (
    <div>
      <div>
        <select value={selectedCountry.code} onChange={handleCountryChange}>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.flag} {country.name} ({country.code})
            </option>
          ))}
        </select>
      </div>
      <div>
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div>
        <p>
          Selected Country: {selectedCountry.flag} {selectedCountry.name} ({selectedCountry.code})
        </p>
        <p>Entered Phone Number: {selectedCountry.code} {phoneNumber}</p>
      </div>
    </div>
  );
}

export default Phone;
