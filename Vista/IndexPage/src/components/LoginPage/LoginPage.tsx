import { Form, Image } from "react-bootstrap";
import imageLogo from "../../Images/WareHouseLOGO.png";
import { Button } from "@mui/material";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import imageIcon from "../../Images/googleIcon.png";
import NavbarHeader from "../HeaderComponets/NavHead";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
function LoginPage() {
  return (
    <>
      <NavbarHeader />
      <div className="logIn container ">
        {/* Email */}
        <main className="formSignIn">
          <Form>
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
                <input
                  type="email"
                  className="form-field "
                  id="floatingInput"
                  placeholder="name@example.com"
                  style={{ borderRadius: 15 }}
                />
              </div>

              <div className="form-floating ">
                <input
                  type="password"
                  className="form-field"
                  id="floatingPassword"
                  placeholder="Password"
                  style={{ borderRadius: 15 }}
                />
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
          <Link
            to={"/dashboard"}
            style={{ textDecoration: "none", color: "black" }}
          >
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
          </Link>
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
          <Button
            variant="text"
            sx={{ color: "black", background: "#f6f6f6" }}
            className="iconSignIn"
            style={{ borderRadius: "10px" }}
            type="submit"
          >
            <Image src={imageIcon} className="signGoogle pe-3" />
            Sign in with Google
          </Button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
