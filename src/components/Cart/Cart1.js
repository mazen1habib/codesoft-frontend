import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cartshop.css";
import "./cart1.css";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "./Cartslice";

import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Cart1 = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  let h = cart?.reduce((a, b) => a + b.totalQuantity, 0);
  let a = cart.map((b) => ({ id: b._id, number: b.cartQuantity }));
  let oo = {
    orderProduct: a,
    orderPrice: h,
    paymentType: "visa",
  };
  const Navigate = useNavigate();
  const [Errors, setErrors] = useState([]);
  const sumbitData = () => {
    axios
      .post(`http://localhost:4000/api/placeorder`, oo, {
        withCredentials: true,
      })
      .then((resp) => {
        if (resp.data.status === "success") {
          setErrors([]);
          Navigate(`shop/order/${resp.data.data.datas}`);
        }
      })
      .catch((er) => {
        console.log(er.response.data.data);
        setErrors(er.response?.data.data);
      });
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <Fragment>
      <section className="shop4">
        <div className="cart-container">
          <h2>Shopping Cart</h2>
          {Errors?.length > 0 && (
            <>
              {" "}
              <p> {Errors !== "jwt must be provided" && Errors} </p>
            </>
          )}
          {cart.length === 0 ? (
            <>
              <div className="cart-empty">
                <p>Your cart is currently empty</p>
                <div className="start-shopping">
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                    <span>Start Shopping</span>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <div className="titles">
                  <h3 className="product-title">Product</h3>
                  <h3 className="price">Price</h3>
                  <h3 className="quantity">Quantity</h3>
                  <h3 className="total">Total</h3>
                </div>
                <div className="cart-items">
                  {cart &&
                    cart.map((cartItem, idx) => (
                      <div className="cart-item">
                        <div className="cart-product" key={cartItem._id}>
                          <img src={cartItem.imagemean} alt="" />
                          <div className="sec1">
                            <h3>{cartItem.productName}</h3>
                            <p>{cartItem.productDescription}</p>
                            <button
                              class="btn"
                              onClick={() => handleRemoveFromCart(cartItem)}
                            >
                              <p class="paragraph"> delete </p>
                              <span class="icon-wrapper">
                                <svg
                                  class="icon"
                                  width="30px"
                                  height="30px"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
                                    stroke="#000000"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                              </span>
                            </button>
                            <button
                              onClick={() => handleRemoveFromCart(cartItem)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="cart-product-price">
                          ${cartItem.productPrice}
                        </div>
                        <div className="cart-product-quantity">
                          <button onClick={() => handleDecreaseCart(cartItem)}>
                            -
                          </button>
                          <div className="count">{cartItem.cartQuantity}</div>
                          <button onClick={() => handleAddToCart(cartItem)}>
                            +
                          </button>
                        </div>
                        <div className="cart-product-total-price" key={idx}>
                          {cartItem.productPrice * cartItem.cartQuantity}
                        </div>
                      </div>
                    ))}
                </div>
                <div className="cart-summary">
                  <button class="btn" onClick={() => handleClearCart()}>
                    <p class="paragraph"> Clear </p>
                    <span class="icon-wrapper">
                      <svg
                        class="icon"
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <div className="d-134">
                    <button className="btn133" onClick={sumbitData}>
                      add to order
                    </button>
                    <h3 style={{ color: "red" }}>
                      {Errors === "jwt must be provided" && (
                        <>
                          {" "}
                          Purchase could not be completed , please{" "}
                          <Link to={"/login/sigin"}>log in </Link>{" "}
                        </>
                      )}
                    </h3>
                  </div>
                  <h1>${h}</h1>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default Cart1;
