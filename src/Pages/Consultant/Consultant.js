import React from "react";
import { Link } from "react-router-dom";
import "./Consultant.css";

const Consultant = (props) => {
  console.log(props);
  const { id, name, position, img, degree } = props.consultant;
  return (
    <div>
      <div className="display-card">
        <img src={img} alt="" height="200" width="100%" />
        <p>Name: {name}</p>
        <p>{position}</p>
        <p>{degree}</p>
        <Link to={`/consultentInfo/${id}`}>
          <button className="btn-regular">More</button>
        </Link>
      </div>
    </div>
  );
};

export default Consultant;
