import "./Footer.css";
const Footer = () => {
  return (
    <div id="footer">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 text-center">
        <div className="col mb-3"></div>

        <div className="col mb-">
          <h3>Explore more</h3>
          <ul className="nav flex-column mt-5">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                What's WareVista
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Why us
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                What we can do?
              </a>
            </li>
          </ul>
        </div>

        <div className="footerList col mb-3">
          <h3>Service</h3>
          <ul className="nav flex-column mt-5">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Dynamic Diagram
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Database
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Data Aanalysis
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h3>Contact</h3>
          <ul className="nav flex-column mt-5">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                08x-xxx-xxxx
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                WareVista@gmail.com
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Facebook Page
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
