import "./style.css";

import img1 from "../../assets/svgs/img1.jpg";
import img2 from "../../assets/svgs/img2.png";
import original from "../../assets/svgs/original.png";
import sec7_p1 from "../../assets/svgs/p1.jpg";
import sec7_p2 from "../../assets/svgs/p2.jpg";
import sec7_p3 from "../../assets/svgs/p3.jpg";
import groupImg from "../../assets/svgs/groupImg.jpg";
import yahya from "../../assets/svgs/yahya.jpg";
import minahil from "../../assets/svgs/minahil.jpg";
import qasim from "../../assets/svgs/qasim.jpg";
import { world_map } from "../../assets/svgs/world_map";
import { img1_frame } from "../../assets/svgs/img1_frame";
import { img2_frame } from "../../assets/svgs/img2_frame";
import { sec2_frame1 } from "../../assets/svgs/sec2_frame1";
import { sec2_frame2 } from "../../assets/svgs/sec2_frame2";
import { sec2_frame3 } from "../../assets/svgs/sec2_frame3";
import coo from "../../assets/svgs/COO_209x406.jpg";
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
              img={coo}
              clsStr1={"p1_Img"}
              style={{ height: "400px", width: "216px", borderRadius: "60px" }}
            />
            {/* <div className="overlay-text">
              <span className="tutor-font">Qasim Shamim</span> 
              <p style={{fontSize:"14px"}}>Counseller</p>
            </div>
            <div style={{marginTop : "10px"}}></div> */}
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

          <h1 className="h1_padding">
            Start learning <br /> with Edfry
          </h1>
        </div>
      </div>

      <div className="mainPage--section section1">
        <div className="mainPage--portion section1_portion1">{world_map}</div>

        <div className="mainPage--portion section1_portion2">
          <div className="section3">
            <h1 className="h1_padding">
              Mentors from all over <br /> the world
            </h1>

            <div className="inner_portion1 updated">
              <p>
                View mentor profiles and contact any skilled tutor according{" "}
                <br /> to your criteria (rates, certification, reviews, <br />{" "}
                at home or online lessons)
              </p>
              <button>Find Tutor</button>
            </div>
          </div>
        </div>
      </div>

      <div className="section2 section4">
        <div className="section2_inner section4_updated">
          <CompContainer />

          <h1 className="h1_padding">Where our tutors come from</h1>
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
              <Sec6ClockBox
                title={"On-demand mentoring"}
                bg={"#F0F5FF"}
                data={`Explore Study Abroad Options
                      Get college counseling from the best of mentors and apply to your dream to universities and prestigious scholarships
`}
              />
              <Sec6ClockBox
                title={"Study in Groups"}
                bg={"#F2FCFD"}
                data={` Learn from Best Mentors
                  Our qualified team of distinguished counselors has years of expertise in helping young professionals and students like you. Start your journey with EdFry today
`}
              />
            </div>
            <div style={{ marginTop: "50px" }} className="sec6_con2">
              <Sec6ClockBox
                title={"Learn from the best mentors"}
                bg={"#F4F5FB"}
                data={`Book a Consultation Session
                Book a free consultation to explore your study and immigration options
                `}
              />
              <Sec6ClockBox
                title={"Get help in any subject"}
                bg={"#FFFAF1"}
                data={`Get help in any academic or career choice
                Our professional counselors are trained to help students with their academic and professional issues`}
              />
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
                recordData={`When I first approached EdFry, I had dreams of studying at a prestigious institution like IIT, but the financial aspect seemed like a significant hurdle. However, from the very beginning, their team displayed unwavering confidence in my potential and their ability to help me achieve my goals.`}
              />
              <Sec7AvatarBox
                avatar={sec7_p2}
                name={"Jamil Tariq"}
                data={"Edfryer since 2019"}
                title={`Best Platform to Learn and to Discuss Academia`}
                recordData={`EdFRY's expertise in Canadian immigration policies and procedures was evident right from our first consultation. They took the time to understand my background, qualifications, and aspirations, allowing them to provide personalized guidance that was tailored to my unique circumstances.`}
              />
              <Sec7AvatarBox
                avatar={sec7_p3}
                name={"Jamil Tariq"}
                data={"Edfryer since 2019"}
                title={`Best Platform to Learn and to Discuss Academia`}
                recordData={`I can't thank EdFry and Qasim Shamim enough for the incredible support and guidance they provided me throughout my journey towards studying abroad. As a high school student dreaming of attending a foreign university. That's when I decided to seek professional help, and I'm so glad I did
                
               `}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
