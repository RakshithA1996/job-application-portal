import React, { Component } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import webBanner from "../../images/jobApplication/WebBannerInde.jpg"
import MobileBanner from "../../images/jobApplication/MobileBannerInde.jpg"
import Feature from "./Features"
import videoBg from "../../Videos/videoplayback.mp4"
import AboutUs from "./AboutUs"
import LifeStory from "./LifeStory"
import JoinUs from "./JoinUs"
import { Link } from "react-router-dom";


class JobApplication extends Component {
  constructor() {
    super();
    this.state = {
      navButton:false
    }
  }

  componentDidMount(){
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 650) {
        this.setState({ navButton: true });
      } else {
        this.setState({ navButton: false });
      }
    };
  }

  render() {
    return (
      <div className="jobApplication">
        <Navigation navButton={this.state.navButton} />
        {/*<img src={window.innerWidth > 600 ? webBanner : MobileBanner} alt="" className={window.innerWidth > 600 ? "jobApplication--WebBanner" : "jobApplication--MobileBanner"} />*/}
        <div className="jobApplication-videoHeader">
          <video autoPlay muted loop className="jobApplication-videoBackground">
            <source src={videoBg} type="video/mp4" />
          </video>
          <div className="jobApplication-welcome-msg">
            <h1>Looking for a job?</h1>
            <p>Find one here</p>
            <Link to={{ pathname: "/job-list" }}>
              <button className="jobApplication-viewJobBtn">View Open Jobs</button>
            </Link>
          </div>
        </div>
        <AboutUs />
        <Feature />
        <JoinUs />
        <LifeStory />
        <Footer />
      </div>
    );
  }
}

export default JobApplication;
