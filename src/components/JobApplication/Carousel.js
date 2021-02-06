import React, { Component } from "react";
import Image from "react-image-webp";
import SVGQuotes from "../../images/SVGQuotes.svg";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { browserSupportability, imageBaseUrl } from "../../utils/constant";
import RishabPic from "../../images/jobApplication/rishab.jpeg"
import NandiniPic from "../../images/jobApplication/nandini.jpeg"
import harshPic from "../../images/jobApplication/harsh.jpeg"
// import { PreloadImage } from "@classplus-engineering/components";


class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      speed: 1000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      pauseOnHover: true,
    };

    const isWebpSupported = browserSupportability();
    return (
      <Slider {...settings}>
        <div className="EmployeeFeed">
          <div className="EmployeeFeed--profile" style={{ border: "8px solid #4b4b4b" }}>
            <img src={NandiniPic} alt="" className="EmployeeFeed--profile-pic" />
          </div>
          <div className="EmployeeFeed--name" style={{ color: "#4b4b4b" }}>Nandini Mehrotra</div>
          <div className="EmployeeFeed--designation" style={{ color: "#4b4b4b" }}>Customer Success Lead at Classplus</div>
          <div className="EmployeeFeed--contentContainer" style={{ background: "#4b4b4b" }}>
            <div className="EmployeeFeed--contentTopic bold" style={{ color: "white" }}>"Celebrate Small Victories"</div>
            <div className="EmployeeFeed--content" style={{ color: "white" }}>My favorite GP is “Celebrate small victories”.</div>
            <div className="EmployeeFeed--content" style={{ color: "white" }}>I work as a Customer Success Manager at Classplus and have been handling multiple customers since Day 1. I believe that a company must celebrate its small achievements to achieve its long term goal. I found this culture at Classplus, my third company, after working with two big Indian companies.</div>
            <div className="EmployeeFeed--content" style={{ color: "white" }}>I experience this principle daily. My team celebrates everything big and small, from daily target achievement, customer happiness, new initiatives to even teachers taking their first LIVE Class on their applications. This principle helps us scale massively and keeps us motivated.</div>
            <div className="EmployeeFeed--content" style={{ color: "white" }}>We are committed to this principle, so every time a teacher’s application goes LIVE we ring a bell, and when they share their experiences adapting to the new normal we do a little happy dance too :D</div>
            <div className="EmployeeFeed--content" style={{ color: "white" }}><span className="bold">Nandini Mehrotra</span>, you are amazing!</div>
            <div className="EmployeeFeed--content bold" style={{ color: "white" }}>#ClassplusClan #ClassplusGreatnessPrinciples #Classplus #EDTech #Culture #Teamwork</div>

          </div>
        </div>

        <div className="EmployeeFeed">
          <div className="EmployeeFeed--profile">
            <img src={RishabPic} alt="" className="EmployeeFeed--profile-pic" />
          </div>
          <div className="EmployeeFeed--name">Rishab Gupta</div>
          <div className="EmployeeFeed--designation">iOS Developer at Classplus</div>
          <div className="EmployeeFeed--contentContainer">
            <div className="EmployeeFeed--contentTopic bold">"Fly High !"</div>
            <div className="EmployeeFeed--content">I have completed 2 years at <span className="bold">Classplus</span> , and I still learn new things every day!</div>
            <div className="EmployeeFeed--content">When I joined, we were a small team of less than 40 people and now it’s an army of 300+ bright minds. I came in with simple expectations like learning new things and meeting great people, and now 2 years down the line, I've learned a lot personally and professionally. I've learned the importance of teamwork with a fantastic team, as an engineer how every code has an impact in someone’s life.</div>
            <div className="EmployeeFeed--content">I used to work in a service-based company, and then I joined Classplus, an early stage product startup, and everything changed. Hustle and passion are real!
            The culture here is you work hard and then chill harder. We all put in day and night of hard work, and then the joy of celebrating the success is incredible.</div>
            <div className="EmployeeFeed--content">The best part about being an engineer at Classplus we talk to our customers on a regular basis. When a teacher says “Classplus made my life easy”, all the hustle makes sense and we feel humbled.</div>
            <div className="EmployeeFeed--content bold"><span className="bold">#ClassplusClan</span> Always!</div>
          </div>
        </div>

        <div className="EmployeeFeed">
          <div className="EmployeeFeed--profile" style={{ border: "8px solid #7c7347" }}>
            <img src={harshPic} alt="" className="EmployeeFeed--profile-pic" />
          </div>
          <div className="EmployeeFeed--name" style={{ color: "#7c7347" }}>Harsh Srivastava</div>
          <div className="EmployeeFeed--designation" style={{ color: "#7c7347" }}>Product Designer at Classplus </div>
          <div className="EmployeeFeed--contentContainer" style={{ background: "#7c7347" }}>
            <div className="EmployeeFeed--contentTopic bold" style={{ color: "#f4f7f8" }}>"Why are we doing it ?"</div>
            <div className="EmployeeFeed--content" style={{ color: "#f4f7f8" }}>Being a Product Designer, this is one of my favorite questions, "Why are we doing it?" A single design change makes an impact on millions of lives now. So this GP is the guiding principle and so very relevant to my work.</div>
            <div className="EmployeeFeed--content" style={{ color: "#f4f7f8" }}>Here at Classplus, before beginning any design sprint, we try and build a hypothesis around the problem statement and find probable solutions for it. The answer to "Why are we doing it?" helps me make better decisions about the needs and the potential impact it might have on our customers.</div>
            <div className="EmployeeFeed--content" style={{ color: "#f4f7f8" }}>Whenever a tutor says, "All thanks to the Classplus team, I can now do X activity better." It gives us a sense of accomplishment.</div>
            <div className="EmployeeFeed--content" style={{ color: "#f4f7f8" }}><span className="bold">#ClassplusClan</span> - Realise the impact of your every plan and action.
            <span className="bold">Harsh Srivastava</span>, you are Awesome!</div>
            <div className="EmployeeFeed--content bold" style={{ color: "#f4f7f8" }}>#ClassplussGreatnessPrinciples #Classplus #EDTech #Culture #Teamwork #ProductDesign</div>

          </div>
        </div>

      </Slider>
    );
  }
}

export default Carousel;
