import React from "react";
import { useParams } from "react-router-dom";

const ConsultantInfo = () => {
  const { consultentId } = useParams();
  return (
    <div>
      <h3>This is consultant info {consultentId}</h3>
    </div>
  );
};

export default ConsultantInfo;
