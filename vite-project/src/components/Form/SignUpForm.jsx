import { useState } from "react";
import Button from "../button";

export default function SignUpForm({ form }) {
  if (form == "Client") {
    var objvalue = {
      name: "",
      email: "",
      phoneno: "",
      password: "",
      cpassword: "",
    };
    var objdata = {
      name: false,
      email: false,
      phoneno: false,
      password: false,
      cpassword: false,
    };
  } else {
    var objvalue = {
      name: "",
      email: "",
      phoneno: "",
      industry: "",
      password: "",
      cpassword: "",
    };
    var objdata = {
      name: false,
      email: false,
      phoneno: false,
      industry: false,
      password: false,
      cpassword: false,
    };
  }
  const [enteredValues, setEnteredValues] = useState(objvalue);
  const [checkEdit, setCheckEdit] = useState(objdata);

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

  return (
    <>
      <form action="" onSubmit={handleSUbmited}>
        <h2>{form} SignUp</h2>
        <div id="div-form-Col">
          <label htmlFor="">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            onBlur={() => handleBLur("name")}
            value={enteredValues.name}
            placeholder=" Enter your name"
            onChange={(event) => handleChange("name", event.target.value)}
          />
        </div>
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
          <label htmlFor="">Phone Number</label>
          <input
            id="phoneno"
            type="number"
            name="phoneno"
            pattern="[0-9]{5}-[0-9]{5}"
            max={10}
            onBlur={() => handleBLur("phoneno")}
            value={enteredValues.phoneno}
            placeholder=" Enter your phone number"
            onChange={(event) => handleChange("phoneno", event.target.value)}
          />
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
          <Button onselect={() => Login("SignUp")}>SignUp</Button>
        </div>
      </form>
    </>
  );
}
