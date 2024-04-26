import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/HeaderComponets/About.tsx";
import Document from "./components/HeaderComponets/Document.tsx";
import Report from "./components/HeaderComponets/Report.tsx";
import LoginPage from "./components/LoginPage/LoginPage.tsx";
import RegisterPage from "./components/LoginPage/RegisterPage.tsx";
import Maincontent from "./components/DashboardComponents/Monitorpage/Monitor/Maincontent.tsx";
import Favorite from "./components/DashboardComponents/Favoritepage/Favorite/Favorite.tsx";
import Setting from "./components/DashboardComponents/Settingpage/Setting/Setting.tsx";
import Help from "./components/DashboardComponents/Helppage/Help/Help.tsx";
import Account from "./components/DashboardComponents/Settingpage/Setting/Sidebarsetting/Accountsetting/Account.tsx";
import Notification from "./components/DashboardComponents/Settingpage/Setting/Sidebarsetting/Notification/Notification.tsx";
import Theme from "./components/DashboardComponents/Settingpage/Setting/Sidebarsetting/Themes/Theme.tsx";
import Changepass from "./components/DashboardComponents/Settingpage/Setting/Sidebarsetting/Accountsetting/Changepassword/Changepass.tsx";
import Project from "./components/DashboardComponents/Homepage/folder/Project.tsx";
import Indexhomepage from "./components/ContentComponents/Indexhomepage.tsx";
import Warehouse from "./components/Design/CreatProject/Warehouse.tsx";
import { ThemeContextProvider } from "./components/DashboardComponents/Settingpage/Setting/Sidebarsetting/Themes/indexTheme.tsx";

function App() {
  return (
    <ThemeContextProvider>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Indexhomepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/document" element={<Document />} />
        <Route path="/report" element={<Report />} />
        {/* Login & Register */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Dashboard Page */}
        <Route path="/dashboard" element={<Project />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/monitor" element={<Maincontent />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/help" element={<Help />} />
        {/* Account */}
        <Route path="/account" element={<Account />} />
        <Route path="/changepass" element={<Changepass />} />
        <Route path="/noti" element={<Notification />} />
        <Route path="/theme" element={<Theme />} />
        {/* Design warehouse */}
        <Route path="/design" element={<Warehouse />} />
      </Routes>
    </ThemeContextProvider>
  );
  // const router = createBrowserRouter([
  //   // Start Home Page
  //   {
  //     path: "/",
  //     element: <Indexhomepage />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  //   {
  //     path: "/document",
  //     element: <Document />,
  //   },
  //   {
  //     path: "/report",
  //     element: <Report />,
  //   },
  //   // End Home Page

  //   // Start Login / Register Page

  //   {
  //     path: "/login",
  //     element: <LoginPage />,
  //   },
  //   {
  //     path: "/register",
  //     element: <RegisterPage />,
  //   },
  //   // End Login / Register Page

  //   // Start Dashboard Page
  //   {
  //     path: "/dashboard",
  //     element: <Project />,
  //   },
  //   {
  //     path: "/favorite",
  //     element: <Favorite />,
  //   },
  //   {
  //     path: "/monitor",
  //     element: <Maincontent />,
  //   },
  //   {
  //     path: "/setting",
  //     element: <Setting />,
  //   },
  //   {
  //     path: "/help",
  //     element: <Help />,
  //   },

  //   // Setting Page
  //   {
  //     path: "/account",
  //     element: <Account />,
  //   },
  //   {
  //     path: "/changepass",
  //     element: <Changepass />,
  //   },
  //   {
  //     path: "/noti",
  //     element: <Notification />,
  //   },
  //   {
  //     path: "/theme",
  //     element: <Theme />,
  //   },
  // End Setting Page

  // End Dashboard Page
  // ]);
  // return <RouterProvider router={router} />;
}
export default App;
