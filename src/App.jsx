import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import student from "./assets/student.png";
import classroom from "./assets/classroom.png";
import "./App.css";

function App() {
  const activities = [
    {
      activity: "Read introduction section of Good Health and Well-being",
      time: "8 min",
    },
    {
      activity: "Read through factors that make people sick",
      time: "20 min",
    },
    {
      activity: "Watch Mental Health videos (optional)",
      time: "6 min",
    },
    {
      activity: "Complete Worksheet 1",
      time: "15 min",
    },
  ];
  const problems = [
    {
      problem: "Lack of Money",
      explanation:
        "Insufficient funds for healthcare, medicine, and nutritious food",
    },
    {
      problem: "Lack of Access",
      explanation:
        "Limited availability of healthcare services, doctors, and hospitals",
    },
    {
      problem: "Lack of Education",
      explanation:
        "Insufficient knowledge about healthy habits, disease prevention, and treatment",
    },
    {
      problem: "Poor Sanitation and Hygiene",
      explanation:
        "Inadequate waste management, clean water, and toilet facilities",
    },
    {
      problem: "Conflict and Displacement",
      explanation:
        "War, natural disasters, and migration affecting healthcare access",
    },
  ];

  return (
    <div style={{ marginTop: "5rem" }}>
      <div
        style={{
          width: "100%",
          height: "5rem",
          backgroundColor: "pink",
          position: "absolute",
          top: "0px",
          left: "0",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <span>
          <a
            style={{ color: "black", textDecoration: "underline" }}
          >
            Home
          </a>
        </span>
        <span>
          <a
            style={{ color: "black" }}
            href="https://www.papers.phmsociety.org/index.php/phmconf/article/view/2333"
          >
            PHM for astronauts
          </a>
        </span>
        <span>
          <a
            style={{ color: "black" }}
            href="https://findahealthcenter.hrsa.gov/"
          >
            Health Center
          </a>
        </span>
        <span>
          <a
            style={{ color: "black" }}
            href="https://www.pharmacymentor.com/pharmacy-google-maps-ads/"
          >
            Pharmacy 
          </a>
        </span>
        <span>
          <a
            style={{ color: "black" }}
            href="mailto:joshbrison41@gmail.com"
          >
            Contact Us
          </a>
        </span>
      </div>
      <h2>SDG 3: Good Health and Well-Being: Lesson Plan</h2>

      <img src={student} style={{ width: "10rem", aspectRatio: "1/1" }} />
      <h3>Aims and outcomes: </h3>
      <ul style={{ textAlign: "start" }}>
        <li>To define health. </li>
        <li>To recall different types of diseases and ill-health. </li>
        <li>
          To recall some of the barriers in the way of Good Health for All.
        </li>
        <li>To understand and recall solutions to Good Health for All</li>
      </ul>
      <br />
      <h3>Lesson Plan 1: What makes people sick? </h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>
              Activity
            </th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Time</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {activity.activity}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {activity.time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Resources and materials: </h3>
      <ul style={{ textAlign: "start" }}>
        <li>
          World changers website – ‘Good Health and Well-Being’, ‘The Problem’,
          ‘Different Things That Can Make People Sick’{" "}
        </li>
        <li>
          Interactive whiteboard, computers, tablets, or printouts to display
          website
        </li>
        <li>Worksheet 1 </li>
      </ul>
      <br />
      <h3>
        Lesson Plan 2: What are the big problems in the way of Good Health for
        All?{" "}
      </h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>
              Big Problems
            </th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>
              Explanation
            </th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {problem.problem}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {problem.explanation}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3> Resources and materials:</h3>
      <ul style={{ textAlign: "start" }}>
        <li>
          World changers website – ‘Good Health and Well-Being’, ‘The Problem’
        </li>
        <li>
          Interactive whiteboard, computers, tablets, or printouts to display
          website{" "}
        </li>
      </ul>
      <br />
      <h3>
        Lesson Plan 3: How can we keep our minds and bodies working as they
        should?{" "}
      </h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>
              Activity
            </th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>
              Timing
            </th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>
              Discuss Big Problems
            </td>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>
              15 min
            </td>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>
              Display 'Big Problems' section. Students discuss solutions in
              pairs (2 min per problem).
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>
              Share Solutions
            </td>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>
              15 min
            </td>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>
              Go through each problem. Students share ideas. Read relevant World
              Changers solution section.
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Resources and Materials:</h3>
      <ul style={{ textAlign: "start" }}>
        <li>
          World changers website – ‘Good Health and Well-Being Sanitation’, ‘The
          Solution’
        </li>
        <li>Interactive whiteboard</li>
        <li>Computers</li>
        <li>Tablets</li>
        <li>Printouts to display website resources and materials</li>
      </ul>
      <img src={classroom} style={{ width: "20rem", aspectRatio: "1/1" }} />

      <br />
      <br />
      <div>
        <h1>GOOD HEALTH AND WELL BEING</h1>
        <p>
          WORLD CHANGERS
          <br />
          <b>"A Journey of Good health and well being"</b>
          {/* Your story here */}
          <br />
          <br />
          &copy; GOOD HEALTH AND WELL BEING
        </p>
        <footer
          style={{
            backgroundColor: "#f2f2f2",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
              backgroundColor: "rgb(248, 142, 4)",
            }}
          >
            {/* Add footer links here */}
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default App;
