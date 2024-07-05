import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./cardId.css";
import { NavLink } from "react-router-dom";

export default function CardId({ ponentes }) {
  return (
    <>
      {ponentes.map((ponente) => (
        <div key={ponente.id} className="single-card">
          <div className="front">
            <div className="card-image">
              <img src={ponente.avatar} alt="img" />
            </div>
          </div>
          <div className="back">
            <div className="content">
              <div className="content-info">
                <h2>{ponente.name}</h2>
                <h4>{ponente.title}</h4>
                <h3>{ponente.profession}</h3>
                <p>{ponente.info}</p>
              </div>
              <div className="conferencias">
                <h3>Conferencias</h3>
                <p>{ponente.speech}</p>
              </div>
            </div>
            <NavLink to={`/jornadas/${ponente.id}`}>
              <button className="btn-more">
                <AddCircleIcon sx={{ fontSize: [40] }} />
              </button>
            </NavLink>
          </div>
        </div>
      ))}
    </>
  );
}
