import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./styles.css";

const fields = {
  Frontend: ["React", "Angular", "Vue"],
  Backend: ["Node JS", "Django", "Laravel", ".NET Core"],
  Mobile: ["Flutter" , "Android" , "iOS"],
  Data: ["Data Analyst" , "Data Engineer" , "Data Scientist"],
  AI: ["AI Engineer","Machine Learning Engineer"],
  Design: ["UI/UX Designer"],
  Testing: ["Tester"],
};

const students = [
  { 
    name: "Ammar Yasser", 
    skill: "Django", 
    field: "Backend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "React Developer with experience in UI/UX and front-end frameworks.",
    cv: "https://example.com/ammar-react-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "Laravel", 
    field: "Backend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "Angular expert with a passion for dynamic web applications.",
    cv: "https://example.com/ammar-angular-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: ".NET Core", 
    field: "Backend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "Vue.js enthusiast creating smooth and interactive UIs.",
    cv: "https://example.com/ammar-vue-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "Data Analyst", 
    field: "Data",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "React Developer with experience in UI/UX and front-end frameworks.",
    cv: "https://example.com/ammar-react-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "UI/UX Designer", 
    field: "Design",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "Angular expert with a passion for dynamic web applications.",
    cv: "https://example.com/ammar-angular-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "Software Tester", 
    field: "Tester",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "Vue.js enthusiast creating smooth and interactive UIs.",
    cv: "https://example.com/ammar-vue-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "React", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "React Developer with experience in UI/UX and front-end frameworks.",
    cv: "https://example.com/ammar-react-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "Angular", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "Angular expert with a passion for dynamic web applications.",
    cv: "https://example.com/ammar-angular-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "Vue", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "Vue.js enthusiast creating smooth and interactive UIs.",
    cv: "https://example.com/ammar-vue-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "React", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "React Developer with experience in UI/UX and front-end frameworks.",
    cv: "https://example.com/ammar-react-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "Angular", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "Angular expert with a passion for dynamic web applications.",
    cv: "https://example.com/ammar-angular-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "Vue", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "Vue.js enthusiast creating smooth and interactive UIs.",
    cv: "https://example.com/ammar-vue-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "React", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "React Developer with experience in UI/UX and front-end frameworks.",
    cv: "https://example.com/ammar-react-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "Angular", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "Angular expert with a passion for dynamic web applications.",
    cv: "https://example.com/ammar-angular-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "Vue", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "Vue.js enthusiast creating smooth and interactive UIs.",
    cv: "https://example.com/ammar-vue-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "React", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "React Developer with experience in UI/UX and front-end frameworks.",
    cv: "https://example.com/ammar-react-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "Angular", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "Angular expert with a passion for dynamic web applications.",
    cv: "https://example.com/ammar-angular-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "Vue", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "Vue.js enthusiast creating smooth and interactive UIs.",
    cv: "https://example.com/ammar-vue-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "React", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "React Developer with experience in UI/UX and front-end frameworks.",
    cv: "https://example.com/ammar-react-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "Angular", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "Angular expert with a passion for dynamic web applications.",
    cv: "https://example.com/ammar-angular-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "Vue", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "Vue.js enthusiast creating smooth and interactive UIs.",
    cv: "https://example.com/ammar-vue-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "React", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "React Developer with experience in UI/UX and front-end frameworks.",
    cv: "https://example.com/ammar-react-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "Angular", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "Angular expert with a passion for dynamic web applications.",
    cv: "https://example.com/ammar-angular-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "Vue", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "Vue.js enthusiast creating smooth and interactive UIs.",
    cv: "https://example.com/ammar-vue-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "React", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "React Developer with experience in UI/UX and front-end frameworks.",
    cv: "https://example.com/ammar-react-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "Angular", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "Angular expert with a passion for dynamic web applications.",
    cv: "https://example.com/ammar-angular-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "Vue", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "Vue.js enthusiast creating smooth and interactive UIs.",
    cv: "https://example.com/ammar-vue-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "React", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "React Developer with experience in UI/UX and front-end frameworks.",
    cv: "https://example.com/ammar-react-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "Angular", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "Angular expert with a passion for dynamic web applications.",
    cv: "https://example.com/ammar-angular-cv",
  },
  { 
    name: "Ammar Yasser", 
    skill: "Vue", 
    field: "Frontend",
    image: "/Ammar.jpeg", 
    github: "https://github.com/Ammarr26", 
    linkedin: "https://www.linkedin.com/in/ammar20/",
    description: "Vue.js enthusiast creating smooth and interactive UIs.",
    cv: "https://example.com/ammar-vue-cv",
  },
];

const App = () => {
  const [selectedField, setSelectedField] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const roles = selectedField ? fields[selectedField] : [];

  const filteredStudents = students.filter(
    (student) =>
      (selectedField ? student.field === selectedField : true) &&
      (selectedRole ? student.skill === selectedRole : true)
  );

  return (
    <div className="container">
      <h1 className="title">EL SEWEDY STUDENTS FINDER</h1>

      <div className="dropdown-container">
        {}
        <select
          className="dropdown"
          value={selectedField}
          onChange={(e) => {
            setSelectedField(e.target.value);
            setSelectedRole("");
          }}
        >
          <option value="">Select Field</option>
          {Object.keys(fields).map((field, index) => (
            <option key={index} value={field}>
              {field}
            </option>
          ))}
        </select>

        {}
        <select
          className="dropdown"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          disabled={!selectedField}
        >
          <option value="">Select Role</option>
          {roles.map((role, index) => (
            <option key={index} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      <div className="students">
        {filteredStudents.map((student, index) => (
          <div key={index} className="student-card">
            <div className="image-container">
              <img src={student.image} alt={student.name} className="student-image" />
              <div className="hover-overlay">
                <a href={student.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="social-icon" />
                </a>
                <a href={student.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="social-icon" />
                </a>
              </div>
            </div>
            <h3>{student.name}</h3>
            <p className="skill">{student.skill}</p>
            <p className="description">{student.description}</p>
            <a href={student.cv} target="_blank" rel="noopener noreferrer">
              <button className="portfolio-button">Open Portfolio</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;