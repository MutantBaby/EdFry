import React, { useState } from "react";
import "./Card.css";
import { Star, star } from "assets/svgs/star";
import "./Tabs.css";
import { filter } from "assets/svgs/filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMapMarker } from "@fortawesome/free-solid-svg-icons";
const Card = () => {
  const [selectedCategory, setSelectedCategory] = useState("all"); // Initial category
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };
  const userCards = [
    {
      id: 1,
      category: "1", // Corresponds to HTML
      name: "Warner Brown",
      stars: 5,
      occupation: "Arabic Teacher",
      availability: "Availability 6pm - 12pm",
      school: "Senior Researcher, UC Berkeley, USA",
      education: "PHD, Astrophysics University of California",
    },
    {
      id: 2,
      category: "2", // Corresponds to HTML
      name: "Warner ",
      stars: 5,
      occupation: "Arabic Teacher",
      availability: "Availability 6pm - 12pm",
      school: "Senior Researcher, UC Berkeley, USA",
      education: "PHD, Astrophysics University of California",
    },
    {
      id: 3,
      category: "3", // Corresponds to HTML
      name: "Warner khan",
      stars: 5,
      occupation: "Arabic Teacher",
      availability: "Availability 6pm - 12pm",
      school: "Senior Researcher, UC Berkeley, USA",
      education: "PHD, Astrophysics University of California",
    },
    // Add more user card objects for CSS and jQuery categories
  ];
  const filterUserCards = (category) => {
    setSelectedCategory(category);
  };
  const filterUserCardsBySearch = (query) => {
    setSearchQuery(query);
  };
  const filteredUserCards = userCards.filter(
    (userCard) =>
      (selectedCategory === "all" || userCard.category === selectedCategory) &&
      (userCard.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        userCard.occupation.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  return (
    <>
      <div className="wrapper">
        <div className="inner_portion1_card">
          <input
            type="text"
            placeholder="Search by name or occupation"
            value={searchQuery}
            onChange={(e) => filterUserCardsBySearch(e.target.value)}
          />
          <button>Search</button>
        </div>
        <div className="button_filter">
          <button className="advanced_filter" onClick={toggleFilter}>
            <p className="advanced_text">{filter} Advanced Filter</p>{" "}
          </button>
        </div>
        {isFilterOpen && (
          <div className="filter-div">
            <div className="input-row">
              <div className="filter-input">
                <div className="input-wrapper">
                  <FontAwesomeIcon icon={faMapMarker} />
                  <input
                    type="text"
                    placeholder="What do you want to Learn"
                    className="emailClass"
                  />
                </div>
              </div>
              <div className="filter-input">
                <div className="input-wrapper">
                  <FontAwesomeIcon icon={faMapMarker} />
                  <input
                    type="text"
                    placeholder="Location"
                    className="emailClass"
                  />
                </div>
              </div>
              <div className="filter-input">
                <div className="input-wrapper">
                  <FontAwesomeIcon icon={faMapMarker} />
                  <input
                    type="text"
                    placeholder="Rate/hr"
                    className="emailClass"
                  />
                </div>
              </div>
              <div className="filter-input">
                <div className="input-wrapper">
                  <FontAwesomeIcon icon={faMapMarker} />
                  <input
                    type="text"
                    placeholder="Date"
                    className="emailClass"
                  />
                </div>
              </div>
              <div className="filter-input">
                <div className="input-wrapper">
                  <FontAwesomeIcon icon={faMapMarker} />
                  <input
                    type="text"
                    placeholder="Time"
                    className="emailClass"
                  />
                </div>
              </div>
              <div className="filter-input">
                <div className="input-wrapper">
                  <FontAwesomeIcon icon={faMapMarker} />
                  <input
                    type="text"
                    placeholder="Experience"
                    className="emailClass"
                  />
                </div>
              </div>
              <div className="filter-input">
                <div className="input-wrapper">
                  <FontAwesomeIcon icon={faMapMarker} />
                  <input
                    type="text"
                    placeholder="Other keywords like name / college / university"
                    style={{ width: "1182px" }}
                    className="emailClass"
                  />
                </div>
              </div>
              <button className="search_button">Search</button>
            </div>
          </div>
        )}
        <div className="button_filter">
          <button className="advanced_filter" onClick={toggleFilter}>
            <p className="advanced_text">{filter} Close Advanced Filter</p>{" "}
          </button>
        </div>
        <div className="tab-wrapper">
          <ul className="tabs">
            <li
              className={`buttoncd tab-link ${
                selectedCategory === "all" ? "active" : ""
              }`}
              onClick={() => filterUserCards("all")} // Show all cards
            >
              All
            </li>

            <li
              className={`buttoncd tab-link ${
                selectedCategory === "1" ? "active" : ""
              }`}
              onClick={() => filterUserCards("1")} // Set category to HTML
            >
              Teachers
            </li>
            <li
              className={`buttoncd tab-link ${
                selectedCategory === "2" ? "active" : ""
              }`}
              onClick={() => filterUserCards("2")} // Set category to CSS
            >
              Mentors
            </li>
            <li
              className={`buttoncd tab-link ${
                selectedCategory === "3" ? "active" : ""
              }`}
              onClick={() => filterUserCards("3")} // Set category to jQuery
            >
              Councelor
            </li>
          </ul>
        </div>
      </div>
      <div className="containerUser">
        <div className="row">
          {filteredUserCards.map((userCard) => (
            <div className="cardUser" key={userCard.id}>
              <div className="card__header">
                <img
                  src="https://source.unsplash.com/600x400/?teacher"
                  alt="card__image"
                  className="card__image"
                  width="600"
                />
              </div>
              <div className="card__body">
                <div className="user_card">
                  <span className="card_heading">{userCard.name}</span>
                  <div className="star_card">
                    {star}
                    <p>{userCard.stars}</p>
                  </div>
                </div>
                <span className="card_language">{userCard.occupation}</span>
                <span className="card_language">{userCard.availability}</span>
                <span className="card_sub_heading">Occupation</span>
                <span className="card_school">{userCard.school}</span>
                <span className="card_education_heading">Education</span>
                <span className="card_institute">{userCard.education}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Card;
