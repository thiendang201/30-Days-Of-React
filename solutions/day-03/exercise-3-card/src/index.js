import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import thienAvt from "./images/thien-avt.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const user = {
  name: "Thien Dang",
  img: thienAvt,
  title: "Web developer, Danang",
  skills: ["HTML", "CSS", "JS", "Git", "MySQL", "ReactJS"],
  joinTime: "April 20, 2022",
};

const userInfo = (
  <div className="info-container">
    <div className="user-info">
      <img className="user-img" src={user.img} alt="user img" />
      <h1 className="user-name">
        {user.name}{" "}
        <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
      </h1>
      <p className="title">{user.title}</p>
    </div>
  </div>
);
const userSkills = (
  <div>
    <h2 className="skill-title">SKILLS</h2>
    <div className="skills">
      {user.skills.map((skill, index) => (
        <span key={index} className="user-skill">
          {skill}
        </span>
      ))}
    </div>
  </div>
);
const card = (
  <div className="card">
    {userInfo}
    {userSkills}
    <p className="user-join-time">
      <FontAwesomeIcon className="clock-icon" icon={faClock} />
      {user.joinTime}
    </p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{card}</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
