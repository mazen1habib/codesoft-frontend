import React, { Fragment, useState } from "react";
import logodark from "../images/Black-x2.png";
// import logolight from '../images/White-x2.png'
import { Link, NavLink } from "react-router-dom";
// import { IoSearchSharp } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FiUser } from "react-icons/fi";
import "./nav.css";
const Nav = () => {
  const [x, setx] = useState("false");
  return (
    <Fragment>
      <nav>
        <Link to={"/"}>
          {" "}
          <img src={logodark} alt="" />{" "}
        </Link>
        <div className="nav-center ">
          <ul>
            <li>
              <div
                style={{ cursor: "pointer", position: "relative" }}
                className="nav-main"
              >
                HOME
              </div>
              <div className="dropdown-home">
                <ul>
                  <NavLink to={"/"}>
                    <li>Main Home</li>
                  </NavLink>
                  <NavLink>
                    <li>Modelling Agency </li>
                  </NavLink>
                  <NavLink>
                    <li>Fashion Store</li>
                  </NavLink>
                  <NavLink>
                    <li>Fullscreen Showcase </li>
                  </NavLink>
                  <NavLink>
                    <li>Portfolio Masonry</li>
                  </NavLink>
                  <NavLink>
                    <li>Cosmetics Home</li>
                  </NavLink>
                  <NavLink>
                    <li>Fashion Blog</li>
                  </NavLink>
                  <NavLink>
                    <li>Divided Showcase</li>
                  </NavLink>
                  <NavLink>
                    <li>Metro Showcase</li>
                  </NavLink>
                  <NavLink>
                    <li>Card Home</li>
                  </NavLink>
                  <NavLink>
                    <li>Hairstyle Home</li>
                  </NavLink>
                  <NavLink>
                    <li>Shop Home</li>
                  </NavLink>
                  <NavLink>
                    <li>Landing</li>
                  </NavLink>
                </ul>
              </div>
            </li>
            <li>
              <div className="nav-main" style={{ cursor: "pointer" }}>
                <span>PAGES</span>
              </div>
              <div className="dropdown-pages">
                <ul>
                  <NavLink to={"/profile"}>
                    <li>Profile </li>
                  </NavLink>
                  <NavLink>
                    <li>About Us</li>
                  </NavLink>
                  <NavLink>
                    <li>About Me </li>
                  </NavLink>
                  <NavLink>
                    <li>About The Model</li>
                  </NavLink>
                  <NavLink>
                    <li>Our Team </li>
                  </NavLink>
                  <NavLink>
                    <li>Our Services</li>
                  </NavLink>
                  <NavLink>
                    <li>Our Clients</li>
                  </NavLink>
                  <NavLink>
                    <li>Become A Model</li>
                  </NavLink>
                  <NavLink>
                    <li>Contact Us</li>
                  </NavLink>
                </ul>
              </div>
            </li>
            <li>
              <div className="nav-main" style={{ cursor: "pointer" }}>
                <span>SHOP</span>
              </div>
              <div className="dropdown-shop">
                <div className="shop-1">
                  <h3>PRODUCTS</h3>
                  <ul>
                    <NavLink>
                      <li>Standard</li>
                    </NavLink>
                    <NavLink>
                      <li>Grouped</li>
                    </NavLink>
                    <NavLink>
                      <li>Variable</li>
                    </NavLink>
                    <NavLink>
                      <li>Downloadable</li>
                    </NavLink>
                    <NavLink>
                      <li>Virtual</li>
                    </NavLink>
                    <NavLink>
                      <li>External</li>
                    </NavLink>
                    <NavLink>
                      <li>On sale</li>
                    </NavLink>
                    <NavLink>
                      <li>New Product</li>
                    </NavLink>
                  </ul>
                </div>
                <div className="shop-2">
                  <h3>SHOP TYPES</h3>
                  <ul>
                    <NavLink>
                      <li>Standard</li>
                    </NavLink>
                    <NavLink>
                      <li>Left Sidebar</li>
                    </NavLink>
                    <NavLink>
                      <li>Without Sidebar</li>
                    </NavLink>
                    <NavLink>
                      <li>Info On Hover</li>
                    </NavLink>
                  </ul>
                </div>
                <div className="shop-3">
                  <h3>LAYOUTS</h3>
                  <ul>
                    <NavLink>
                      <li>Two Columns</li>
                    </NavLink>
                    <NavLink>
                      <li>Three Columns</li>
                    </NavLink>
                    <NavLink>
                      <li>Four Columns</li>
                    </NavLink>
                    <NavLink>
                      <li>Four Columns Wide</li>
                    </NavLink>
                    <NavLink>
                      <li>Five Columns Wide</li>
                    </NavLink>
                    <NavLink>
                      <li>Six Columns Wide</li>
                    </NavLink>
                  </ul>
                </div>
                <div className="shop-4">
                  <h3>SHOP PAGES</h3>
                  <ul>
                    <NavLink>
                      <li>My Account</li>
                    </NavLink>
                    <NavLink>
                      <li>Cart</li>
                    </NavLink>
                    <NavLink>
                      <li>Checkout</li>
                    </NavLink>
                  </ul>
                </div>
              </div>
            </li>
            <li style={{ cursor: "pointer" }}>
              <div className="nav-main">
                <span>BLOG</span>
              </div>
              <div className="dropdown-blog">
                <ul>
                  <NavLink>
                    {" "}
                    <li>Centered List</li>
                  </NavLink>
                  <NavLink>
                    {" "}
                    <li className="st-1">
                      {" "}
                      Standard List
                      <div className="post-type">
                        <ul>
                          <NavLink>
                            <li>Standard</li>
                          </NavLink>
                          <NavLink>
                            <li>Gallery</li>
                          </NavLink>
                          <NavLink>
                            <li>Link</li>
                          </NavLink>
                          <NavLink>
                            <li>Quote</li>
                          </NavLink>
                          <NavLink>
                            <li>Video</li>
                          </NavLink>
                          <NavLink>
                            <li>Audio</li>
                          </NavLink>
                          <NavLink>
                            <li>Without Sidebar</li>
                          </NavLink>
                        </ul>
                      </div>
                    </li>
                  </NavLink>
                  <NavLink>
                    {" "}
                    <li className="st-1">
                      Post Types
                      <div className="standard-list">
                        <ul>
                          <NavLink>
                            <li>Right Sidebar</li>
                          </NavLink>
                          <NavLink>
                            <li>Left Sidebar</li>
                          </NavLink>
                          <NavLink>
                            <li>Without Sidebar</li>
                          </NavLink>
                        </ul>
                      </div>
                    </li>
                  </NavLink>
                </ul>
              </div>
            </li>
            <li style={{ cursor: "pointer" }}>
              <div className="nav-main">
                <span>PORTFOLIO</span>
              </div>
              <div className="dropdown-profile">
                <ul>
                  <NavLink>
                    {" "}
                    <li className="st-1">
                      {" "}
                      Types
                      <div className="types-list">
                        <ul>
                          <NavLink>
                            <li>Standard</li>
                          </NavLink>
                          <NavLink>
                            <li>Gallery</li>
                          </NavLink>
                          <NavLink>
                            <li>Gallery Joined</li>
                          </NavLink>
                          <NavLink>
                            <li>Masonry</li>
                          </NavLink>
                          <NavLink>
                            <li>Masonry Joined</li>
                          </NavLink>
                        </ul>
                      </div>
                    </li>
                  </NavLink>
                  <NavLink>
                    {" "}
                    <li className="st-1">
                      Layouts
                      <div className="layout-list">
                        <ul>
                          <NavLink>
                            <li>Two Columns</li>
                          </NavLink>
                          <NavLink>
                            <li>Three Columns</li>
                          </NavLink>
                          <NavLink>
                            <li>Three Columns Wide</li>
                          </NavLink>
                          <NavLink>
                            <li>Four Columns</li>
                          </NavLink>
                          <NavLink>
                            <li>Four Columns Wide</li>
                          </NavLink>
                          <NavLink>
                            <li>Five Columns Wide</li>
                          </NavLink>
                          <NavLink>
                            <li>Six Columns Wide</li>
                          </NavLink>
                        </ul>
                      </div>
                    </li>
                  </NavLink>
                  <NavLink>
                    <li className="st-1">
                      Single
                      <div className="single-list">
                        <ul>
                          <NavLink>
                            <li>Big Images</li>
                          </NavLink>
                          <NavLink>
                            <li>Small Images</li>
                          </NavLink>
                          <NavLink>
                            <li>Full Width Images</li>
                          </NavLink>
                          <NavLink>
                            <li>Big Slider</li>
                          </NavLink>
                          <NavLink>
                            <li>Small Slider</li>
                          </NavLink>
                          <NavLink>
                            <li>Big Gallery</li>
                          </NavLink>
                          <NavLink>
                            <li>Small Gallery</li>
                          </NavLink>
                          <NavLink>
                            <li>Big Masonry</li>
                          </NavLink>
                          <NavLink>
                            <li>Small Masonry</li>
                          </NavLink>
                        </ul>
                      </div>
                    </li>
                  </NavLink>
                </ul>
              </div>
            </li>
            <li style={{ cursor: "pointer" }}>
              <div className="nav-main">
                <span>ELEMENTS</span>
              </div>
              <div className="dropdown-shop">
                <div className="shop-1">
                  <h3>CLASSIC</h3>
                  <ul>
                    <NavLink>
                      <li>Accordions</li>
                    </NavLink>
                    <NavLink>
                      <li>Tabs</li>
                    </NavLink>
                    <NavLink>
                      <li>Buttons</li>
                    </NavLink>
                    <NavLink>
                      <li>Clients</li>
                    </NavLink>
                    <NavLink>
                      <li>Contact Form</li>
                    </NavLink>
                    <NavLink>
                      <li>Image Gallery</li>
                    </NavLink>
                    <NavLink>
                      <li> Blog List</li>
                    </NavLink>
                  </ul>
                </div>
                <div className="shop-2">
                  <h3>INTERACTIVE</h3>
                  <ul>
                    <NavLink>
                      <li>Banner</li>
                    </NavLink>
                    <NavLink>
                      <li>Team List</li>
                    </NavLink>
                    <NavLink>
                      <li>Instagram List</li>
                    </NavLink>
                    <NavLink>
                      <li>Testimonials</li>
                    </NavLink>
                    <NavLink>
                      <li>Portfolio List</li>
                    </NavLink>
                    <NavLink>
                      <li>Product List</li>
                    </NavLink>
                    <NavLink>
                      <li>Product Overview</li>
                    </NavLink>
                    <NavLink>
                      <li>Video Button</li>
                    </NavLink>
                    <NavLink>
                      <li>Image Carousel</li>
                    </NavLink>
                  </ul>
                </div>
                <div className="shop-3">
                  <h3>INFOGRAPHIC</h3>
                  <ul>
                    <NavLink>
                      <li>Counters</li>
                    </NavLink>
                    <NavLink>
                      <li>Countdown</li>
                    </NavLink>
                    <NavLink>
                      <li>Pie Chart</li>
                    </NavLink>
                    <NavLink>
                      <li>Progress Bar</li>
                    </NavLink>
                    <NavLink>
                      <li>Pricing Tables</li>
                    </NavLink>
                    <NavLink>
                      <li>Icon With Text</li>
                    </NavLink>
                    <NavLink>
                      <li>Google Maps</li>
                    </NavLink>
                  </ul>
                </div>
                <div className="shop-4">
                  <h3>TYPOGRAPHY</h3>
                  <ul>
                    <NavLink>
                      <li>Headings</li>
                    </NavLink>
                    <NavLink>
                      <li>Columns</li>
                    </NavLink>
                    <NavLink>
                      <li>Blockquote</li>
                    </NavLink>
                    <NavLink>
                      <li>Dropcaps</li>
                    </NavLink>
                    <NavLink>
                      <li>Highlights</li>
                    </NavLink>
                    <NavLink>
                      <li>Lists</li>
                    </NavLink>
                    <NavLink>
                      <li>Section Title</li>
                    </NavLink>
                    <NavLink>
                      <li>Separators</li>
                    </NavLink>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          {/*
           ***************************** */}
          <ul
            className="bigmenu"
            style={x ? { display: "none" } : { display: "flex" }}
          >
            <li>
              <div
                style={{ cursor: "pointer", position: "relative" }}
                className="nav-main"
              >
                HOME
              </div>
              <div className="dropdown-home">
                <ul>
                  <NavLink to={"/"}>
                    <li>Main Home</li>
                  </NavLink>
                  <NavLink>
                    <li>Modelling Agency </li>
                  </NavLink>
                  <NavLink>
                    <li>Fashion Store</li>
                  </NavLink>
                  <NavLink>
                    <li>Fullscreen Showcase </li>
                  </NavLink>
                  <NavLink>
                    <li>Portfolio Masonry</li>
                  </NavLink>
                  <NavLink>
                    <li>Cosmetics Home</li>
                  </NavLink>
                  <NavLink>
                    <li>Fashion Blog</li>
                  </NavLink>
                  <NavLink>
                    <li>Divided Showcase</li>
                  </NavLink>
                  <NavLink>
                    <li>Metro Showcase</li>
                  </NavLink>
                  <NavLink>
                    <li>Card Home</li>
                  </NavLink>
                  <NavLink>
                    <li>Hairstyle Home</li>
                  </NavLink>
                  <NavLink>
                    <li>Shop Home</li>
                  </NavLink>
                  <NavLink>
                    <li>Landing</li>
                  </NavLink>
                </ul>
              </div>
            </li>
            <li>
              <div className="nav-main" style={{ cursor: "pointer" }}>
                <span>PAGES</span>
              </div>
              <div className="dropdown-pages">
                <ul>
                  <NavLink>
                    <li>About Us</li>
                  </NavLink>
                  <NavLink>
                    <li>About Me </li>
                  </NavLink>
                  <NavLink>
                    <li>About The Model</li>
                  </NavLink>
                  <NavLink>
                    <li>Our Team </li>
                  </NavLink>
                  <NavLink>
                    <li>Our Services</li>
                  </NavLink>
                  <NavLink>
                    <li>Our Clients</li>
                  </NavLink>
                  <NavLink>
                    <li>Become A Model</li>
                  </NavLink>
                  <NavLink>
                    <li>Get In Touch</li>
                  </NavLink>
                  <NavLink>
                    <li>Contact Us</li>
                  </NavLink>
                </ul>
              </div>
            </li>
            <li>
              <div className="nav-main" style={{ cursor: "pointer" }}>
                <span>SHOP</span>
              </div>
            </li>
            <li style={{ cursor: "pointer" }}>
              <div className="nav-main">
                <span>PORTFOLIO</span>
              </div>
            </li>
            <li style={{ cursor: "pointer" }}>
              <div className="nav-main">
                <span>ELEMENTS</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="nav-left">
          {/* <IoSearchSharp size={26} /> */}
          <Link to={"/shop"}>
            {" "}
            <LiaShoppingBagSolid size={26} />
          </Link>
          <Link to={"/login"}>
            <FiUser size={26} />
          </Link>
          {/* <div id="menuToggle">
            <input id="checkbox" type="checkbox" />
            <label class="toggle" for="checkbox">
              <div class="bar bar--top"></div>
              <div class="bar bar--middle"></div>
              <div class="bar bar--bottom"></div>
            </label>
          </div> */}
          <div className="dogle">
            <input
              id="burger-checkbox"
              type="checkbox"
              onClick={() => setx(!x)}
            />
            <label class="burger" for="burger-checkbox">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Nav;
