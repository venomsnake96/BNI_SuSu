import React from "react";
import { Header, Footer, Registro } from "../containers";
import { Navbar } from "../atomic-components";

const Registropage = () => {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Registro />
      <Footer />
    </>
  );
};

export default Registropage;
