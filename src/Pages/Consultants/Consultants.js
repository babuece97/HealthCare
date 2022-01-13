import React, { useEffect } from "react";
import { useState } from "react";
import Consultant from "../Consultant/Consultant";
import "./Consultants.css";
const Consultants = () => {
  const [consultants, setConsultants] = useState([]);
  useEffect(() => {
    fetch("./consultants.json")
      .then((response) => response.json())
      .then((data) => setConsultants(data));
  }, []);
  return (
    <div className="developer-container">
      <div className="information-container">
        {consultants.map((consultant) => (
          <Consultant key={consultant.id} consultant={consultant} />
        ))}
      </div>
    </div>
  );
};

export default Consultants;
