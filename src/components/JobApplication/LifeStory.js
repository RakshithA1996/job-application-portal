import React from "react";

export const LifeStory = () => {

  return (
    <div className="LifeStory">
      <div className="LifeStory--text">
        <div className="LifeStory__heading heading--mega">Town Hall Award Winner</div>
        <div className="LifeStory__content p--medium green--text">
          Meet our tech rockstars who got awarded on our virtual quarterly town hall!
        Congratulate to these amazing folks. <span className="bold">#Classplus #ClassplusClan #Techhiring</span>
        </div>

      </div>

      <div className="marginTop3">
        <iframe
          src={
            "https://www.youtube.com/embed/WsoBdG2zT-o"
          }
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="iframeVideo"
          title="Classplus Video"
        ></iframe>
      </div>


    </div>
  );
};

export default LifeStory;
