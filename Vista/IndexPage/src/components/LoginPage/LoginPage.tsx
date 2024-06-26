import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import axios from "axios";
import NavbarHeader from "../HeaderComponets/NavHead";
import { Form, Image } from "react-bootstrap";
import imageLogo from "../../Images/WareHouseLOGO.png";
import "./LoginPage.css";
import { Button, Checkbox, FormControlLabel } from "@mui/material";

interface Profile {
  email: string;
  username: string;
  // Add other fields as needed
}

function LoginPage() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const navigateTo = useNavigate();

  const clientID =
    "681347785465-erbnts6vhfrlp09o8rvl7svk7l6cv218.apps.googleusercontent.com";

  const [profile, setProfile] = useState<Profile | null>(null);

  const onSuccess = (res: any) => {
    setProfile(res.profileObj);
    console.log("success", res);
  };

  const onFailure = (res: any) => {
    console.log("failed", res);
  };

  const logOut = () => {
    setProfile(null);
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleChange = (event: any) => {
    /* event.persist(); NO LONGER USED IN v.17*/
    event.preventDefault();

    // const { name, value } = event.target;
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const loginUser = (e: any) => {
    e.preventDefault();
    if (inputs.username && inputs.password) {
      setValid(false);
      console.log(inputs);
      axios
        .post("https://server-s6xn.onrender.com/login", inputs)
        .then((res) => {
          console.log(res.data);
          setSubmitted(true);
          navigateTo("/dashboard");
        })
        .catch((err) => {
          console.log(err);
          // Reset the submitted state to false
          setSubmitted(false);
          // Show error message to the user
          alert("Login failed. Please check your username and password.");
        });
    }
    // Set submitted to true outside the if condition
    setSubmitted(true);
  };

  return (
    <>
      <NavbarHeader />
      <div className="logIn container ">
        <main className="formSignIn">
          <Form onSubmit={loginUser}>
            <div className="formLogo">
              <Image
                className="mb-4"
                src={imageLogo}
                alt="WareHouse"
                width="200"
                height="200"
              />
            </div>
            <div className="inputForm">
              <div className="form-floating ">
                {!valid && (
                  <input
                    type="text"
                    className="form-field "
                    name="username"
                    placeholder="username"
                    style={{ borderRadius: 15 }}
                    onChange={handleChange}
                  />
                )}
                {submitted && !inputs.username && (
                  <label htmlFor="floatingInput"></label>
                )}
              </div>

              <div className="form-floating ">
                {!valid && (
                  <input
                    type="password"
                    className="form-field"
                    name="password"
                    placeholder="Password"
                    style={{ borderRadius: 15 }}
                    onChange={handleChange}
                  />
                )}
                {submitted && !inputs.password && (
                  <label htmlFor="floatingInput" />
                )}
              </div>
            </div>
            <div className="two-col my-3">
              {!valid && (
                <div className="checkOne">
                  <FormControlLabel
                    className="formCheck"
                    control={<Checkbox />}
                    label="Remember me"
                  />
                  <Link
                    className="formForgot ps-3"
                    style={{ textDecorationLine: "none" }}
                    to={"/register"}
                  >
                    Forgot Password?
                  </Link>{" "}
                </div>
              )}
            </div>
          </Form>
        </main>
        <div className="btnSign">
          {!valid && (
            <Button
              id="submit"
              color="warning"
              sx={{ color: "black" }}
              variant="contained"
              className="btnRegis mt-5"
              type="submit"
              onClick={loginUser}
            >
              Sign in{" "}
            </Button>
          )}
        </div>
        <div className="register text-center">
          {!valid && (
            <p>
              Don't have an account ?{" "}
              <Link
                className="ps-3"
                style={{ textDecorationLine: "none" }}
                to={"/register"}
              >
                Click me
              </Link>{" "}
            </p>
          )}
        </div>
        {!valid && (
          <div className="or mt-3 text-center">
            <h5>- OR -</h5>
          </div>
        )}
        <div className="icon mb-4">
          {!valid && // Render Google login button only if the form is not submitted
            (profile ? (
              <GoogleLogout
                clientId={clientID}
                buttonText="Logout"
                onLogoutSuccess={logOut}
              />
            ) : (
              <GoogleLogin
                clientId={clientID}
                buttonText="Sign in with Google "
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default LoginPage;
