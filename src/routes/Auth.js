import React, { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./css/auth.css";
const Auth = () => {
  return (
    <Fragment>
      <div className="container-auth">
        <ul className="sec2-con-single">
          <NavLink to={"/login/sigin"} className="sec2-single">
            <button className="bt122">Sign In</button>
          </NavLink>

          <NavLink to={`/login/register`} className="sec2-single">
            {" "}
            <button className="bt122">Register</button>
          </NavLink>
        </ul>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Auth;
