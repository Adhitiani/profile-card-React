import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Profile />
        <Skilllist />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./profile.jpg" alt="Adhitiani" />;
}

function Profile() {
  return (
    <main>
      <h1>Adhitiani Suzanthi</h1>
      <p>
        Full-stack developer and coding for kids teacher. When not coding, I
        like to read manga and webtoon, or hunting for a new specialty coffee
        place in town.
      </p>
    </main>
  );
}

function Skilllist() {
  return (
    <ul className="skill-list">
      <Skill skill="HTML + CSS" emoji="👍" color="red" />
      <Skill skill="Javascript" emoji="👍" color="yellow" />
      <Skill skill="React" emoji="👍" color="lightblue" />
      <Skill skill="nodeJs + Express.Js" emoji="👍" color="lightgreen" />
      <Skill skill="SQL + PostgresSQL" emoji="👍" color="salmon" />
      <Skill skill="Git + GitHub" emoji="👍" color="grey" />
    </ul>
  );
}

function Skill(props) {
  return (
    <li className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
