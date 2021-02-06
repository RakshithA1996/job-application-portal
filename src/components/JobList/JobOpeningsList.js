import React, { Component } from "react";
import { Link } from "react-router-dom";


class JobOpeningsList extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        let { jobInfo } = this.props
        console.log(jobInfo)
        return (
            <div className="JobOpeningsList">
                <div className="JobOpeningsList-idContent">
                    <div className="JobOpeningsList-id">{jobInfo.id}.</div>
                    <div className="JobOpeningsList-Content">
                        <div className="JobOpeningsList-Title">{jobInfo.name}</div>
                        <div className="JobOpeningsList-Location">{jobInfo.location}</div>
                        <div className="JobOpeningsList-Location"><span className="bold small-font">Employment-Type: </span>{jobInfo.employment}<span className="bold small-font marginLeftStyle">Seniority-Level: </span>{jobInfo.level}</div>
                    </div>
                </div>
                <Link to={{ pathname: "/apply-job", state: { jobInfo: jobInfo } }}>
                    <button className="JobOpeningsList-Button">Apply</button>
                </Link>
            </div>
        );
    }
}

export default JobOpeningsList;
