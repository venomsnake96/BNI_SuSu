import React from "react";
import { Header, Footer,  Conferencias } from "../containers";
import { Navbar } from "../atomic-components";

const AppPage = () => {
  return (
    <>
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <div className="gradient__bg">
      <Conferencias />
      <Footer />
    </div>
    </>
  );
};

export default AppPage
