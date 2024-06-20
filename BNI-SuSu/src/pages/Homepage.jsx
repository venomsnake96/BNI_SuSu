import React from "react";
import { Header, Footer, } from "../containers";
import { Navbar } from "../atomic-components";

const HomePage= () => {
  return (
    <>
    <div className="gradeint__bg">
      <Navbar />
      <Header />
      <Footer/> 
    </div>
    </>
  );
}

export default HomePage