import React from "react";
import { Header, Footer, Registro } from "../containers";
import { Navbar } from "../atomic-components";

const Registropage = () => {
  return (
    <>
      <div className="gradeint__bg">
        <Navbar />
        <Header />
      </div>
      <Registro />
      <Footer />
    </>
  );
};

export default Registropage;
