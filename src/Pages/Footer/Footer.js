import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white page-footer font-small blue pt-4  ">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Address</h5>
            <p>
              Plot 15, Road 71, Gulshan <br /> Dhaka 1212
              <br /> +88 33 18 79 00
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Contact Us</h5>
            <p>
              24 Hours <br />
              Emergency +880 1914 001234
            </p>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Find Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://uhlbd.com/#">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.facebook.com/uhlbd/">Facebook</a>
              </li>
              <li>
                <a href="https://uhlbd.com/">Twitter</a>
              </li>
              <li>
                <a href="https://uhlbd.com/">Instrgram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center pb-1">
        2021 Copyright © united.com
      </div>
    </footer>
  );
};

export default Footer;
