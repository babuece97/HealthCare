import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { id, name, phone, img, Price } = props.service;
  return (
    <div>
      <div className="display-card">
        <img src={img} alt="" height="200" width="100%" />
        <p>{name}</p>
        <p>{phone}</p>
        <p>{Price}</p>
        <Link to={`/serviceInfo/${id}`}>
          <button className="btn-regular">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
