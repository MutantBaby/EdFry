import "./style.css";
import React, { Suspense } from "react";

import tick from "assets/svgs/tick.svg";
import star from "assets/svgs/star.svg";
import camera from "assets/svgs/camera.svg";
import profileImg from "assets/svgs/profile_img.jpg";
import personImg from "assets/svgs/person_img.jpg";

const ProfilePage = () => {
  return (
    <Suspense className="profilePage">
      <section className="Pagesection1">
        <img src={profileImg} alt="" />

        <div className="photo__cover">
          <button className="photo__cover__btn">
            <img src={camera} alt="" />
            <p>Add A Cover Photo</p>
          </button>
        </div>
      </section>

      <section className="Pagesection2">
        <div className="Pagesection2__container">
          <div className="Pagesection2__content">
            <div className="Pagesection2__left">
              <div className="Pagesection2__left__side1">
                <img src={personImg} alt="" />
                <button className="Pagesection2__left__side1__btn">
                  <img src={camera} alt="" />
                </button>
              </div>

              <div className="Pagesection2__left__side2">
                <h2>Tehmeena Eizaz</h2>
                <h4>Profession / Councellor</h4>
              </div>

              <div className="Pagesection2__left__side3">
                <button className="Pagesection2__left__side3__btn">
                  <img src={tick} alt="" />
                  <p>Top Rated</p>
                </button>
              </div>
            </div>
            <div className="Pagesection2__right">
              <p>
                <span>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" /> <span>5</span>
                </span>
                <span>&nbsp; (89 Reviews)</span>
              </p>

              <p>Total Students: 109</p>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default ProfilePage;
