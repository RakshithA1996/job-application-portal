import React, { Component } from "react";
import back from "../../images/next.svg"
import { withRouter } from "react-router";


class JobDetails extends Component {
    constructor() {
        super();
        this.state = {
        };
    }



    render() {
        let {jobInfo} = this.props
        return (<div>
            <div className="backBtn"><img src={back} alt="back" onClick={()=>{this.props.history.push("/job-list")}} /></div>
                <div className="JobDetails" >
                <div className="JobDetails--title">{jobInfo.name}</div>
                <div className="JobDetails--location"><span className="bold">Location:</span> {jobInfo.location}</div>
                <div className="JobDetails--location"><span className="bold">Industry:</span> Information Technology & Services  Computer Software  Internet</div>
                <div className="JobDetails--location"><span className="bold">Employment Type:</span> {jobInfo.employment}</div>
                <div className="JobDetails--location"><span className="bold">Seniority Level:</span> {jobInfo.level}</div>
                <div className="JobDetails--aboutRoleHead">About The Role</div>
                <ul>
                <li className="JobDetails--aboutRoleContent">As a Front End Developer at Classplus, you will be responsible for implementing visual elements that are visible from the computer users vantage point within a web application. You will combine the art of design with the science of programming.</li>
                <li className="JobDetails--aboutRoleContent">You will be responsible for the translation of UI/UX design wireframes to actual code. There are times you will be expected to work independently to meet tight deadlines following design guidelines.</li>
                </ul>
                <div className="JobDetails--aboutRoleHead">What You'll Do</div>
                <ul>
                <li className="JobDetails--aboutRoleContent">Previous experience of working as a React.js Developer</li>
                <li className="JobDetails--aboutRoleContent">In-depth experience of JavaScript, CSS, HTML and front-end languages</li>
                <li className="JobDetails--aboutRoleContent">Experience of REACT tools including React.js, Webpack Redux</li>
                </ul>
                <div className="JobDetails--aboutRoleHead">What We Need</div>
                <ul>
                <li className="JobDetails--aboutRoleContent">Experience with parsing and manipulating XML and JSON.</li>
                <li className="JobDetails--aboutRoleContent">Deep understanding of JavaScript patterns and the challenges involved with creating maintainable JavaScript applications.</li>
                <li className="JobDetails--aboutRoleContent">Experience developing multi-channel, mobile-responsive and mobile-adaptive UI</li>
                <li className="JobDetails--aboutRoleContent">Experience with Front-end tools for testing and automation, like Gulp,Cypress Mocha. etc</li>
                <li className="JobDetails--aboutRoleContent">Experience building large-scale high-performance systems and sites</li>
                </ul>
                <div className="JobDetails--aboutRoleHead">We'd Also Love To See</div>
                <ul>
                <li className="JobDetails--aboutRoleContent">Interesting hobby projects, open-source contributions, etc</li>
                <li className="JobDetails--aboutRoleContent">Sharing of knowledge - via either formal mentoring, reviewing code, reviewing design documents, providing technical talks, teaching classes, or as a consultant on projects
                Seniority Level
                Entry level
                
                Industry
                Information Technology & Services  Computer Software  Internet
                Employment Type
                Full-time
                
                Job Functions
                Engineering  Information Technology</li>
                </ul>
                </div>
        </div>
            
        );
    }
}

export default withRouter(JobDetails);
