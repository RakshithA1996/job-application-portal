import React from "react";
import classplusLogoGrey from "../images/classplusLogo-grey.svg";
import SVGPhone from "../images/SVGPhone.svg";
import SVGLinkedIn from "../images/SVGLinkedIn.svg";
import SVGMail from "../images/SVGMail.svg";
import SVGFb from "../images/SVGFb.svg";
import PNGWhatsapp from "../images/PNGWhatsapp.png";
import YouTubeSVG from "../images/youtube.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__content grid--9">
        <div className="Footer__content--logo">
          <a href="https://web.classplusapp.com">
            <img src={classplusLogoGrey} alt="Classplus Grey" />
          </a>
        </div>

        <div className="Footer__content--company">
          <div className="Footer__content--title classplusFooter">
            CLASSPLUS
          </div>
          <div>
            <Link
              to="/features"
              className="Footer__content--company--item p--small"
            >
              Product
            </Link>
          </div>
          <div>
            <Link to="/tnc" className="Footer__content--company--item p--small">
              Terms of Use
            </Link>
          </div>
          <div>
            <Link
              to="/policy"
              className="Footer__content--company--item p--small"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="Footer__content--contact">
          <div className="Footer__content--title">CONTACT INFO</div>
          <div className="Footer__content--address">
            1<sup>st</sup> Floor, D8, Sector 3, Noida, Uttar Pradesh 201301
          </div>
          <div className="Footer__content--phone">
            {
              //   <span className="Footer__content--phone--extra flexrow jcCheat">
              //   <img
              //     src={SVGPhone}
              //     alt=""
              //     className="Footer__content--phone--img"
              //   />
              //   <span>7290085264</span>
              // </span>
            }
            <span
              className="Footer__content--phone--extra flexrow jcCheat"
              style={{ marginTop: "1rem" }}
            >
              <img
                src={SVGPhone}
                alt=""
                className="Footer__content--phone--img"
              />
              <span>8588802867</span>
            </span>
          </div>
        </div>

        <div className="Footer__content--reach">
          <div className="Footer__content--title marginLeft3">
            KEEP IN TOUCH
          </div>
          <div className="Footer__content--contacts">
            <a
              href="https://www.facebook.com/classplusapp"
              rel="noopener noreferrer"
            >
              <img src={SVGFb} alt="Fb" />
            </a>
            <a
              href="https://www.linkedin.com/company/10177906/"
              rel="noopener noreferrer"
            >
              <img src={SVGLinkedIn} alt="LinkedIn" />
            </a>
            <a href="mailto:support@classplusapp.com" rel="noopener noreferrer">
              <img src={SVGMail} alt="Mail" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=917290085264&text=Hi Classplus, I would like to know more about your Complete Coaching Solution"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={PNGWhatsapp} alt="Whatsapp" width="16" height="16" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCp0yDDnyu-C-0Bo_y1JbGtA/featured"
              rel="noopener noreferrer"
            >
              <img src={YouTubeSVG} alt="Yt" />
            </a>
          </div>
        </div>
      </div>
      <div className="Footer__copyrights p--small">
        © 2020 Bunch Microtechnologies Pvt Ltd. <br />
        All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
