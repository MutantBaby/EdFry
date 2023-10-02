import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the JWT token from local storage
    localStorage.removeItem("token");

    // Navigate to the login page or any other desired route
    navigate("/login");
  }, [navigate]);

  return <div>Logging out...</div>;
}

export default Logout;
