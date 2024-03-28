import React from "react";
import { Form, Image } from "react-bootstrap";
import { Button } from "@mui/material";
import imageLogo from "../../Images/WareHouseLOGO.png";
import { Link } from "react-router-dom";
import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <>
      <div className="logIn container w-100 m-auto">
        {/* Email */}
        <main className="formSignIn w-100 m-auto">
          <Form>
            <div className="formLogo">
              <Image
                className="mb-4"
                src={imageLogo}
                alt="WareHouse"
                width="200"
                height="200"
              />
              <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            </div>

            <div className="form-floating my-2">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter your username"
              />
              <label htmlFor="floatingInput">Username</label>
            </div>

            <div className="form-floating my-2">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating my-2">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-floating my-2">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Confirm Password</label>
            </div>

            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button
                id="submit"
                variant="contained"
                className="btn w-100 py-2"
                type="submit"
              >
                Register{" "}
              </Button>
            </Link>
            <p className="mt-2 mb-3 text-body-secondary">
              <Link to={"/login"}>Already have an acoount?</Link>
            </p>
          </Form>
        </main>
      </div>
    </>
  );
};

export default RegisterPage;
