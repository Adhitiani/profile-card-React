import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "JavaScript",
    level: "Advanced",
    color: "#EFD81D",
  },
  {
    skill: "node.js + Express.js",
    level: "Intermediate",
    color: "#7fc729",
  },
  {
    skill: "SQL + PostgreSQL",
    level: "Intermediate",
    color: "#3f87bf",
  },
  {
    skill: "HTML+CSS",
    level: "Intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "Beginner",
    color: "#60DAFB",
  },
  {
    skill: "Git and GitHub",
    level: "Intermediate",
    color: "lightgrey",
  },
];

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
    <div className="skill-list">
      {skills.map((skill) => {
        return (
          <Skill skill={skill.skill} color={skill.color} level={skill.level} />
        );
      })}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "Beginner" && "👶"}
        {level === "Intermediate" && "👍"}
        {level === "Advanced" && "💪"}
      </span>
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
