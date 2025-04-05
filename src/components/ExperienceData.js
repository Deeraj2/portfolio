import React from "react";

const ExperienceData = ({
  title,
  title2,
  desc1,
  desc2,
  desc3,
  desc4,
  date,
  descTitle,
  descTitle2,
  descTitle3,
  descTitle4,
  usedArray,
}) => {
  return (
    <div className="project">
      <div className="project-name">
        {/* <div className="experience-space"> */}
        <span className="expreience-title">{title}</span>
        {/* <span className="expreince-date">{date}</span> */}
        {/* </div> */}
        <br />
        <span className="expreience-title2">{title2}</span>
      </div>
      <p className="expreience-desc1">
        <strong>{descTitle}</strong> {desc1}
      </p>
      <p className="expreience-desc1">
        <strong>{descTitle2}</strong> {desc2}
      </p>
      <p className="expreience-desc1">
        <strong>{descTitle3}</strong> {desc3}
      </p>
      <p className="expreience-desc1">
        <strong>{descTitle4}</strong> {desc4}
      </p>
      <div className="project-used">
        <p>Brands:</p>
        {usedArray.map((used, index) => {
          return (
            <span key={index} className="project-used-item">
              {used}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceData;
