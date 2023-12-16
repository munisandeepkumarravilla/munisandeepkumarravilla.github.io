import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings, I'm <span className="purple">Muni Sandeep Kumar Ravilla</span> from{" "}
            <span className="purple">Bhubaneswar, India</span>.
            <br />
            Currently, I am contributing as a software developer at Juspay.
            <br />
            I hold a Master of Science in Information Technology from Arizona State University ( May 2024) and a Bachelor of Engineering in Computer Science and Engineering from R.M.K Engineering College, affiliated with Anna University.
            <br />
            <br />
            My technical expertise includes proficiency in C++, Python, JavaScript, People Code, PSQUERY, and tools like Tableau. I have hands-on experience with databases such as GitHub, Git, GIS, Discord API, and SQL. In addition, I've demonstrated my analytical skills using NumPy, Matplotlib, and Pandas.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
