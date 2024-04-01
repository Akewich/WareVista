import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/HeaderComponets/About.tsx";
import Design from "./components/HeaderComponets/Design.tsx";
import Document from "./components/HeaderComponets/Document.tsx";
import Report from "./components/HeaderComponets/Report.tsx";
import LoginPage from "./components/LoginPage/LoginPage.tsx";
import RegisterPage from "./components/LoginPage/RegisterPage.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/design",
    element: <Design />,
  },
  {
    path: "/document",
    element: <Document />,
  },
  {
    path: "/report",
    element: <Report />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
