import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Alert from "./components/Alert";
export default function Layout() {
  // redirect by language
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // get browser language
    let lang = navigator.language;
    if (location.pathname === "/") {
      if (["zh-TW", "zh-CN"].includes(lang)) {
        navigate("/zh-TW");
      } else {
        document.documentElement.lang = "en";
        navigate("/en-US");
      }
    }
  }, [location]);
  return (
    <>
      <Alert />
      <Nav />
      <div className="container">
        <div className="prose">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
