import React from 'react'
import Carousel from './Carousel';

//import {Link} from 'react-router-dom';


export const Features = () => {
    return (
        <div className="features">
            <div className="features__header">
                <div className="features__header--heading heading--mega" style={{ color: "rgba(0,0,0,0.77)" }}>
                    Classplus Clans
                </div>
                <div className="features__header--content p--medium green--text">
                </div>
            </div>
            <div className="features__content">
                <Carousel />
                {/*<FeaturesList />*/}
            </div>
            {
                //     <div className="features__link">
                //     <Link to="/features">Learn more about Classplus features</Link>
                // </div>
            }
        </div>
    )
}

export default Features