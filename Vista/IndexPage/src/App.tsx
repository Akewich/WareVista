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
import Favorite from "./components/DashboardComponents/Favoritepage/Favorite/Favorite.tsx";
import Setting from "./components/DashboardComponents/Settingpage/Setting/Setting.tsx";
import Help from "./components/DashboardComponents/Helppage/Help/Help.tsx";
import Account from "./components/DashboardComponents/Settingpage/Setting/Sidebarsetting/Accountsetting/Account.tsx";
import Notification from "./components/DashboardComponents/Settingpage/Setting/Sidebarsetting/Notification/Notification.tsx";
import Theme from "./components/DashboardComponents/Settingpage/Setting/Sidebarsetting/Themes/Theme.tsx";
import Changepass from "./components/DashboardComponents/Settingpage/Setting/Sidebarsetting/Accountsetting/Changepassword/Changepass.tsx";
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
    {
      path: "/favorite",
      element: <Favorite />,
    },
    {
      path: "/monitor",
      element: <Maincontent />,
    },
    {
      path: "/setting",
      element: <Setting />,
    },
    {
      path: "/help",
      element: <Help />,
    },

    // Setting Page
    {
      path: "/account",
      element: <Account />,
    },
    {
      path: "/changepass",
      element: <Changepass />,
    },
    {
      path: "/noti",
      element: <Notification />,
    },
    {
      path: "/theme",
      element: <Theme />,
    },
    // End Setting Page

    // End Dashboard Page
  ]);
  return <RouterProvider router={router} />;
}
