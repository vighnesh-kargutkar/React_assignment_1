import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import ClientLogin from "./components/client/ClientLogin";
import AdminLogin from "./components/Admin/AdminLogin";
import UserLogin from "./components/User/UserLogin";
import ClientSignUp from "./components/client/ClientSignUp";
import UserSignUp from "./components/User/UserSignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/AdminLogin",
    element: <AdminLogin />,
  },
  {
    path: "/ClientLogin",
    element: <ClientLogin />,
  },
  {
    path: "/ClientSignUp",
    element: <ClientSignUp />,
  },
  {
    path: "/UserLogin",
    element: <UserLogin />,
  },
  {
    path: "/UserSignUp",
    element: <UserSignUp />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
