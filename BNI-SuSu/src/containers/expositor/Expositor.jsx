import React from "react";
import "./expositor.css";
import { Titlecomp, Logo } from "../../atomic-components";
import logo from "../../assets/bni-logo3.png";
import { Img1, Img6, Img3, Img4, Img5, Img7, Img8 } from "../../assets/img";
import Icons from "../../atomic-components/icon-box/Icons";
import GroupsIcon from '@mui/icons-material/Groups';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CakeIcon from '@mui/icons-material/Cake';

const Expositor = () => {
  return (
    
      <div className="expositor section_padding">
        <Titlecomp texto="Participa como expositor" />

        <div className="honeycomb-container">
          <ul className="honeycomb">
            <li className="honeycomb-cell">
              <img className="honeycomb-cell_img" src={Img5} />
              <div className="honeycomb-cell_conten">
              <h2>Exposición a una Audiencia Selecta</h2>
                <p>
                  Esta es tu oportunid ad de presentar tus productos y servicios
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
                  industria, reforzando su reputación y aumentando su
                  visibilidad en el mercado.
                </p>
              </div>
            </li>
            <li className="honeycomb-cell">
              <img className="honeycomb-cell_img" src={Img3} />
              <div className="honeycomb-cell_conten">
              <h2>Oportunidades de Alianzas Comerciales</h2>
                <p>
                  Conéctese con otros expositores y asistentes para crear
                  alianzas estratégicas y expandir su red de contactos.
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
        <div className="expo-susu">
          <Titlecomp texto="¿Por qué asistir?" />
          <div className="expo-susu-conten">
            
            <div className="expo-susu-box">
                <GroupsIcon color='error' sx={{fontSize:[150]}} />
              <div className="ex-su-text">
                <h2>1. Oportunidades de Networking de Alta Calidad</h2>
                <p>
                  El BNI Summer Supplier Summit reúne a líderes empresariales,
                  emprendedores y tomadores de decisiones de diversas
                  industrias. Asistir a este evento te permitirá ampliar tu red
                  de contactos, establecer conexiones valiosas y crear
                  relaciones estratégicas que pueden impulsar tu negocio al
                  siguiente nivel. Las sesiones de Networking están diseñadas
                  para facilitar interacciones y conexiones significativas y
                  duraderas.
                </p>
              </div>
            </div>
            <div className="expo-susu-box">
              <HandshakeIcon color='error' sx={{fontSize:[150]}} />
              <div className="ex-su-text">
                <h2>2. Descubre proovedores Avalados, miembros de BNI</h2>
                <p>
                  La Expo especializada en Proveeduría BNI te brinda la
                  oportunidad de conocer a proveedores verificados y de alta
                  calidad, todos ellos miembros de BNI. Esta es tu oportunidad
                  para explorar soluciones innovadoras y eficientes para tu
                  empresa, asegurándote de trabajar con socios confiables y
                  comprometidos con la excelencia.
                </p>
              </div>
            </div>
            <div className="expo-susu-box">
              <LocalLibraryIcon color='error' sx={{fontSize:[150]}} />
              <div className="ex-su-text">
                <h2>3. Accede a Conicimientos y Estrategias de Expertos </h2>
                <p>
                  Participa en conferencias y talleres impartidos por expertos
                  de la industria que compartirán sus conocimientos y
                  estrategias para el éxito empresarial. Estos eventos
                  educativos están diseñados para proporcionarte las
                  herramientas y la inspiración necesarias para enfrentar los
                  desafíos del mercado y aprovechar las oportunidades de
                  crecimiento.
                </p>
              </div>
            </div>
            <div className="expo-susu-box">
              <Diversity3Icon color='error' sx={{fontSize:[150]}} />
              <div className="ex-su-text">
                <h2>4. Participa en ruedas de Negocios Exclusivas</h2>
                <p>
                  Las ruedas de negocio del BNI Summer Supplier Summit están
                  diseñadas para facilitar reuniones uno a uno con empresas
                  interesadas en tus productos o servicios. Esta es una
                  oportunidad única para presentar tu oferta directamente a
                  potenciales clientes y socios comerciales, generando “leads”
                  de alta calidad y abriendo puertas para futuras alianzas
                  estratégicas.
                </p>
              </div>
            </div>
            <div className="expo-susu-box">
              <CakeIcon color='error' sx={{fontSize:[150]}} />
              <div className="ex-su-text">
                <h2>5. Celebra el XV anivgersario BNI en Ciudad de México</h2>
                <p>
                  Celebramos 15 años desarrollando y creciendo sostenidamente
                  los negocios de miles de empresarios a través del Networking
                  Estratégico y el Sistema de BNI. Este evento no solo conmemora
                  nuestra trayectoria, sino que también mira hacia el futuro,
                  abriendo nuevas oportunidades para todos los asistentes. Ser
                  parte de esta celebración te permitirá formar parte importante
                  en la historia de BNI y contribuir a su legado de éxito y
                  cooperación empresarial.
                </p>
              </div>
            </div>
          </div>
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
                    No se incluye Stand, mobiliario extra, ni Entrada a la
                    Sesión de MOSQUETEROS.
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
            <div className="stands">
              <img src={Img8} alt="img" />
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Expositor;
