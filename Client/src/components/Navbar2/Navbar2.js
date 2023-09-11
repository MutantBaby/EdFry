import "./Navbar2.css";
import img from "../../assets/Group 5085.jpg";
import { logo } from "../../assets/svgs/logo";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar2 = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const toggleCard = () => {
    setIsCardVisible((prevState) => !prevState);
  };
  const { user, logOut } = UserAuth();
  console.log("RESPONSE", user?.photoURL);
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">{logo}</div>
        <ul className="navbar-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/immigration">Immigration</a>
          </li>
          <li>
            <a href="/admission">Admission</a>
          </li>
        </ul>
        {user?.displayName ? (
            <nav>
            <ul>
              <a className="display-picture" onClick={toggleCard}>
                <li>
                  <img src={user?.photoURL} alt="" />
                </li>
              </a>
            </ul>
            <div className={`cards ${isCardVisible ? '' : 'hiddens'}`}>
              <ul className="cardClass">
                <li className="cardList">
                  <a className="cardLink" href="#">
                    Profile
                  </a>
                </li>
                <li className="cardList">
                  <a className="cardLink" href="#">
                    Account
                  </a>
                </li>
                <li className="cardList">
                  <a className="cardLink" href="#">
                    Settings
                  </a>
                </li>
                <li className="cardList">
                  <a className="cardLink" href="#" onClick={handleSignOut}>
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        ) : (
          // <button onClick={handleSignOut}>Logout</button>
          <Link to="/signup">Sign in</Link>
        )}
      </nav>
    </>
  );
};
export default Navbar2;
