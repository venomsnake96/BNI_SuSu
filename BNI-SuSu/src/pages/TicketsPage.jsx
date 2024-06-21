import React from "react";
import { Header, Footer,  Tickets } from "../containers";
import { Navbar } from "../atomic-components";

const TicketsPage = () => {
  return (
    <>
    <div className="gradeint__bg">
      <Navbar />
      <Header/>
    </div>
      <Tickets />
      <Footer />
    
    </>
  );
};

export default TicketsPage;
