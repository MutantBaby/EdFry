import "./style.css";
import img1 from "../../assets/svgs/img1.jpg";
import img2 from "../../assets/svgs/img2.png";
import sec7_p1 from "../../assets/svgs/sec7_p1.jpg";
import sec7_p2 from "../../assets/svgs/sec7_p2.jpg";
import sec7_p3 from "../../assets/svgs/sec7_p3.jpg";
import sec4_mac from "../../assets/svgs/sec4_mac.jpg";
import groupImg from "../../assets/svgs/groupImg.jpg";
import sec4_girl from "../../assets/svgs/sec4_girl.jpg";
import sec4_dell from "../../assets/svgs/sec4_dell.jpg";
import sec4_nasa from "../../assets/svgs/sec4_nasa.jpg";
import sec4_bingo from "../../assets/svgs/sec4_bingo.jpg";
import sec4_razer from "../../assets/svgs/sec4_razer.jpg";
import sec4_huawei from "../../assets/svgs/sec4_huawei.jpg";
import { world_map } from "../../assets/svgs/world_map";
import { img1_frame } from "../../assets/svgs/img1_frame";
import { img2_frame } from "../../assets/svgs/img2_frame";
import { sec2_frame1 } from "../../assets/svgs/sec2_frame1";
import { sec2_frame2 } from "../../assets/svgs/sec2_frame2";
import { sec2_frame3 } from "../../assets/svgs/sec2_frame3";
import { sec6_clock } from "../../assets/svgs/sec6_clock";

const ImageContainer = ({ img, img_frame, clsStr1 }) => {
  return (
    <div className={`${clsStr1}`}>
      <div className={`portion2_img`}>
        <img src={img} alt="img1" />
        <span>{img_frame}</span>
      </div>
    </div>
  );
};

const TextBoxContainer = ({ title, sec2_frame, clsStr2 }) => {
  return (
    <div className={`section2_portion2_img ${clsStr2}`}>
      <div className="portion2_container_img">
        <h4>{title}</h4>
        <p>
          View tutor profiles and contact any skilled tutor according to your
          criteria (rates, certification, reviews, at home or online lessons)
        </p>
      </div>

      <div className="portion2_frame">{sec2_frame}</div>
    </div>
  );
};

const CompContainer = () => {
  return (
    <div className="section2_inner_container">
      <div className="section4_inner_style">
        <img src={sec4_girl} alt="" />
      </div>
      <div className="section4_inner_style">
        <img src={sec4_bingo} alt="" />
      </div>
      <div className="section4_inner_style">
        <img src={sec4_dell} alt="" />
      </div>
      <div className="section4_inner_style">
        <img src={sec4_huawei} alt="" />
      </div>
      <div className="section4_inner_style">
        <img src={sec4_mac} alt="" />
      </div>
      <div className="section4_inner_style">
        <img src={sec4_nasa} alt="" />
      </div>
      <div className="section4_inner_style">
        <img src={sec4_razer} alt="" />
      </div>
    </div>
  );
};

const Sec6ClockBox = ({ title, bg }) => {
  return (
    <div style={{ backgroundColor: `${bg}` }} className="con1_part1">
      {sec6_clock}
      <div>
        <h4>{title}</h4>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          Sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  );
};

const Sec7AvatarBox = ({ avatar, title, name, data }) => {
  return (
    <div className="con1_part1 sec7_update">
      <div>
        <h4 style={{ marginBottom: "24px" }}>{title}</h4>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          Sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>

      <div className="sec7_avatar_info">
        <img src={avatar} alt="" />

        <div className="sec7_avatar_inner">
          <h4>{name}</h4>
          {data}
        </div>
      </div>
    </div>
  );
};

const MainPage = () => {
  return (
    <div className="mainPage">
      <div className="mainPage--section section1">
        <div className="mainPage--portion section1_portion1">
          <div>
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
        <div className="section2_inner">
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
