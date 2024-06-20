import React from "react";
import { Header, Footer,  Section } from "../containers";
import { Navbar } from "../atomic-components";

const AppPage = () => {
  return (
    <>
    <div className="gradeint__bg">
      <Navbar />
      <Header />
    </div>
      <Section />
      <Footer />
    </>
  );
};

export default AppPage
