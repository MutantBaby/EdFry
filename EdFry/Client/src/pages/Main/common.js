import "./style.css";

import sec4_mac from "../../assets/svgs/New folder/averou.png";
import sec4_girl from "../../assets/svgs/New folder/umich.png";
import sec4_dell from "../../assets/svgs/New folder/turkish.png";
import sec4_nasa from "../../assets/svgs/New folder/lums.png";
import sec4_bingo from "../../assets/svgs/New folder/aws.png";
import sec4_razer from "../../assets/svgs/sec4_razer.jpg";
import sec4_huawei from "../../assets/svgs/sec4_huawei.jpg";

import { sec6_clock } from "../../assets/svgs/sec6_clock";
import { useEffect, useState } from "react";

export const ImageContainer = ({ img, img_frame, clsStr1, style }) => {
  return (
    <div className={`${clsStr1}`}>
      <div className={`portion2_img`}>
        <img src={img} alt="img1" className="img_profile" />
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
  const logos = [
    sec4_girl,
    sec4_bingo,
    sec4_dell,
    sec4_mac,
    sec4_nasa,
  ];

  const [focusedIndex, setFocusedIndex] = useState(0);
  const handleImageClick = (index) => {
    // Handle image click to set focus
    setFocusedIndex(index);
  };
  useEffect(() => {
    // Auto-scroll to the next logo every 2 seconds
    const interval = setInterval(() => {
      setFocusedIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    // <div className="section2_inner_container section4_outer">
    //   <div className="brand-logos-container">
    //   <div className="section4_inner_style">
    //     <img src={sec4_girl} alt="" />
    //   </div>
    //   <div className="section4_inner_style">
    //     <img src={sec4_bingo} alt="" />
    //   </div>
    //   <div className="section4_inner_style">
    //     <img src={sec4_dell} alt="" />
    //   </div>
    //   <div className="section4_inner_style">
    //     <img src={sec4_huawei} alt="" />
    //   </div>
    //   <div className="section4_inner_style">
    //     <img src={sec4_mac} alt="" />
    //   </div>
    //   <div className="section4_inner_style">
    //     <img src={sec4_nasa} alt="" />
    //   </div>
    //   <div className="section4_inner_style">
    //     <img src={sec4_razer} alt="" />
    //   </div>
    //   </div>
    // </div>
    <div className="image-scroller">
      {logos.map((image, index) => (
        <div
          key={index}
          className={`image-container ${
            index === focusedIndex ? 'focused' : ''
          }`}
          onClick={() => handleImageClick(index)}
        >
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export const Sec6ClockBox = ({ title, bg , data  }) => {
  return (
    <div style={{ backgroundColor: `${bg}` }} className="con1_part1">
      {sec6_clock}
      <div>
        <h4>{title}</h4>
        <p>
          {data}
        </p>
      </div>
    </div>
  );
};

export const Sec7AvatarBox = ({ avatar, title, name, data , recordData }) => {
  return (
    <div className="con1_part1 sec7_update">
      <div>
        <h4 style={{ marginBottom: "24px" }}>{title}</h4>
        <p>
         {recordData}
        </p>
      </div>

      <div className="sec7_avatar_info">
        <img src={avatar} alt="" className="avatar_img_value" />

        <div className="sec7_avatar_inner">
          <h4>{name}</h4>
          {data}
        </div>
      </div>
    </div>
  );
};
