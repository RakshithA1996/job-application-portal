import React, { Component } from "react";
import { Link } from "react-router-dom";

class JoinUs extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {

        return (
            <div className="JoinUs">
                <Link to={{ pathname: "/job-list" }} >
                    <button className="JoinUs--Btn">Join Us</button>
                </Link>
            </div>
        );
    }
}

export default JoinUs;
