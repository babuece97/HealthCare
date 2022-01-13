import React from "react";
import { Carousel, NavLink } from "react-bootstrap";

const Header = () => {
  return (
    <Carousel className="pt-2">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21202.jpg"
          alt="First slide"
          height="400px"
          weight="100%"
        />
        <Carousel.Caption>
          <h2 className="text-danger">
            Best in the country for corporate health checkup
          </h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.freepik.com/free-photo/surgeons-interacting-with-each-other-operation-room_1170-2283.jpg"
          alt="Second slide"
          height="400px"
          weight="100%"
        />

        <Carousel.Caption>
          <h2 className="text-danger">Make telephone appointment</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.freepik.com/free-photo/empty-stomatology-orthodontist-bright-office-room-with-nobody-it_482257-15349.jpg"
          alt="Third slide"
          height="400px"
          weight="100%"
        />

        <Carousel.Caption>
          <h2 className="text-danger">24 hour emergency service</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Header;
