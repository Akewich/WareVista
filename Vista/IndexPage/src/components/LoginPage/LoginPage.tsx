import React from "react";
import { Form, Image } from "react-bootstrap";
import imageLogo from "../../Images/WareHouseLOGO.png";
import { Button } from "@mui/material";
import "./LoginPage.css";
import { Link } from "react-router-dom";
function LoginPage() {
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

            <div className="form-floating my-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating my-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-check text-start my-3 text">
              <input
                className="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>

              <div className="formForgot ms-5 d-inline">
                <a href="">Forgot Password?</a>
              </div>
            </div>
            <Link
              to={"/design"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button
                variant="contained"
                className="btn w-100 py-2"
                type="submit"
              >
                Sign in
              </Button>
            </Link>
            <p className="mt-3 mb-3 text-body-secondary">
              <Link to={"/register"}>Creat new accout</Link>
            </p>
          </Form>
        </main>
      </div>
    </>
  );
}

export default LoginPage;
