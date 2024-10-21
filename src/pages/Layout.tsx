import { Outlet } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="content">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
