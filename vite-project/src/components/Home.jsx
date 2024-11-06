import Button from "./button";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  function handleType(value) {
    console.log(value);
    navigate(`/${value}`);
  }
  return (
    <>
      <h2>Select type</h2>
      <ul id="Button-List">
        <li>
          <Button onselect={() => handleType("AdminLogin")}>Admin</Button>
        </li>
        <li>
          <Button onselect={() => handleType("ClientLogin")}>Client</Button>
        </li>
        <li>
          <Button onselect={() => handleType("UserLogin")}>User</Button>
        </li>
      </ul>
    </>
  );
}
