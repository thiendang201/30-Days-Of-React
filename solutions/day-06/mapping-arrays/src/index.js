import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const Header = () => (
  <header className="header">
    <h1 className="heading">30 Day Of React</h1>
  </header>
);

/*
 * Exercise 1
 */
const isPrime = (number = 0) => {
  if (number < 2) return false;

  for (let i = 2; i <= Math.sqrt(number); i++)
    if (number % i === 0) return false;

  return true;
};

const type = (number) => {
  if (isPrime(number)) return "prime";
  const isOdd = number % 2 !== 0;
  return isOdd ? "odd" : "even";
};

const Number = ({ number }) => (
  <div className={"grid-item " + type(number)}>
    <span className="number-content">{number}</span>
  </div>
);

const Numbers = ({ numbers }) => {
  const numberList = numbers.map((number, index) => (
    <Number key={index} number={number} />
  ));
  return (
    <section className="section">
      <h2 className="section-heading">Number Generator</h2>
      <div className="grid-8">{numberList}</div>
    </section>
  );
};

/*
 * Exercise 2
 */
const hexColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const HexColor = ({ hex }) => (
  <div className="grid-item" style={{ backgroundColor: hex }}>
    <span className="hex-content">{hex}</span>
  </div>
);

const HexColors = ({ hexColors }) => {
  const hexColorList = hexColors.map((hex, index) => (
    <HexColor key={index} hex={hex} />
  ));
  return (
    <section className="section">
      <h2 className="section-heading">Hexadecimal Colors</h2>
      <div className="grid-8">{hexColorList}</div>
    </section>
  );
};

/*
 * Exercise 3
 */

const Population = ({ data: { country, population, maxPopulation } }) => {
  const width = (population / maxPopulation) * 100 + "%";
  return (
    <div className="country-population">
      <div className="country">{country}</div>
      <div className="progressBar">
        <div className="progress" style={{ width }}></div>
      </div>
      <div className="population">{population}</div>
    </div>
  );
};

const Populations = ({ populations }) => {
  const p = populations.map(({ population }) => population);
  const maxPopulation = Math.max(...p);
  const populationList = populations.map((population, index) => (
    <Population key={index} data={{ ...population, maxPopulation }} />
  ));

  return (
    <section className="section">
      <h2 className="section-heading">World Populations</h2>
      <p className="sub-heading">Ten most populated countries</p>
      <div className="flex-column">{populationList}</div>
    </section>
  );
};

const Body = ({ data: { numbers, hexColors, populations } }) => (
  <div className="body">
    <Numbers numbers={numbers} />
    <HexColors hexColors={hexColors} />
    <Populations populations={populations} />
  </div>
);

const App = () => {
  const numbers = [];
  const hexColors = [];
  const populations = [
    { country: "World", population: 7693165599 },
    { country: "China", population: 1377422166 },
    { country: "India", population: 1295210000 },
    { country: "United States of America", population: 323947000 },
    { country: "Indonesia", population: 258705000 },
    { country: "Brazil", population: 206135893 },
    { country: "Pakistan", population: 194125062 },
    { country: "Nigeria", population: 186988000 },
    { country: "Bangladesh", population: 161006790 },
    { country: "Russian Federation", population: 146599183 },
    { country: "Japan", population: 126960000 },
  ];

  for (let i = 0; i <= 31; i++) {
    numbers.push(i);
    hexColors.push(hexColor());
  }

  return (
    <React.Fragment>
      <Header />
      <Body data={{ numbers, hexColors, populations }} />
    </React.Fragment>
  );
};

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
