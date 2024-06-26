import axios from "axios";
import React, { Fragment, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./css/register.module.css";
const Resgiter = () => {
  const [userData, setuserData] = useState({
    userName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    creditCard: "",
  });
  const [Errors, setErrors] = useState([]);
  const Navigate = useNavigate();
  let sumbitData = () => {
    setErrors([]);
    axios
      .post(`http://localhost:4000/api/user/Register`, userData, {
        withCredentials: true,
      })
      .then((resp) => {
        console.log(resp);
        if (resp?.data?.status === "success") {
          console.log(resp);
          setErrors([]);
          Navigate("/");
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
          <p className={style.title}>Register </p>
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
              type="text"
              placeholder=""
              required=""
              onChange={(e) =>
                setuserData({ ...userData, userName: e.target.value })
              }
            />
            <span className={style.span}>Full Name</span>
          </label>
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
          <div className={style.flex}>
            <label className={style.label}>
              <input
                className={style.input1}
                type="text"
                placeholder=""
                required=""
                onChange={(e) =>
                  setuserData({ ...userData, phone: e.target.value })
                }
              />
              <span className={style.span}>Phone</span>
            </label>
            <label className={style.label}>
              <input
                className={style.input1}
                type="text"
                placeholder=""
                required=""
                onChange={(e) =>
                  setuserData({ ...userData, creditCard: e.target.value })
                }
              />
              <span className={style.span}>CreditCard</span>
            </label>
          </div>
          <label className={style.label}>
            <input
              className={style.input}
              type="text"
              placeholder=""
              required=""
              onChange={(e) =>
                setuserData({ ...userData, address: e.target.value })
              }
            />
            <span className={style.span}>Address</span>
          </label>

          <button className={style.submit} onClick={sumbitData}>
            Submit
          </button>
          <p className={style.signin}>
            Already have an acount ?{" "}
            <NavLink to={`/login/sigin`}>Signin</NavLink>{" "}
          </p>
        </form>
      </div>
    </Fragment>
  );
};

export default Resgiter;
