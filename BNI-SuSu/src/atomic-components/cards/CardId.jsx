import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./cardId.css";
import ponentes from '../../data/data-ponenetes/ponentes.json'
import { NavLink } from "react-router-dom";

function Buttonav() {
  return (
    <NavLink to='/jornadas'>   
    <button className="btn-more">
      <AddCircleIcon sx={{ fontSize: [40] }} />
    </button>
    </NavLink>
  );
}

export default function CardId ({ponentes}) {
  return(
    <>
      {ponentes.map(product => (
        <div key={product.id} className="single-card">
          <div className="front">
            <div className="card-image">
            <img src={product.avatar} alt="img" />
            </div>
          </div>
          <div className="back">
            <div className="content">
              <div className="content-info">
                <h2>{product.name}</h2>
                <h4>{product.profession}</h4>
                <h3>{product.title}</h3>
                <p>{product.info}</p>
              </div>
            <div className="conferencias">
            <h3>Conferencias</h3>
            <p>{product.speech}</p>
            </div>
            </div>
            <Buttonav />
          </div>
        </div>
      ))}
    </>
  )
}
