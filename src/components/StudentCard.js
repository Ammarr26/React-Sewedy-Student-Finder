import React from "react";

const StudentCard = ({ name, field, image }) => {
  return (
    <div className="student-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p className="field">{field}</p>
      <p className="description">
        Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut 
        praesentium vel tque sed facilis at qui.
      </p>
    </div>
  );
};

export default StudentCard;