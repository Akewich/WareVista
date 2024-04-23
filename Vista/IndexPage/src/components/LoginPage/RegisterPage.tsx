import { useState } from "react";
import { Form, Image } from "react-bootstrap";
import { Button } from "@mui/material";
import imageLogo from "../../Images/WareHouseLOGO.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./RegisterPage.css";
import NavbarHeader from "../HeaderComponets/NavHead";

export default function RegisterPage() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigateTo = useNavigate();

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
        .post("https://server-s6xn.onrender.com/register", inputs)
        .then((res) => {
          console.log(res.data);
          setSubmitted(true);
          // Navigate to login page
          navigateTo("/login");
        })
        .catch((err) => {
          console.log(err);
          navigateTo("/register");
        });
    }
    setSubmitted(true);
  };

  return (
    <>
      <NavbarHeader />
      <div className="register container">
        {/* Email */}
        <main className="formSignIn">
          <Form onSubmit={handleSubmit}>
            <div className="formLogo text-center">
              <Image src={imageLogo} alt="WareHouse" width="200" height="200" />
            </div>
            {/* Username */}
            <div className="form-floating my-2">
              {!valid && (
                <input
                  type="text"
                  className="formField"
                  name="username"
                  placeholder="Username"
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
              {submitted && !inputs.email && <label htmlFor="floatingInput" />}
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
              <Button
                id="submit"
                color="warning"
                sx={{ color: "black" }}
                variant="contained"
                className="btnRegis mt-5"
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
          </Form>
        </main>
      </div>
    </>
  );
}
