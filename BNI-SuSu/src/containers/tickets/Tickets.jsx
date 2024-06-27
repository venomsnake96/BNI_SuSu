import React from "react";
import { products } from "../../data/data-ecommerce/products.json";
import { Productcard } from "../../atomic-components/productcard/Productcard";
import BasicTable from "../../atomic-components/table/Table";
import Titlecomp from "../../atomic-components/titlecomp/Titlecomp";
import Image from "../../assets/ticket2.png";
import "./tickets.css";


function Tickets() {
  return (
    
      <div className="tickets section_padding">
        <Titlecomp texto="Accesos" />
        <div className="tickets-conten">
          <Productcard products={products} image={Image} />
          <div className="table">
            <h3>
              Al adquirir tu boleto obtines acceso a las dinamicas del evento:
            </h3>
            <BasicTable className="basic-table" />
            <small>Limitado a 100 disponibles</small>
          </div>
        </div>
      </div>
    
  );
}

export default Tickets;
