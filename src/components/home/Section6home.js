import React from "react";
import { Fragment } from "react";
import "./css/section6home.css";
import { NavLink } from "react-router-dom";
import img1 from "../../asset/images/main-blog-img-1.jpg";
import img2 from "../../asset/images/main-blog-img-2.jpg";
import img3 from "../../asset/images/main-blog-img-3.jpg";
const Section6home = () => {
  return (
    <Fragment>
      <div className="container-sec6-home">
        <div className="data-sec6-home1">
          <NavLink>
            <img src={img1} alt="" />
          </NavLink>
          <h4>
            <NavLink>April 16 ,2019</NavLink> - <NavLink>Accessories</NavLink> -
            <NavLink> by foan clare</NavLink>
          </h4>
          <h2> WE MERGE FASHION</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor{" "}
          </p>
          <button>READ MORE</button>
        </div>
        <div className="data-sec6-home1">
          <NavLink>
            <img src={img2} alt="" />
          </NavLink>
          <h4>
            <NavLink>April 16 ,2019</NavLink> - <NavLink>Accessories</NavLink> -
            <NavLink> by foan clare</NavLink>
          </h4>
          <h2>FABULOUS NIGHT LOOK</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor{" "}
          </p>
          <button>READ MORE</button>
        </div>
        <div className="data-sec6-home1">
          <NavLink>
            <img src={img3} alt="" />
          </NavLink>
          <h4>
            <NavLink>April 16 ,2019</NavLink> - <NavLink>Accessories</NavLink> -
            <NavLink> by foan clare</NavLink>
          </h4>
          <h2>RETRO STYLE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor{" "}
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Section6home;
