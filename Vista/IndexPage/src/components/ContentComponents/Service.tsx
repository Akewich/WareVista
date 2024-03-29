import React from "react";
import { Image } from "react-bootstrap";
import service1 from "../../Images/service1.png";
import service2 from "../../Images/service2.png";
import service3 from "../../Images/service3.png";
import "./Service.css";

function Service() {
  return (
    <>
      <section id="service" className="service">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5 mt-5">
                <h3>Service</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="img-service text-center pb-2">
                <div className="design mx-5">
                  <Image
                    src={service1}
                    className="service1"
                    alt="Design"
                    style={{ width: "175px", height: "175px" }}
                    fluid
                    roundedCircle
                  />
                  <h3 className="title my-3">Design</h3>
                  <p>
                    Our service has the ability to design diagrams of warehouse
                    areas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="img-service text-center pb-2">
                <div className="analyst mx-5">
                  <Image
                    src={service2}
                    className="service2"
                    alt="Analyst"
                    style={{ width: "175px", height: "175px" }}
                    fluid
                    roundedCircle
                  />
                  <h3 className="card-title my-3">Analyst</h3>
                  <p>
                    You can view graphs and analyze your data through our
                    services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="img-service text-center pb-2">
                <div className="management mx-5">
                  <Image
                    src={service3}
                    className="service3"
                    alt="Management"
                    style={{ width: "175px", height: "175px" }}
                    fluid
                    roundedCircle
                  />
                  <h3 className="card-title my-3">Management</h3>
                  <p>
                    You can check product information from our website. and can
                    add or remove product information
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
