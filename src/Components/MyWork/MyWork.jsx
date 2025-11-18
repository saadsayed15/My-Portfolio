import React from "react";
import "./MyWork.css";
import mywork_data from "../../assets/mywork_data";
import arrow from "../../assets/arrow.svg";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.W_image} alt="" />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://github.com/saadsayed15/saadsayed15"
          >
            {" "}
            Show More{" "}
          </a>
        </p>
        <img style={{ width: "40px" }} src={arrow} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
