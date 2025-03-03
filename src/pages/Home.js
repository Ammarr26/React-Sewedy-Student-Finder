import React from "react";
import StudentCard from "../components/StudentCard";

const students = [
  { name: "Ammar Yasser", field: "React" },
  { name: "Ammar Yasser", field: "Angular" },
  { name: "Ammar Yasser", field: "Vue" }
];

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">EL SEWEDY STUDENTS FINDER</h1>
      <select className="dropdown">
        <option>All Fields</option>
      </select>
      <div className="student-list">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </div>
  );
};

export default Home;