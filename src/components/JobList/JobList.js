import React, { Component } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import JobOpeningsList from "./JobOpeningsList"
import back from "../../images/next.svg"
import { withRouter } from "react-router";


class JobList extends Component {
    constructor() {
        super();
        this.state = {
            jobList: [{
                id: 1,
                name: "Software Engineer/Frontend Developer",
                location: "District, State",
                employment: "Full-time",
                level: "Entry level",
            },
            {
                id: 2,
                name: "Backend Developer",
                location: "District, State",
                employment: "Part-time",
                level: "Manager level",
            },
            {
                id: 3,
                name: "Frontend Developer",
                location: "Bangalore, Karnataka",
                employment: "District, State",
                level: "Manager level",
            },
            {
                id: 4,
                name: "Fullstack Developer",
                location: "District, State",
                employment: "Full-time",
                level: "Entry level",
            },
            {
                id: 5,
                name: "Software Engineer Intern",
                location: "District, State",
                employment: "Full-time",
                level: "Entry level",
            },
            ]

        };
    }



    render() {
        let { jobList } = this.state;
        return (
            <div className="JobList">
                <Navigation />
                <div className="JobList-jobListing">
                    <div className="JobList-Heading">
                        <img src={back} alt="back" onClick={()=>{this.props.history.push("/career")}} />
                        <label>Job Openings</label>
                    </div>
                    {jobList.map((jobData, index) => {
                        return <JobOpeningsList jobInfo={jobData} />
                    })}
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(JobList);
