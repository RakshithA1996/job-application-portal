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
                <div className="JoinUs--Heading">Do you love solving problems? Do you like to challenge yourself? Do beautiful products inspire you? Does the impact opportunity that EdTech provides excite you?</div>
                <div className="JoinUs--subTexts">If your answer is yes to all the above, then come and join. Let's build Classplus...</div>
                <Link to={{ pathname: "/job-list" }} >
                    <button className="JoinUs--Btn">Join Us</button>
                </Link>
            </div>
        );
    }
}

export default JoinUs;
