import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Alert from "./components/Alert";
export default function Layout() {
  // redirect by language
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  useEffect(() => {
    // get browser language
    let lang = navigator.language;
    if (location.pathname === "/") {
      if (["zh-TW", "zh-CN"].includes(lang)) {
        navigate("/zh-TW");
      } else {
        navigate("/en-US");
      }
    } else {
      let currentLang = location.pathname.split("/")[1];
      i18n.changeLanguage(currentLang);
      if (currentLang === "en-US") {
        document.documentElement.lang = "en";
      }
    }
  }, [location]);
  return (
    <div className="flex flex-col min-h-[100svh]">
      <Alert />
      <Nav />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
