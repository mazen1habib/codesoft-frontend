import React, { Fragment } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import "./css/section2-single.css";
const Section2Single = () => {
  const params = useParams((e) => e);
  return (
    <Fragment>
      <ul className="sec2-con-single">
        <NavLink
          to={`/SingleProduct/${params.id}/description`}
          className="sec2-single"
        >
          <li> DESCRIPTION</li>
        </NavLink>

        <NavLink className="sec2-single">
          {" "}
          <li> ADDITIONAL INFORMATION</li>
        </NavLink>
        <NavLink className="sec2-single">
          {" "}
          <li>REVIEWS</li>
        </NavLink>
      </ul>
      <div className="sec2-data-single">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Section2Single;
