import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// exercise 2.1
import techsImage from "./images/frontend_technologies.png";
// exercise 3.2
import thienAvt from "./images/thien-avt.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const TechImages = () => (
  <img style={{ width: "100%" }} src={techsImage} alt="technologies" />
);

// exercise 2.2
const FormHeader = () => (
  <header>
    <h1 className="heading">SUBSCRIBE</h1>
    <p className="sub-heading">
      Sign up with your email Address to receive news and updates
    </p>
  </header>
);

const FormBody = () => (
  <form>
    <div className="form-group">
      <input type="text" placeholder="First name" className="form-control" />
      <input type="text" placeholder="Last name" className="form-control" />
      <input type="text" placeholder="email" className="form-control" />
    </div>
    <div className="form-button">
      <input type="submit" value={"subscribe"} className="form-submit" />
    </div>
  </form>
);

const Form = () => (
  <div className="form-exercise-3">
    <FormHeader />
    <FormBody />
  </div>
);

// exercise 3.1
const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const HexaColor = () => {
  const hex = hexaColor();
  const hexStyle = {
    borderRadius: 4,
    textAlign: "center",
    backgroundColor: hex,
    height: 40,
    display: "flex",
    fontSize: "1.8rem",
  };
  return (
    <div style={hexStyle}>
      <span style={{ margin: "auto", color: "#fff" }}>{hex}</span>
    </div>
  );
};

const HexColors = () => (
  <div className="hexColors">
    <HexaColor />
    <HexaColor />
    <HexaColor />
    <HexaColor />
    <HexaColor />
  </div>
);

// exercise 3.2

const user = {
  name: "Thien Dang",
  img: thienAvt,
  title: "Web developer, Danang",
  skills: ["HTML", "CSS", "JS", "Git", "MySQL", "ReactJS"],
  joinTime: "April 20, 2022",
};

const UserInfo = () => (
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
const UserSkills = () => (
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

const UserJoinTime = () => (
  <p className="user-join-time">
    <FontAwesomeIcon className="clock-icon" icon={faClock} />
    {user.joinTime}
  </p>
);
const Card = () => (
  <div className="exercise-32">
    <div className="card">
      <UserInfo />
      <UserSkills />
      <UserJoinTime />
    </div>
  </div>
);

const App = () => (
  <React.Fragment>
    <h2 className="exercise-heading">exercise 2.1</h2>
    <TechImages />
    <h2 className="exercise-heading">exercise 2.2</h2>
    <Form />
    <h2 className="exercise-heading">exercise 3.1</h2>
    <HexColors />
    <h2 className="exercise-heading">exercise 3.2</h2>
    <Card />
  </React.Fragment>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
