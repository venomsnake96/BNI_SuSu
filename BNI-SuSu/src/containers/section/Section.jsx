import React from "react";
import { Cards, Titlecomp } from "../../atomic-components";
import { Img1, Img2, Img3, Img4, Img5 } from "../../assets/img";
import "./section.css";
const Section = () => {
  return (
    <div className="sUsU-section section_padding" >
      <Titlecomp texto={"Summer Supplier Summit"} />
      <div className="sUsu-card-container">
        <div>
          <Cards
            title={"Sesion XV de Aniversario"}
            imageFor={Img1}
            textFor={"Sesión XV Aniversario BNI MOSQUETEROS"}
            texrParh={
              "Asiste a la sesión Especial de Aniversario y conmemora con más de 200 empresarios el nacimiento del primer capítulo de BNI en Ciudad de México. Networking Estratégico de Negocios al estilo puro de BNI."
            }
            textFoot={"*Con costo adicional."}
            textFoot2={""}
          />
        </div>
        <div>
          <Cards
            title={"Conferencias Especiales"}
            imageFor={Img2}
            textFor={
              "El Aprendizaje Continuo es uno de nuestros valores fundamentales."
            }
            texrParh={
              "Conferencias de talla internacional, líderes de la industria y expertos en negocios que compartirán sus conocimientos y estrategias para el éxito. Las ponencias estarán enfocadas hacia la mejora continua en cuanto a calidad, liderazgo, proveeduría, servicio, Networking  y ventas; temas que te ayudarán en tu crecimiento empresarial y personal. "
            }
          />
        </div>
        <div>
          <Cards
            title={"Networking"}
            imageFor={Img3}
            textFor={"Es lo que somos y lo que hacemos cómo nadie!"}
            texrParh={
              "Sesiones de Networking especializadas y estructuradas; Speed Networking masivo; vinculación estratégica. Amplía tu red de contactos, establece alianzas estratégicas y abre nuevas oportunidades de negocio en un ambiente profesional y dinámico."
            }
          />
        </div>
        <div>
          <Cards
            title={"Expositores (Stands)"}
            imageFor={Img4}
            textFor={"Descubre una variedad de proveedores de alta calidad."}
            texrParh={
              "Todos miembros verificados de BNI, reconocidos por su excelencia y compromiso con los más altos estándares de calidad y servicio, listos para ofrecer soluciones innovadoras y eficientes para tu empresa."
            }
          />
        </div>
      </div>
        <div className="susu-client">
          <Titlecomp texto={'Perfil del Publico Asistente'}/>
          <div>
            <div className="susu-client-asist">
              <div className="susu-client-text">
              <ul>
                <li>Empresarios y profesionales pertenecientes a BNI y otros organismos empresariales.</li>
                <li>Directores de empresas, gerentes de compras y tomadores de decisiones.</li>
                <li>Diversas industrias, incluyendo tecnología, manufactura, servicios, comercio, y más.</li>
              </ul>
              <div className="susu-client-asist-ex">
                <h3>Expectativa de Asistencia</h3>
                <p>Más de 600 empresarios de la Ciudad de México, Zona Metropolitana y varios estados de la República.
                </p>
              </div>
              </div>
              <div className="susu-client-img">
              <img src={Img5} alt="" />
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Section;
