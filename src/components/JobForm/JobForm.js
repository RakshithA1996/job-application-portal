import React, { Component } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Form from "./Form"
import JobDetails from "./JobDetails"


class JobForm extends Component {
    constructor() {
        super();
        this.state = {
        };
    }



    render() {
        let { jobInfo } = this.props.location.state;
        console.log(jobInfo)

        return (
            <div className="JobForm">
                <Navigation />
                <JobDetails jobInfo={jobInfo} />
                <Form />
                <Footer />
            </div>
        );
    }
}

export default JobForm;
