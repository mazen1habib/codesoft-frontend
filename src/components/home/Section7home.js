import React, { Fragment } from "react";
import "./css/section7home.css";
import { NavLink, Outlet } from "react-router-dom";
const Section7home = () => {
  return (
    <Fragment>
      <div className="container-sec7-home">
        <h1>FOREVER PIECES</h1>
        <div className="d-1">
          <div className="line1"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="37px"
            height="37px"
            viewBox="0 0 37 37"
            enable-background="new 0 0 37 37"
          >
            <g>
              <path d="M16.007,21.217c-3.459,0.914-6.179,3.675-7.076,7.186 C12.388,27.491,15.111,24.729,16.007,21.217z"></path>
              <path d="M20.994,21.217c0.899,3.512,3.621,6.274,7.078,7.186 C27.176,24.892,24.452,22.131,20.994,21.217z"></path>
              <path d="M8.931,8.969c0.897,3.51,3.617,6.271,7.076,7.184C15.111,12.643,12.388,9.879,8.931,8.969z"></path>
              <path d="M28.072,8.969c-3.457,0.91-6.179,3.674-7.078,7.184C24.452,15.24,27.176,12.479,28.072,8.969z"></path>
              <path d="M20.63,4.274c-0.826-0.838-1.539-1.77-2.126-2.773c-0.595,1.004-1.309,1.936-2.131,2.773c-0.473,0.48-0.755,1.286-0.755,2.162c0,0.873,0.282,1.682,0.755,2.161c0.822,0.836,1.536,1.767,2.131,2.772c0.587-1.006,1.3-1.937,2.126-2.772C21.648,7.567,21.648,5.304,20.63,4.274z"></path>
              <path d="M8.566,16.524c-0.476-0.479-1.269-0.767-2.134-0.767c-0.857,0-1.653,0.287-2.126,0.767c-0.826,0.837-1.745,1.562-2.731,2.161c0.986,0.601,1.905,1.326,2.731,2.164c0.473,0.478,1.269,0.766,2.126,0.766c0.865,0,1.658-0.288,2.134-0.766c0.824-0.838,1.741-1.563,2.729-2.164C10.308,18.086,9.391,17.361,8.566,16.524z"></path>
              <path d="M16.892,18.686c0,0.889,0.723,1.609,1.612,1.609c0.885,0,1.604-0.721,1.604-1.609s-0.72-1.608-1.604-1.608C17.614,17.077,16.892,17.797,16.892,18.686z"></path>
              <path d="M32.692,16.524c-0.473-0.479-1.267-0.767-2.129-0.767c-0.858,0-1.657,0.287-2.129,0.767c-0.824,0.837-1.744,1.562-2.732,2.161c0.988,0.601,1.908,1.326,2.732,2.164c0.472,0.478,1.271,0.766,2.129,0.766c0.862,0,1.656-0.288,2.129-0.766c0.826-0.838,1.746-1.563,2.732-2.164C34.438,18.086,33.519,17.361,32.692,16.524z"></path>
              <path d="M20.63,28.402c-0.826-0.837-1.539-1.771-2.126-2.773c-0.595,1.002-1.309,1.937-2.131,2.773c-0.473,0.479-0.755,1.286-0.755,2.162c0,0.874,0.282,1.682,0.755,2.16c0.822,0.838,1.536,1.771,2.131,2.773c0.587-1.003,1.3-1.936,2.126-2.773C21.648,31.696,21.648,29.432,20.63,28.402z"></path>
            </g>
          </svg>
          <div className="line1"></div>
        </div>
        <h3>
          “Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut <br /> metus varius laoreet. Quisque
          rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.”
        </h3>
        <ul className="sec2-con-single123">
          <NavLink to={`/product/Category/clothes`} className="sec2-single123">
            <li>CLOTHES</li>
          </NavLink>
          <NavLink
            to={`/product/Category/accessories`}
            className="sec2-single123"
          >
            {" "}
            <li> ACCESSORIES</li>
          </NavLink>
          <NavLink to={`/product/Category/shoes`} className="sec2-single123">
            {" "}
            <li>SHOES</li>
          </NavLink>
          <NavLink
            to={`/product/Category/Cosmetics`}
            className="sec2-single123"
          >
            {" "}
            <li>COSMETICS</li>
          </NavLink>
        </ul>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Section7home;
