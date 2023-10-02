import React, { useState } from "react";

function PasswordStrengthMeter({ password, onPasswordChange }) {
  const [strengthData, setStrengthData] = useState({
    width: "0%",
    color: "",
    label: "Weak",
  });

  const evaluatePassword = (password) => {
    let score = password.length;
    score += password.match(/[!]/g) ? password.match(/[!]/g).length * 3 : 0;
    score += password.match(/[A-Z]/g) ? 3 : 0;
    score += password.match(/[0-9]/g) ? 3 : 0;

    return score;
  };

  const scoreToData = (score) => {
    if (score >= 30) {
      return {
        width: "100%",
        color: "#26de81",
        label: "Strong",
      };
    } else if (score >= 20) {
      return {
        width: "66%",
        color: "#fd9644",
        label: "Medium",
      };
    } else {
      return {
        width: "33%",
        color: "#fc5c65",
        label: "Weak",
      };
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    onPasswordChange(newPassword);
    const score = evaluatePassword(newPassword);
    const data = scoreToData(score);
    setStrengthData(data);
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        className="js--password"
      />
      <div className="progress">
        <div
          className="js--password-bar"
          style={{ width: strengthData.width, background: strengthData.color }}
        ></div>
      </div>
      <p className="js--password-text">{strengthData.label}</p>
    </div>
  );
}

export default PasswordStrengthMeter;
