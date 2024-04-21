import { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import axios from "axios";
import NavbarHeader from "../HeaderComponets/NavHead";
import { Form, Image } from "react-bootstrap";
import imageLogo from "../../Images/WareHouseLOGO.png";
import imageIcon from "../../Images/googleIcon.png";
import "./LoginPage.css";
import { Button, Checkbox, FormControlLabel } from "@mui/material";

interface Profile {
  email: string;
  name: string;
  // Add other fields as needed
}

function LoginPage() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

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

  const handleChange = (event: any) => {
    event.preventDefault();
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputs.username && inputs.password) {
      setValid(true);
      console.log(inputs);
      axios
        .post("http://localhost:8000/login", inputs)
        .then((res) => {
          console.log(res.data);
          // Handle successful login
          setProfile(res.data.profile); // Set profile data after successful login
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setSubmitted(true);
  };

  return (
    <>
      <NavbarHeader profile={profile} logOut={logOut} />
      <div className="logIn container ">
        <main className="formSignIn">
          <Form onSubmit={handleSubmit}>
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
                    value={inputs.username}
                    placeholder="username"
                    style={{ borderRadius: 15 }}
                    onChange={handleChange}
                  />
                )}
              </div>
              {submitted && !inputs.username && (
                <label htmlFor="floatingInput" />
              )}
              <div className="form-floating ">
                {!valid && (
                  <input
                    type="password"
                    className="form-field"
                    name="password"
                    placeholder="Password"
                    value={inputs.password}
                    style={{ borderRadius: 15 }}
                    onChange={handleChange}
                  />
                )}
                {submitted && !inputs.password && (
                  <label htmlFor="floatingInput" />
                )}
              </div>
            </div>
            <div className="two-col my-3 ">
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
            </div>
          </Form>
        </main>
        <div className="btnSign">
          <Button
            variant="contained"
            style={{ borderRadius: "10px" }}
            sx={{ color: "black" }}
            className="btnSignIn"
            color="warning"
            type="submit"
          >
            Sign in
          </Button>
        </div>
        <div className="register text-center">
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
        </div>
        <div className="or mt-3 text-center">
          <h5>- OR -</h5>
        </div>
        <div className="icon mb-4">
          {profile ? (
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
          )}
        </div>
      </div>
    </>
  );
}

export default LoginPage;
