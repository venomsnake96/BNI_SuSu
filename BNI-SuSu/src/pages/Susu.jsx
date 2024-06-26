import React from "react";
import { Header, Footer,  Section } from "../containers";
import { Navbar } from "../atomic-components";

const AppPage = () => {
  return (
    <>
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <div className="">
      
      <Footer />
    </div>
    </>
  );
};

export default AppPage
