import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./cardId.css";
import { NavLink } from "react-router-dom";

function CardId({ name, spin, about, conferencia, image, company }) {
  
  return (
    <div className="single-card">
      <div className="front">
        <div className="card-image">
          <img src={image} alt="image" />
        </div>
      </div>

      <div className="back">
        <div className="content">
          <div className="content-info">
            <h2>{name}</h2>
            <h4>{spin}</h4>
            <h3>{company}</h3>
            <p>{about}</p>
          </div>
          <div className="conferencias">
            <h2>Conferencia</h2>
            <p>{conferencia}</p>
          </div>
        </div>
        <NavLink to={"jornada"}>
        <button className="btn-more">
          <AddCircleIcon sx={{fontSize:[40]}} />
        </button>
        </NavLink>
      </div>
    </div>
  );
}

export default CardId;
