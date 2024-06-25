import React from "react";
import "./patrocinadores.css";
import { Logo, Titlecomp } from "../../atomic-components/index";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Patrocinadores = () => {
  return (
    <div className="patrocinadores section_padding">
      <Titlecomp texto="Patrocinadores" />
      <div className="patro-info">
        <div className="patro-card">
          <div className="patro-icon">
            <VisibilityOutlinedIcon sx={{ fontSize: [40] }} />
          </div>
          <div>
            <h3>Visibilidad de la marca</h3>
            <ul>
              <li>
                Presencia destacada en un evento con alta concurrencia y
                relevancia empresarial
              </li>
              <li>
                Inclusión en materiales promocionales, pantallas del evento y
                campañas de social media.
              </li>
            </ul>
          </div>
        </div>
        <div className="patro-card">
          <div className="patro-icon">
            <CampaignOutlinedIcon sx={{ fontSize: [40] }} />
          </div>
          <div>
            <h3>Publicidad y Promoción</h3>
            <ul>
              <li>
                Inclusión en campañas de marketing y publicidad antes, durante y
                despues del evento
              </li>
              <li>Logo y lliga en el sitio erb del evento</li>
            </ul>
          </div>
        </div>
        <div className="patro-card">
          <div className="patro-icon">
            <HubOutlinedIcon sx={{ fontSize: [40] }} />
          </div>
          <div>
            <h3>Oportunidades de Networking</h3>
            <ul>
              <li>
                Acceso exclusivo a sesiones networking y ruedad de negocio con
                potenciales clientes y socios
              </li>
              <li>Ibntreraccion directa con más de 600 empresarios.</li>
            </ul>
          </div>
        </div>
      </div>
        <Titlecomp texto="Niveles de patrocinio" />
      <div className="patro-contend">
        <div className="patro-box">
            <div className="t-oro"><EmojiEventsIcon sx={{fontSize:[80]}} /></div>
          <div className="patro-text">
            <h2>Oro. Patrocinador Prioncipal</h2>
            <ul>
              <li>
                Conferencia: 30 minutos para una conferencia en escenario
                principal.
              </li>
              <li>Taller: 30 minutos para un taller en salas alternas.</li>
              <li>
                Presencia de Marca: Logo en pantallas del evento, materiales
                promocionales, menciones y campañas de social media.
              </li>
              <li>
                Stand Premium: Lugar preferencial en el área de expositores.
              </li>
              <li>
                Lugar Preferencial en las sesiones de Networking y ruedas de
                Negocio
              </li>
              <li>
                Publicidad: Inclusión en todas las campañas publicitarias del
                evento.
              </li>
              <li>Sitio Web: Logo y enlace en el sitio web del evento.</li>
            </ul>
            <small>Inversión: $30,000 MXN</small>
          </div>
        </div>
        <div className="patro-box">
        <div className="t-plata"><EmojiEventsIcon sx={{fontSize:[80]}} /></div>
          <div className="patro-text">
            <h2>Plata. Patrocinador Secundario </h2>
            <ul>
              <li>Taller: 20 minutos para un taller en salas alternas.</li>
              <li>
                Presencia de Marca: Logo en pantallas del evento, materiales
                promocionales y menciones durante el evento.
              </li>
              <li>
              Stand Expositor: Espacio estándar en el área de expositores.
              </li>
              <li>
              Lugar Preferencial en las sesiones de Networking y ruedas de Negocio
              </li>
              <li>
              Publicidad: Inclusión en campañas selectas de marketing.

              </li>
              <li>
              Sitio Web: Logo en el sitio web del evento.
              </li>
            </ul>
            <small>Inversión: $20,000 MXN</small>
          </div>
        </div>
        <div className="patro-box">
        <div className="t-bronce"><EmojiEventsIcon sx={{fontSize:[80]}} /></div>
          <div className="patro-text">
            <h2>Bornce. Patrocinador Básico</h2>
            <ul>
                <li>Presencia de Marca: Logo en pantallas del evento, materiales promocionales y menciones durante el evento.</li>
                <li>Stand Expositor: Espacio en el área de expositores.</li>
                <li>Lugar Preferencial en las sesiones de Networking y ruedas de Negocio</li>
                <li>Sitio Web: Logo en el sitio web del evento.</li>
            </ul>
            <small>Inversión: $10,000 MXN</small>
          </div>
        </div>
      </div>
      <div className="programa-section">
        <Titlecomp texto='Programa' />
        <div className="programa-conten">
            <div className="programa">
                <div className="horario"></div>
                <div className="bloque"></div>
            </div>
            <div className="programa">
                <div className="horario">7:00 - 9:00</div>
                <div className="bloque">Sesión MOSQUETEROS XV Aniversario. Desayuno y Networking estratégico.</div>
            </div>
            <div className="programa">
                <div className="horario">9:00 - 19:00</div>
                <div className="bloque">Expo BNI SUMMER SUPPLIER SUMMIT <br /> Stands expositores</div>
            </div>
            <div className="programa">
                <div className="horario">11:00 - 14:00</div>
                <div className="bloque">Conferencias Principales BNI SUMMER SUPPLIER SUMMIT <br /> y Talleres en áreas designadas </div>
            </div>
            <div className="programa">
                <div className="horario">14:00 - 15:00</div>
                <div className="bloque">Comida y Networking</div>
            </div>
            <div className="programa">
                <div className="horario">15:00 - 16:00</div>
                <div className="bloque">Super Speed Networking</div>
            </div>
            <div className="programa">
                <div className="horario">16:00 - 17:00</div>
                <div className="bloque">Rueda de Negocios y Talleres</div>
            </div>
            <div className="programa">
                <div className="horario">16:00 - 19:00</div>
                <div className="bloque">Conferencias Principales y Clausura BNI SUMMER SUPPLIER SUMMIT</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Patrocinadores;
