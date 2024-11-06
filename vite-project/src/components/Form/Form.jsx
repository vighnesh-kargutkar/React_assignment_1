import { useState } from "react";
import Button from "../button";

import "./Form.css";
import { useNavigate } from "react-router-dom";

export default function Form({ form }) {
  const navigate = useNavigate();
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  const [checkEdit, setCheckEdit] = useState({
    email: false,
    password: false,
  });

  function handleBLur(name) {
    setCheckEdit((prev) => ({
      ...prev,
      [name]: true,
    }));
  }
  function handleChange(name, value) {
    setEnteredValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    setCheckEdit((prev) => ({
      ...prev,
      [name]: false,
    }));
  }
  const invalidEMail = checkEdit.email && !enteredValues.email.includes("@");
  const invalidPassword = checkEdit.password && enteredValues.password == "";

  function handleSUbmited(event) {
    event.preventDefault();
  }

  function Login() {}
  function SignUp(value) {
    if (form == "ClientLogin") {
      navigate(`/ClientSignUp`);
    } else {
      navigate(`/UserSignUp`);
    }
  }

  return (
    <>
      <form action="" onSubmit={handleSUbmited}>
        <h2>{form} Login</h2>
        <div id="div-form-Col">
          <label htmlFor="">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleBLur("email")}
            value={enteredValues.email}
            placeholder=" Enter your email"
            onChange={(event) => handleChange("email", event.target.value)}
          />
          {invalidEMail && <p className="error">Invalid email</p>}
        </div>
        <div id="div-form-Col">
          <label htmlFor="">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={() => handleBLur("password")}
            value={enteredValues.password}
            placeholder=" Enter your password"
            onChange={(event) => handleChange("password", event.target.value)}
          />
          {invalidPassword && <p className="error">Enter password</p>}
        </div>
        <div id="div-form-row">
          <Button onselect={() => Login("Login")}>Login</Button>
          {form != "Admin" && (
            <Button onselect={() => SignUp("SignUp")}>SignUp</Button>
          )}
        </div>
      </form>
    </>
  );
}
