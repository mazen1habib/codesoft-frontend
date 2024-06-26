import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartslice } from "../Cart/Cartslice";
const GroupProduct = () => {
  const dispatch = useDispatch();
  const params = useParams((e) => e);
  let p = params.id;
  const [Allproduct, setAllproduct] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/products`, {
        withCredentials: true,
      })
      .then((res) => {
        setAllproduct(res.data.data);
        // setsusssfully(res?.data?.status);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Fragment>
      <div className="container-sec7-data">
        {Allproduct.map(
          (e) =>
            e.productCategory === p && (
              <>
                <div className="data-sec7-home">
                  <NavLink to={`/SingleProduct/${e._id}`}>
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
                  </NavLink>

                  <div className="d-12">
                    <div className="d-13">
                      <h1>{e.productName}</h1>
                      <h3>{e.productCategory}</h3>
                    </div>
                    <div>
                      <h2>${e.productPrice}</h2>
                      <h2>{e.productQuantity <= 0 && <>Sold Out</>}</h2>
                    </div>
                  </div>
                </div>
              </>
            )
        )}
      </div>
    </Fragment>
  );
};

export default GroupProduct;
