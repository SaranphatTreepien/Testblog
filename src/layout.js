import React from "react";
import Header from "./Dashbord/Header.js";
import Footer from "./Dashbord/Footer.js";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header title="Blog" sections={[{ title: "Interested", url: "/" }]} />
      <main>
        <Outlet /> {/* Render the child routes */}
      </main>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </>
  );
};

export default Layout;
