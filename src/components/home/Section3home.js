import React, { Fragment } from "react";
import img1 from "../../asset/images/ptf-list-9.jpg";
import img2 from "../../asset/images/ptf-list-10.jpg";
import img3 from "../../asset/images/ptf-list-11.jpg";
import img4 from "../../asset/images/ptf-list-12.jpg";
import img5 from "../../asset/images/ptf-list-13.jpg";
import "./css/section3home.css";
import { NavLink } from "react-router-dom";
const Section3home = () => {
  return (
    <Fragment>
      <div className="sec3-home ">
        <div className=" dataSec3 sec3-data1">
          <NavLink>
            {" "}
            <div className="sec3-holder s1">
              <h2>MAKE UP</h2>
              <h3>Model,Photo</h3>
            </div>
          </NavLink>

          <div className="sec3-img">
            <img src={img2} alt="" />
          </div>
        </div>
        <div className=" dataSec3 sec3-data2">
          <NavLink>
            {" "}
            <div className="sec3-holder s2">
              <h2>DRESS CODE</h2>
              <h3>Make UP ,Model</h3>
            </div>
          </NavLink>
          <div className="sec3-img">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className=" dataSec3 sec3-data3">
          <NavLink>
            {" "}
            <div className="sec3-holder s3">
              <h2>EXCELLENT</h2>
              <h3>Model,Photo</h3>
            </div>
          </NavLink>
          <div className="sec3-img">
            <img src={img3} alt="" />
          </div>
        </div>
        <div className="dataSec3 sec3-data4">
          <NavLink>
            {" "}
            <div className="sec3-holder s4">
              <h2>FINEST</h2>
              <h3>Fashion.Model</h3>
            </div>
          </NavLink>
          <div className="sec3-img">
            <img src={img4} alt="" />
          </div>
        </div>
        <div className=" dataSec3 sec3-data5">
          <NavLink>
            {" "}
            <div className="sec3-holder s5">
              <h2>BEAUTY</h2>
              <h3>Model ,Swimsuit</h3>
            </div>
          </NavLink>
          <div className="sec3-img">
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Section3home;
