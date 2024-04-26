import { Button } from "react-bootstrap";
import "./Build.css";

const Build = () => {
  return (
    <>
      <section id="build" className="design">
        <div className="container">
          <div className="col-lg-12 ps-lg-5 text-center justify-content-center d-flex">
            <div className="buildText">
              <h2>Design Your Warehouse</h2>
              <p>Let's build a warehouse in the way that everyone wants.</p>
              <Button className="fs-3" variant="outline-light">
                Go to page
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Build;
