import axios from "axios";
import Sectionshop from "./Sectionshop";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./css/singleproduct.css";
import Section2Single from "./Section2Single";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartslice } from "../Cart/Cartslice";
const SingleProduct = () => {
  const dispatch = useDispatch();
  const [groups, setgroups] = useState({});
  const [Allproduct, setAllproduct] = useState([]);
  const params = useParams((e) => e);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/products/${params.id}`, {
        withCredentials: true,
      })
      .then((res) => setgroups(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/products/Category/${params.id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setAllproduct(res.data.data);
        // setsusssfully(res?.data?.status);
      })
      .catch((err) => console.log(err));
  }, []);
  let image = groups?.images;
  return (
    <Fragment>
      <Sectionshop />
      <div className="container-single">
        <div className="con-single" key={groups?._id}>
          <div className="single-imges">
            <div className="imges">
              {image?.map((e, idx) => (
                <>
                  <img src={e} alt="" key={idx} />
                </>
              ))}
            </div>
            <img src={groups?.imagemean} alt="" />
          </div>
          <div className="data-single">
            <h2>{groups?.productName}</h2>
            <h4>$ {groups?.productPrice}</h4>
            <p>{groups?.productDescription}</p>
            <div>
              <button
                class="btn-17"
                onClick={() => {
                  dispatch(cartslice.actions.addToCart(groups));
                }}
              >
                <span class="text-container">
                  <span class="text">ADD TO CART</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Section2Single />
      <div className="container-sec7-data">
        {Allproduct?.map((e, idx) =>
          groups?._id === e?._id ? undefined : (
            <>
              <div className="data-sec7-home">
                <Link to={`/SingleProduct/${e?._id}`}>
                  <div className="d-14">
                    <div className="shadow-14">
                      <button
                        className="but-33"
                        onClick={() => {
                          dispatch(cartslice.actions.addToCart(e));
                        }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                    <img src={e.imagemean} alt="" />
                  </div>
                </Link>
                <div className="d-12">
                  <div className="d-13">
                    <h1>{e.productName}</h1>
                    <h3>{e.productCategory}</h3>
                  </div>
                  <h2>${e.productPrice}</h2>
                </div>
              </div>
            </>
          )
        )}
      </div>
    </Fragment>
  );
};

export default SingleProduct;
