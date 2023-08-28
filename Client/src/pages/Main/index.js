import "./style.css";

import img1 from "../../assets/svgs/img1.jpg";
import img2 from "../../assets/svgs/img2.png";
import sec7_p1 from "../../assets/svgs/sec7_p1.jpg";
import sec7_p2 from "../../assets/svgs/sec7_p2.jpg";
import sec7_p3 from "../../assets/svgs/sec7_p3.jpg";
import groupImg from "../../assets/svgs/groupImg.jpg";

import { world_map } from "../../assets/svgs/world_map";
import { img1_frame } from "../../assets/svgs/img1_frame";
import { img2_frame } from "../../assets/svgs/img2_frame";
import { sec2_frame1 } from "../../assets/svgs/sec2_frame1";
import { sec2_frame2 } from "../../assets/svgs/sec2_frame2";
import { sec2_frame3 } from "../../assets/svgs/sec2_frame3";

import {
  Sec6ClockBox,
  Sec7AvatarBox,
  CompContainer,
  ImageContainer,
  TextBoxContainer,
} from "./common";

const MainPage = () => {
  return (
    <div className="mainPage">
      <div className="mainPage--section section1">
        <div className="mainPage--portion section1_portion1">
          <div className="portion1_container">
            <h1>
              Find your <br /> perfect mentor
            </h1>
            <div className="inner_portion1">
              <input
                type="text"
                name="search"
                id=""
                placeholder="What do you want to learn?"
              />
              <button>Search</button>
            </div>
          </div>
        </div>

        <div className="mainPage--portion section1_portion2">
          <div className="inner_portion2">
            <ImageContainer
              img={img1}
              clsStr1={"p1_Img"}
              img_frame={img1_frame}
            />
            <ImageContainer
              img={img2}
              clsStr1={"p2_Img"}
              img_frame={img2_frame}
            />
            <ImageContainer
              img={img1}
              clsStr1={"p3_Img"}
              img_frame={img1_frame}
            />
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="section2_inner">
          <div className="section2_inner_container">
            <TextBoxContainer
              title={"Search"}
              clsStr2={"s2_f1"}
              sec2_frame={sec2_frame1}
            />
            <TextBoxContainer
              title={"Check Schedule"}
              clsStr2={"s2_f2"}
              sec2_frame={sec2_frame2}
            />
            <TextBoxContainer
              title={"Start Lesson"}
              clsStr2={"s2_f3"}
              sec2_frame={sec2_frame3}
            />
          </div>

          <h1>
            Start learning <br /> with Edfry
          </h1>
        </div>
      </div>

      <div className="mainPage--section section1">
        <div className="mainPage--portion section1_portion1">{world_map}</div>

        <div className="mainPage--portion section1_portion2">
          <div className="section3">
            <h1>
              Mentors from all over <br /> the world
            </h1>

            <div className="inner_portion1 updated">
              <p>
                View mentor profiles and contact any skilled tutor <br />{" "}
                according to your criteria (rates, certification, <br />
                reviews, at home or online lessons)
              </p>
              <button>Find Tutor</button>
            </div>
          </div>
        </div>
      </div>

      <div className="section2 section4">
        <div className="section2_inner ">
          <CompContainer />

          <h1>Where our tutors come from</h1>
        </div>
      </div>

      <div className="section5">
        <div className="section5_inner">
          <div className="section5_img_container">
            <img src={groupImg} alt="" />
          </div>

          <div className="inner_portion5">
            <h1>
              Study in Groups <br /> Just like you do!
            </h1>

            <button>Search Group</button>
          </div>
        </div>
      </div>

      <div className="section6">
        <div className="section6_inner1">
          <h1>Why use Edfry?</h1>

          <div className="section6_container">
            <div className="sec6_con1">
              <Sec6ClockBox title={"On-demand mentoring"} bg={"#F0F5FF"} />
              <Sec6ClockBox title={"Study in Groups"} bg={"#F2FCFD"} />
            </div>
            <div style={{ marginTop: "50px" }} className="sec6_con2">
              <Sec6ClockBox
                title={"Learn from the best mentors"}
                bg={"#F4F5FB"}
              />
              <Sec6ClockBox title={"Get help in any subject"} bg={"#FFFAF1"} />
            </div>
          </div>
        </div>
      </div>

      <div className="section6">
        <div className="section6_inner1 ">
          <h1>What people Say about us</h1>

          <div className="section6_container">
            <div className="sec6_con1 section7">
              <Sec7AvatarBox
                avatar={sec7_p1}
                name={"Jamil Tariq"}
                data={"Edfryer since 2019"}
                title={`Best Platform to Learn and to Discuss Academia`}
              />
              <Sec7AvatarBox
                avatar={sec7_p2}
                name={"Jamil Tariq"}
                data={"Edfryer since 2019"}
                title={`Best Platform to Learn and to Discuss Academia`}
              />
              <Sec7AvatarBox
                avatar={sec7_p3}
                name={"Jamil Tariq"}
                data={"Edfryer since 2019"}
                title={`Best Platform to Learn and to Discuss Academia`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
