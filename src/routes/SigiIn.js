import axios from "axios";
import React, { Fragment, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./css/register.module.css";

const SigiIn = () => {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });
  const [Errors, setErrors] = useState([]);
  const Navigate = useNavigate();
  let sumbitData = () => {
    setErrors([]);
    axios
      .post(`http://localhost:4000/api/user/login`, userData, {
        withCredentials: true,
      })
      .then((resp) => {
        console.log(resp);
        if (resp?.data?.status === "success") {
          console.log(resp);
          setErrors([]);
          Navigate("/profile");
        }
      })
      .catch((er) => {
        console.log(er.response);
        setErrors(er.response?.data?.data);
      });
  };
  return (
    <Fragment>
      <div className={style.container}>
        <form className={style.form} onSubmit={(e) => e.preventDefault()}>
          <p className={style.title}>Sign In </p>
          {Errors?.length > 0 ? (
            Errors?.map((e, idx) => (
              <>
                {" "}
                <p key={idx} className={style.po}>
                  {" "}
                  {e}{" "}
                </p>
              </>
            ))
          ) : (
            <p> welcome</p>
          )}
          <label className={style.label}>
            <input
              className={style.input}
              type="email"
              placeholder=""
              required=""
              onChange={(e) =>
                setuserData({ ...userData, email: e.target.value })
              }
            />
            <span className={style.span}>Email</span>
          </label>

          <label className={style.label}>
            <input
              className={style.input}
              type="password"
              placeholder=""
              required=""
              onChange={(e) =>
                setuserData({ ...userData, password: e.target.value })
              }
            />
            <span className={style.span}>Password</span>
          </label>
          <button className={style.submit} onClick={sumbitData}>
            Submit
          </button>
          <p className={style.signin}>
            You do not have an acount ?{" "}
            <NavLink to={`/login/register`}>Register</NavLink>{" "}
          </p>
        </form>
      </div>
    </Fragment>
  );
};

export default SigiIn;
