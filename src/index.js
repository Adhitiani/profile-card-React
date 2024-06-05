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
      <Skill skill="Javascript" emoji="👍" color="yellow" />
      <Skill skill="Node.js + Express.js" emoji="👍" color="#7fc729" />
      <Skill skill="SQL + PostgreSQL" emoji="👍" color="#3f87bf" />
      <Skill skill="HTML + CSS" emoji="👍" color="#e96328" />
      <Skill skill="React" emoji="👍" color="#5ed2f3" />
      <Skill skill="Git + GitHub" emoji="👍" color="lightgrey" />
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
