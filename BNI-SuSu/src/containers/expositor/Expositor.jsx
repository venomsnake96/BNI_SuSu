import React from "react";
import "./expositor.css";
import { Titlecomp, Logo } from "../../atomic-components";
import logo from "../../assets/bni-logo3.png";
import { stands } from "../../data/data-ecommerce/stands.json";
import { Img1, Img6, Img3, Img4, Img5, Img7 } from "../../assets/img";
import Image from "../../assets/ticket2.png";
import Icons from "../../atomic-components/icon-box/Icons";
import Table2 from '../../atomic-components/table/Table2'
import { Productcard } from "../../atomic-components/productcard/Productcard";
import {Ticketnav} from '../../atomic-components/ticket-nav/Ticketnav'
import { CartProvider } from "../../atomic-components/contex/cart";

const Expositor = () => {
  return (
    <CartProvider>
    <div className="expositor section_padding">
      <Titlecomp texto="Participa como expositor" />

      <div className="honeycomb-container">
        <ul className="honeycomb">
          <li className="honeycomb-cell">
            <img className="honeycomb-cell_img" src={Img5} />
            <div className="honeycomb-cell_conten">
              <h2>Exposición a una Audiencia Selecta</h2>
              <p>
                Esta es tu oportunidad de presentar tus productos y servicios
                ante un público exclusivo compuesto por líderes empresariales,
                tomadores de decisiones y profesionales que buscan proveedores
                confiables y de alta calidad.
              </p>
            </div>
          </li>
          <li className="honeycomb-cell">
            <img className="honeycomb-cell_img" src={Img6} />
            <div className="honeycomb-cell_conten">
              <h2>Generación de Leads de Alta Calidad</h2>
              <p>
                Interactúe directamente con potenciales clientes que asisten
                específicamente para encontrar soluciones y establecer
                relaciones comerciales.
              </p>
            </div>
          </li>
          <li className="honeycomb-cell">
            <img className="honeycomb-cell_img" src={Img4} />
            <div className="honeycomb-cell_conten">
              <h2>Posicionamiento de Marca</h2>
              <p>
                Destaque su marca como un proveedor de referencia en su
                industria, reforzando su reputación y aumentando su visibilidad
                en el mercado.
              </p>
            </div>
          </li>
          <li className="honeycomb-cell">
            <img className="honeycomb-cell_img" src={Img3} />
            <div className="honeycomb-cell_conten">
              <h2>Oportunidades de Alianzas Comerciales</h2>
              <p>
                Conéctese con otros expositores y asistentes para crear alianzas
                estratégicas y expandir su red de contactos.
              </p>
            </div>
          </li>
          <li className="honeycomb-cell">
            <img className="honeycomb-cell_img" src={Img1} />
            <div className="honeycomb-cell_conten">
              <h2>Acceso a Ruedas de Negocio</h2>
              <p>
                Participe en sesiones de matchmaking diseñadas para facilitar
                reuniones uno a uno con empresas interesadas en sus servicios.
              </p>
            </div>
          </li>

          <li className="honeycomb-cell honeycomb_Hidden"></li>
        </ul>
      </div>

      <div className="logo-cont">
        <Logo linkImg={logo} />
      </div>

      <div className="expo-map">
        <Titlecomp texto="Especificaciones" />
        <div className="map-info">
          <div className="map-info-text">
            <div className="info-exp"></div>
            <p>Espacio para expositor con las siguientes características:</p>
            <ul>
              <li>Tamaño: espacio de 3m x 3m</li>
              <li>
                Incluye:
                <ul>
                  <li>2 accesos XV Aniversario</li>
                  <li>Acceso a Ruedas de Negocio.</li>
                  <li>
                    Paquete Expositor: Espacio de 3x3, lugar en el Directorio
                    electrónico, Mesa, electricidad, promoción en el evento, 1
                    lugar de estacionamiento
                  </li>
                </ul>
              </li>
            </ul>
            <div className="info-exp-gp">
              <p>Pabellón, especial para Regiones, Capítulos o Esferas:</p>
              <ul>
                <li>Tamaño: espacio libre de 110m2 </li>
              </ul>
              <p>
                <small>
                  No se incluye Stand, mobiliario extra, ni Entrada a la Sesión
                  de MOSQUETEROS.
                </small>
              </p>
            </div>
          </div>
          <div className="map-img">
            <img src={Img7} alt="" />
          </div>
        </div>
        <Icons />
        <div className="stand-buy">
          <Titlecomp texto="Stands" />
          <Ticketnav />
          <Productcard products={stands} image={Image} />
          <div className="table-2">
            <h3>Tu Stand incluye:</h3>
            <Table2 />
          </div>
        </div>
      </div>
    </div>

    </CartProvider>
  );
};

export default Expositor;
