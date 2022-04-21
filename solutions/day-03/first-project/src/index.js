import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

const header = (
  <header>
    <h1 className="heading">SUBSCRIBE</h1>
    <p className="sub-heading">
      Sign up with your email Address to receive news and updates
    </p>
  </header>
);

const body = (
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

// JSX element, app, a container or a parent
const app = (
  <div className="app">
    {header}
    {body}
  </div>
);
root.render(<React.StrictMode>{app}</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
