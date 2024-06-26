import React from "react";
import { Fragment, useState } from "react";
const Scroll = () => {
  const [scroll, setscroll] = useState(false);
  window.addEventListener("scroll", () => {
    let sc = window.scrollY;
    sc >= 351 ? setscroll(true) : setscroll(false);
  });
  return (
    <Fragment>
      {scroll ? (
        <>
          {" "}
          <div
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            className="scrollup"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="75px"
              height="75px"
              viewBox="0 0 75 75"
              enable-background="new 0 0 75 75"
            >
              <g>
                <path
                  fill="#9d9d9d"
                  d="M37.174,70.076L4.647,37.549L37.174,5.021l32.527,32.527L37.174,70.076z M6.061,37.549l31.113,31.113
						l31.113-31.113L37.174,6.436L6.061,37.549z"
                ></path>
              </g>
              <g>
                <polygon
                  fill="#9d9d9d"
                  points="27.936,38.677 27.229,37.97 37.174,28.021 47.098,37.945 46.391,38.652 37.174,29.436 	"
                ></polygon>
              </g>
              <g>
                <polygon
                  fill="#9d9d9d"
                  points="27.936,44.677 27.229,43.97 37.174,34.021 47.098,43.945 46.391,44.652 37.174,35.436 	"
                ></polygon>
              </g>
            </svg>
          </div>
        </>
      ) : undefined}
    </Fragment>
  );
};

export default Scroll;
