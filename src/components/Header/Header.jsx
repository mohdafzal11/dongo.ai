import React, { useState } from "react";
import logo from "../../assets/logo.png";
import arrow from "../../assets/right-up.png";
import "../../index.css";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="sticky top-0 shadow-md ssr-variant hidden-142h2bu hidden-1pkud1z px-4 md:px-12 bg-opacity-30">
      <div>
        <img src="" alt="" />
      </div>
      <nav
        className="framer-l1a4q framer-zuyt8d framer-v-zuyt8d"
        data-framer-name="Desktop"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          width: "100%",
        }}
        tabIndex="0"
      >
        <div
          className="framer-1jxanm2"
          data-framer-name="Navbar Wrapper"
          data-highlight="true"
          tabIndex="0"
        >
          <a
            className="framer-10l9enq framer-1bzlzrv"
            data-framer-name="Logo"
            href="index.html"
            data-framer-page-link-current="true"
          >
            <div
              data-framer-component-type="SVG"
              data-framer-name="dongo_icon"
              style={{
                imageRendering: "pixelated",
                flexShrink: 0,
                fill: "black",
                color: "black",
              }}
              className="framer-10kxidm"
            >
              <div
                className="svgContainer flex justify-center items-center"
                style={{
                  width: "100%",
                  height: "100%",
                  aspectRatio: "inherit",
                }}
              >
                <img src={logo} alt="" />
              </div>
            </div>
            <div
              className="framer-ipfh2c"
              style={{
                outline: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                flexShrink: 0,
                "--extracted-r6o4lv": "rgb(255, 255, 255)",
                transform: "none",
              }}
              data-framer-component-type="RichTextContainer"
            >
              <p
                style={{
                  "--font-selector": "Q1VTVE9NO1NGIFVJIERpc3BsYXkgUmVndWxhcg==",
                  "--framer-font-family":
                    '"SF UI Display Regular", "SF UI Display Regular Placeholder", sans-serif',
                  "--framer-font-size": "22px",
                  "--framer-text-color":
                    "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                }}
                className="framer-text"
              >
                Dongo.ai
              </p>
            </div>
          </a>
          <div
            className="framer-uzudi7-container invisible xl:visible "
            style={{ transform: "translateY(-50%)" }}
          >
            <a
              className="framer-jQrN5 framer-1fmd4um framer-v-8lsfsr framer-1281bkk"
              data-border="true"
              data-framer-name="Variant 5"
              data-highlight="true"
              style={{
                "--border-bottom-width": "0.5px",
                "--border-color": "rgb(255, 255, 255)",
                "--border-left-width": "0.5px",
                "--border-right-width": "0.5px",
                "--border-style": "solid",
                "--border-top-width": "0.5px",
                borderBottomLeftRadius: "56px",
                borderBottomRightRadius: "56px",
                borderTopLeftRadius: "56px",
                borderTopRightRadius: "56px",
                boxShadow: "inset 0px 0px 19px 0px rgba(255, 255, 255, 0.06)",
              }}
              href="https://app.dongo.ai/"
              target="_blank"
              rel="noopener"
              tabIndex="0"
            >
              <div
                className="framer-1fbo492"
                style={{
                  outline: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  flexShrink: 0,
                  "--extracted-r6o4lv": "rgb(255, 255, 255)",
                  transform: "none",
                }}
                data-framer-component-type="RichTextContainer"
              >
                <p
                  style={{
                    "--font-selector": "Q1VTVE9NO1NGIFVJIERpc3BsYXkgTWVkaXVt",
                    "--framer-font-family":
                      '"SF UI Display Medium", "SF UI Display Medium Placeholder", sans-serif',
                    "--framer-font-size": "17px",
                    "--framer-text-color":
                      "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                  }}
                  className="framer-text"
                >
                  Dashboard
                </p>
              </div>
            </a>
          </div>
          <div className="hover:opacity-100"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
          >
            <a
              className="framer-jQrN5 framer-1fmd4um framer-v-1drae96 "
              data-border="true"
              data-framer-name="Small"
              data-highlight="true"
              style={{
                "--border-bottom-width": "1px",
                "--border-color": "rgba(161, 174, 229, 0.2)",
                "--border-left-width": "1px",
                "--border-right-width": "1px",
                "--border-style": "solid",
                "--border-top-width": "1px",
                borderBottomLeftRadius: "56px",
                borderBottomRightRadius: "56px",
                borderTopLeftRadius: "56px",
                borderTopRightRadius: "56px",
                boxShadow: "inset 0px 0px 20px 0px rgba(255, 255, 255, 0.06)",
                background:
                  "linear-gradient(180deg, rgb(21, 119, 189) 0%, rgb(7, 90, 150) 100%)",
              }}
              href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x8c213AE332274e6314Bf4cF989604e7f61162967"
              target="_blank"
              rel="noopener"
              tabIndex="0"
            >
              <div
                className="framer-1fbo492"
                style={{
                  outline: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  flexShrink: 0,
                  transform: "none",
                }}
                data-framer-component-type="RichTextContainer"
              >
                <p
                  style={{
                    "--font-selector": "Q1VTVE9NO1NGIFVJIERpc3BsYXkgTWVkaXVt",
                    "--framer-font-family":
                      '"SF UI Display Medium", sans-serif',
                    "--framer-font-size": "17px",
                  }}
                  className="framer-text"
                >
                  <span
                    data-text-fill="true"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgb(182, 194, 241) 0%, rgb(235, 239, 255) 100%)",
                    }}
                    className="framer-text"
                  >
                    &#x24;DONGO
                  </span>
                </p>
              </div>
              <div className="framer-vx6s8c">
                <div
                  className={`svgContainer ${isHovered?"":"opacity-50"} `}
                  style={{
                    width: "100%",
                    height: "100%",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <svg
                    fill="#ffffff"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
