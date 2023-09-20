import "./style.css";

import sec4_mac from "../../assets/svgs/sec4_mac.jpg";
import sec4_girl from "../../assets/svgs/sec4_girl.jpg";
import sec4_dell from "../../assets/svgs/sec4_dell.jpg";
import sec4_nasa from "../../assets/svgs/sec4_nasa.jpg";
import sec4_bingo from "../../assets/svgs/sec4_bingo.jpg";
import sec4_razer from "../../assets/svgs/sec4_razer.jpg";
import sec4_huawei from "../../assets/svgs/sec4_huawei.jpg";

import { sec6_clock } from "../../assets/svgs/sec6_clock";

export const ImageContainer = ({ img, img_frame, clsStr1 }) => {
  return (
    <div className={`${clsStr1}`}>
      <div className={`portion2_img`}>
        <img src={img} alt="img1" />
        <span>{img_frame}</span>
      </div>
    </div>
  );
};

export const TextBoxContainer = ({ title, sec2_frame, clsStr2 }) => {
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

export const CompContainer = () => {
  return (
    <div className="section2_inner_container section4_outer">
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

export const Sec6ClockBox = ({ title, bg }) => {
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

export const Sec7AvatarBox = ({ avatar, title, name, data }) => {
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
