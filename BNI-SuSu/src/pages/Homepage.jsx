import React from "react";
import { Header, Footer, Section } from "../containers";
import { Navbar } from "../atomic-components";

const HomePage= () => {
  return (
    <>
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Section />
      <Footer /> 
    </>
  );
}

export default HomePage