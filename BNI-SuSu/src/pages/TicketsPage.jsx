import React from "react";
import { Header, Footer,  Tickets } from "../containers";
import { Navbar } from "../atomic-components";

const TicketsPage = () => {
  return (
    <>
    <div className="gradient__bg">
      <Navbar />
      <Header/>
    </div>
    <div className="gradient__bg">
      <Tickets />
      <Footer />
    </div>
    
    </>
  );
};

export default TicketsPage;
