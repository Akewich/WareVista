import { useState } from "react";
import { Form, Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import imageLogo from "../../Images/WareHouseLOGO.png";
import { Link } from "react-router-dom";
import axios from "axios";
import "./RegisterPage.css";

export default function RegisterPage() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event: any) => {
    /* event.persist(); NO LONGER USED IN v.17*/
    event.preventDefault();

    // const { name, value } = event.target;
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputs.username && inputs.email && inputs.password) {
      setValid(true);
      console.log(inputs);
      axios
        .post("http://localhost:8000/register", inputs)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setSubmitted(true);
  };

  return (
    <>
      <div className="logIn container">
        {/* Email */}
        <main className="formSignIn w-100 m-auto">
          <Form onSubmit={handleSubmit}>
            <div className="formLogo text-center">
              <Image
                className="mb-4"
                src={imageLogo}
                alt="WareHouse"
                width="200"
                height="200"
              />
              {!valid && <h1 className="h3 mb-3 fw-normal">Please sign in</h1>}
            </div>
            {/* Username */}
            <div className="form-floating my-2">
              {!valid && (
                <input
                  type="text"
                  className="formField"
                  name="username"
                  placeholder="Enter your username"
                  value={inputs.username || ""}
                  onChange={handleChange}
                />
              )}
              {submitted && !inputs.username && (
                <label htmlFor="floatingInput"></label>
              )}
            </div>

            <div className="form-floating my-2">
              {!valid && (
                <input
                  type="email"
                  className="formField"
                  placeholder="name@example.com"
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                />
              )}
              {submitted && !inputs.email && (
                <label htmlFor="floatingInput"></label>
              )}
            </div>

            <div className="form-floating my-2">
              {!valid && (
                <input
                  type="password"
                  className="formField"
                  placeholder="Password"
                  name="password"
                  value={inputs.password}
                  onChange={handleChange}
                />
              )}
              {submitted && !inputs.password && (
                <label htmlFor="floatingInput"></label>
              )}
            </div>
            {!valid && (
              // <Link
              //   to={"/login"}
              //   style={{ textDecoration: "none", color: "black" }}
              // >
              <Button
                id="submit"
                variant="contained"
                className="btnRegis d-flex mt-5"
                type="submit"
              >
                Register{" "}
              </Button>
              // </Link>
            )}
            {!valid && (
              <p className="mt-2 mb-3 text-body-secondary">
                <Link style={{ textDecorationLine: "none" }} to={"/login"}>
                  Already have an acoount?
                </Link>
              </p>
            )}
            {submitted && valid && (
              <div className="successMessage">
                <h3>
                  {""} Welcome {inputs.username}{" "}
                </h3>
                <div> Your Account is successful! </div>
              </div>
            )}
            {submitted && valid && (
              <div className="goLogin mt-5">
                <Link to={"/Login"}>
                  <Button variant="contained">Login</Button>
                </Link>
              </div>
            )}
          </Form>
        </main>
      </div>
    </>
  );
}
