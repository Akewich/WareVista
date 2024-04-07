import "./App.css";
import "./index.css";
import Build from "./components/ContentComponents/Build";
import Database from "./components/ContentComponents/Database";
import Detail from "./components/ContentComponents/Detail";
import Footer from "./components/ContentComponents/Footer";
import Home from "./components/ContentComponents/Home";
import Service from "./components/ContentComponents/Service";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/HeaderComponets/About.tsx";
import Document from "./components/HeaderComponets/Document.tsx";
import Report from "./components/HeaderComponets/Report.tsx";
import LoginPage from "./components/LoginPage/LoginPage.tsx";
import RegisterPage from "./components/LoginPage/RegisterPage.tsx";
import Folder from "./components/DashboardComponents/Homepage/folder/Folder.tsx";
import Maincontent from "./components/DashboardComponents/Monitorpage/Monitor/Maincontent.tsx";
export default function App() {
  const Homepage = () => {
    return (
      <div className="home">
        <Home />
        <Service />
        <Detail />
        <Database />
        <Build />
        <Footer />
      </div>
    );
  };

  // const Design = () => {
  //   return (
  //     <div className="design">
  //       <div className="menuContainer">
  //         <Sidebar />
  //       </div>
  //       <div className="contentContainer">
  //         <Outlet />
  //       </div>
  //     </div>
  //   );
  // };
  const router = createBrowserRouter([
    // Start Home Page
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/document",
      element: <Document />,
    },
    {
      path: "/report",
      element: <Report />,
    },
    // End Home Page

    // Start Login / Register Page
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    // End Login / Register Page

    // Start Dashboard Page
    {
      path: "/dashboard",
      element: <Folder />,
    },
    // {
    //   path: "/monitor",
    //   element: <Monitor />,
    // },

    {
      path: "/monitor",
      element: <Maincontent />,
    },

    // End Dashboard Page
  ]);
  return <RouterProvider router={router} />;
}
