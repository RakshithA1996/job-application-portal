import React from 'react'
import Carousel from './Carousel';

export const Features = () => {
    return (
        <div className="features">
            <div className="features__header">
                <div className="features__header--heading heading--mega" style={{ color: "rgba(0,0,0,0.77)" }}>
                    Company Clans
                </div>
                <div className="features__header--content p--medium green--text">
                </div>
            </div>
            <div className="features__content">
                <Carousel />
            </div>
        </div>
    )
}

export default Features