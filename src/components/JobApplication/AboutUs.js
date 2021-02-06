import React, { Component } from "react";
import learn from "../../images/jobApplication/learn.jpg"
import challenge from "../../images/jobApplication/challenge.png"
import culture from "../../images/jobApplication/culture.png"
import development from "../../images/jobApplication/development.png"
import opportunity from "../../images/jobApplication/opportunity.png"
import rewards from "../../images/jobApplication/rewards.webp"

class AboutUs extends Component {
    constructor() {
        super();
        this.state = {
            opportunityPoints: [{
                image: learn,
                content: "Opportunity to learn from some of the best people in the industry."
            },
            {
                image: challenge,
                content: "A fast-paced and challenging work environment where you would never fall short of interesting problems which can be solved with data, logic, common sense, research, strategy, and psychology."
            },
            {
                image: culture,
                content: "A culture where actions and efforts get valued more than words and also gets visualized intangible growth."
            },
            {
                image: rewards,
                content: "Rewards for individual and team performance through programs like profit-sharing to help you live well"
            },
            {
                image: development,
                content: "Comprehensive development programs help you grow and progress in your career"
            },
            {
                image: opportunity,
                content: "Opportunity to work directly with the Directors and witnessing the highest levels of decision making."
            },
            ]
        };
    }

    render() {
        let { opportunityPoints } = this.state
        return (
            <>
                <div className="AboutUs">
                    <div className="AboutUs-heading">About the company</div>
                    <div className="AboutUs-content1">Classplus was born out of an urge to redefine classroom engagement in this country. A tutor's activities should be simplified, a kid's learning curves should be personalised and a parent should be continually notified. That's the step 1 of our mission. And we are always on the lookout for high energy, creative hustlers who can repel boundaries and dent one of the toughest education markets in the world.</div>
                    <div className="AboutUs-content1">Building every day, Learning every day- - Encapsulating Classplus
                    6 out of 10 coaching institutes are unable to expand themselves and are being beaten down by Edtech startups that are entering the Indian Education Market via e-learning.
                    </div>
                    <div className="AboutUs-content1">We are a vertical SaaS platform for serving hyperlocal coaching centers providing them with simplified intuitive technology. Coaching centers use Classplus to digitally communicate with students & parents, deliver video classes, study material, accept payments, and even sell courses to students across India.</div>
                    <div className="AboutUs-content1">The view has been delightful from the top as the market leaders in the B2B education segment but we strongly believe that being No.1 is a myth when you are aiming for complete dominance and create an everlasting impact in the Ed-Tech Industry</div>
                    <div className="AboutUs-content1">In two years, we have a base of over million users on the platform on a monthly basis. We are backed by global venture capitalists, serial entrepreneur-investors and giant tech corps in our mission. </div>
                </div>
                <div className="GetExcited">
                    <div className="GetExcited-heading">Get excited. We are.</div>
                    <div className="GetExcited-headingContent">Are you a passionate problem solver? As a kid, did you take apart toasters and cars to see how they worked? We did, too! At Classplus, we don’t just ask why things work, but also how and for whom. We believe in the power of making connections—between people, ideas, and technology.</div>
                    <div className="GetExcited-Opportunity">Why Choose Classplus?</div>
                    <div className="GetExcited-OpportunityList">
                        {opportunityPoints.map((opportunityPoint, index) => {
                            return <div className="GetExcited-OpportunityList-point" key={index}>
                                <div className="GetExcited-OpportunityList-image">
                                    <img src={opportunityPoint.image} style={{ height: "100%", width: "100%" }} />
                                </div>
                                <div className="GetExcited-OpportunityList-text">{opportunityPoint.content}</div>
                            </div>
                        })}

                    </div>
                </div>
            </>
        );
    }
}

export default AboutUs;
