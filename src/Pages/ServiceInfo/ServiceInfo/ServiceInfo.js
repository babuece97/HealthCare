import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import service from "../../Service/Service";

const ServiceInfo = () => {
  const [services, setServices] = useState([]);
  const { serviceId } = useParams();
  useEffect(() => {
    fetch("./services.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2>This is service info {serviceId}</h2>
      {services.find((service) => service === serviceId)}
    </div>
  );
};

export default ServiceInfo;
