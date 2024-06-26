import React from "react";
import { Cards, Titlecomp, CardInfo } from "../../atomic-components";
import { Img1, Img2, Img3, Img4, Img5 } from "../../assets/img";
import CelebrationIcon from "@mui/icons-material/Celebration";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import HikingIcon from '@mui/icons-material/Hiking';
import "./section.css";
const Section = () => {
  return (
    <div className="sUsU-section section_padding">
      <Titlecomp texto={"Summer Supplier Summit"} />
      <div className="sUsu-card-container">
        <div>
          <Cards
            title={"Sesion XV de Aniversario"}
            imageFor={Img1}
            texrParh={
              "Sesión XV Aniversario BNI MOSQUETEROS Asiste a la sesión Especial de Aniversario y conmemora con más de 200 empresarios el nacimiento del primer capítulo de BNI en Ciudad de México. Networking Estratégico de Negocios al estilo puro de BNI."
            }
          />
        </div>
        <div>
          <Cards
            title={"Conferencias Especiales"}
            imageFor={Img2}
            texrParh={
              "El Aprendizaje Continuo es uno de nuestros valores fundamentales. Conferencias de talla internacional, líderes de la industria y expertos en negocios que compartirán sus conocimientos y estrategias para el éxito. Las ponencias estarán enfocadas hacia la mejora continua en cuanto a calidad, liderazgo, proveeduría, servicio, Networking  y ventas; temas que te ayudarán en tu crecimiento empresarial y personal. "
            }
          />
        </div>
        <div>
          <Cards
            title={"Networking"}
            imageFor={Img3}
            texrParh={
              "Es lo que somos y lo que hacemos cómo nadie!. Sesiones de Networking especializadas y estructuradas; Speed Networking masivo; vinculación estratégica. Amplía tu red de contactos, establece alianzas estratégicas y abre nuevas oportunidades de negocio en un ambiente profesional y dinámico."
            }
          />
        </div>
        <div>
          <Cards
            title={"Expositores (Stands)"}
            imageFor={Img4}
            texrParh={
              "Descubre una variedad de proveedores de alta calidad. Todos miembros verificados de BNI, reconocidos por su excelencia y compromiso con los más altos estándares de calidad y servicio, listos para ofrecer soluciones innovadoras y eficientes para tu empresa."
            }
          />
        </div>
      </div>
      <div className="susu-client">
        <Titlecomp texto={"¿Qué hace que este evento sea tan especial?"} />
        <div className="card-info-container">
          <CardInfo
            textInfo="Celebramos 15 años desarrollando y creciendo sostenidamente los negocios de miles de empresarios a través del Networking Estratégico y el Sistema de BNI"
            icons={<CelebrationIcon color="error" sx={{ fontSize: [85] }} />}
          />
          <CardInfo
            textInfo="Hemos construido una red sólida de profesionales y empresarios dedicados a ayudarse mutuamente a alcanzar el éxito. "
            icons={
              <ConnectWithoutContactIcon
                color="error"
                sx={{ fontSize: [85] }}
              />
            }
          />
          <CardInfo textInfo='Este evento no solo conmemora nuestro viaje, sino que también mira hacia el futuro, abriendo nuevas oportunidades para todos los asistentes. ' icons={<HikingIcon color="error" sx={{fontSize:[85]}} />} />
        </div>
      </div>
    </div>
  );
};

export default Section;
