import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import student from "./assets/student.png";
import classroom from "./assets/classroom.png";
import "./App.css";

function App() {
  return (
    <div>
      <h2>SDG 4: Quality Education in Classrooms – Shaping the Future</h2>
      <p>
        In 2015, world leaders adopted 17 Sustainable Development Goals (SDGs),
        aimed at addressing the planet's most pressing issues. <br /> Among
        these, <b>SDG 4: Quality Education</b> seeks to ensure inclusive,
        equitable, and quality education for all, promoting lifelong learning
        opportunities. In this presentation, we explore how this can be
        effectively implemented in modern classrooms.
      </p>
      <img src={student} style={{ width: "10rem", aspectRatio: "1/1" }} />
      <h3>Why Education Matters</h3>
      <p>
        Education is the foundation of sustainable development. It empowers
        individuals, fosters creativity, and drives social progress. However,
        millions of children and young people worldwide still lack access to
        quality education due to economic, geographical, and social barriers.
      </p>
      <h4>But what does ‘quality education’ mean?</h4>
      <p>
        Quality education isn't just about teaching facts; it’s about equipping
        students with the skills, tools, and knowledge needed for a changing
        world. In this digital age, classrooms must evolve to include critical
        thinking, digital literacy, and real-world problem-solving skills.
      </p>
      <br />
      <h2>Challenges Facing Classrooms Today</h2>
      <p>
        While access to education has improved globally, there are still
        significant challenges that prevent many students from receiving a
        quality education:
      </p>
      <ul style={{ textAlign: "start", alignItems: "start" }}>
        <li>
          <b>Unequal Access</b> <br />– Millions of students lack the resources
          needed to succeed, especially in rural and underserved communities.
        </li>
        <br />
        <li>
          <b>Outdated Learning Methods</b> <br />– Traditional “lecture-style”
          learning is often not interactive, and students are not engaged in
          critical thinking or creativity.
        </li>
        <br />
        <li>
          <b>Lack of Digital Skills</b> <br />– In an increasingly digital
          world, students must be equipped with digital literacy to succeed.
          Many schools, however, lack the technology and expertise to teach
          these skills.
        </li>
        <br />
        <li>
          <b>Teacher Shortages</b> <br />– There is a global shortage of trained
          and qualified teachers, particularly in science, technology,
          engineering, and math (STEM) fields.
        </li>
      </ul>
      <div style={{ width: "100%", justifyContent: "end", display: "flex" }}>
        <p style={{ width: "30%" }}></p>
        <p style={{ width: "70%", textAlign: "end", color: "limegreen" }}>
          According to the Uganda Bureau of Statistics (UBOS), a 2014 national
          household survey indicated that about 20% of primary-school-aged
          children (6–12 years) were not enrolled in school, and 12.5% of those
          enrolled were not attending school (Uganda Bureau of Statistics,
          2017).
        </p>
      </div>
      <h2>3. Proposed Solutions (SDG 4 in Action)</h2>
      <h3>Transforming Classrooms to Meet SDG 4</h3>
      <p>
        Achieving <b>SDG 4: Quality Education</b> requires bold changes in how
        we approach teaching and learning. Below are key strategies to implement
        SDG 4 in the classroom:
      </p>
      <ol style={{ textAlign: "start" }}>
        <li>
          <b>Technology-Enhanced Learning</b> <br /> By integrating technology
          such as tablets, computers, and mobile apps, classrooms can become
          interactive hubs where students can engage with content more
          dynamically. Using e-learning platforms can also bridge the gap
          between rural and urban education.
        </li>
        <br />
        <li>
          <b>Teacher Training & Support</b> <br /> Investing in ongoing
          professional development for teachers ensures that they are equipped
          to teach modern skills like coding, problem-solving, and critical
          thinking.
        </li>
        <br />
        <li>
          <b>Inclusivity & Accessibility</b> <br /> Ensure classrooms cater to
          students with diverse learning needs. Digital resources such as
          text-to-speech tools, and adjustable learning platforms can help
          students of all abilities engage with education.
        </li>
        <br />
        <li>
          <b>Global Citizenship Education</b> <br /> Integrating real-world
          issues like climate change, social justice, and environmental
          sustainability helps prepare students to be informed global citizens.
          This aligns the classroom with several SDGs, beyond just SDG 4.
        </li>
      </ol>
      <h2>Implementation Steps</h2>
      <h3>How to Implement SDG 4 in the Classroom</h3>
      <p>
        Implementing SDG 4 requires a step-by-step approach to transform
        classrooms. Here’s how we can start:
      </p>
      <ol style={{ textAlign: "start" }}>
        <li>
          <b>Step 1: Teacher Training</b> <br />
          Equip teachers with modern teaching techniques, including the use of
          digital tools like Google Classroom or Moodle for lesson plans,
          assignments, and quizzes.
        </li>
        <br />
        <li>
          <b>Step 2: Digital Learning Resources</b> <br /> Schools can
          incorporate e-learning platforms and low-bandwidth mobile apps to
          enable learning anywhere. These platforms allow students to download
          materials and engage with interactive content, even in areas with
          limited internet.
        </li>
        <br />
        <li>
          <b>Step 3: Interactive Classroom Environments</b> <br /> Transition
          classrooms from passive learning to active engagement through group
          discussions, project-based learning, and digital simulations.
        </li>
        <br />
        <li>
          <b>Step 4: Monitoring & Evaluation</b> <br /> Schools should track
          progress with data-driven tools, monitoring student performance,
          teacher feedback, and digital learning outcomes to continuously
          improve the education system.
        </li>
      </ol>
      <img
        src={classroom}
        style={{ width: "20rem", aspectRatio: "1/1", textAlign: "start" }}
      />
      <h2>Conclusion</h2>
      <h3>Education for the Future</h3>
      <p>
        The future of classrooms lies in inclusivity, innovation, and
        technology. By investing in quality education through SDG 4, we can
        empower the next generation of leaders, innovators, and change-makers.
      </p>
      <p>
        SDG 4 isn’t just a goal; it’s a commitment to transforming education to
        ensure that every child, no matter where they are, has the opportunity
        to learn and grow. Let’s take that first step toward creating classrooms
        that are ready for the future.
      </p>
      <h3>Call to Action</h3>
      <p>
        Let’s commit to making SDG 4 a reality in every classroom. Together, we
        can shape a better world through quality education.
      </p>
    </div>
  );
}

export default App;
