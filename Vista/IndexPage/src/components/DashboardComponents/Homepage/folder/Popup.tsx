import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./Popup.css";
import { Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
const Popup = ({ setCreateProject }: any) => {
  const [inputs, setInputs] = useState({
    length: "",
    width: "",
    height: "",
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
    if (inputs.length && inputs.width && inputs.height) {
      setValid(true);
      console.log(inputs);
      axios
        .post("http://localhost:8000/dashboad", inputs)
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
    <div
      className="popUpBox"
      onClick={setCreateProject.bind(this, false)}
      style={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {/* Content */}
      <div
        className="popUpContent"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "dropTop .3s linear" }}
      >
        {/* Header */}
        <div className="popUpHearder">
          <h4>Create new Project</h4>
          <IconButton
            onClick={setCreateProject.bind(this, false)}
            className="closeIcon"
            style={{ position: "absolute", top: 10, right: 10 }}
          >
            <HighlightOffIcon />
          </IconButton>
        </div>
        {/* Body */}
        <div className="popUpBody ">
          <Form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="form-floating my-2">
              {!valid && (
                <input
                  type="text"
                  className="formInput"
                  name="length"
                  placeholder="length"
                  value={inputs.length || ""}
                  onChange={handleChange}
                />
              )}
              {submitted && !inputs.length && (
                <label htmlFor="floatingInput"></label>
              )}
            </div>

            <div className="form-floating my-2">
              {!valid && (
                <input
                  type="email"
                  className="formInput"
                  placeholder="width"
                  name="width"
                  value={inputs.width}
                  onChange={handleChange}
                />
              )}
              {submitted && !inputs.width && <label htmlFor="floatingInput" />}
            </div>
            <div className="form-floating my-2">
              {!valid && (
                <input
                  type="email"
                  className="formInput"
                  placeholder="height"
                  name="height"
                  value={inputs.height}
                  onChange={handleChange}
                />
              )}
              {submitted && !inputs.height && <label htmlFor="floatingInput" />}
            </div>
            {!valid && (
              <div className="mt-5">
                <Link to={"/design"}>
                  <Button variant="contained" color="warning">
                    Create
                  </Button>
                </Link>
              </div>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
