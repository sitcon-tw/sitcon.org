import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
export default function Layout() {
  return (
    <>
      <Nav />
      <div className="prose">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
