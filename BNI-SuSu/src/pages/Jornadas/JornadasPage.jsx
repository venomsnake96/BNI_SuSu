import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../atomic-components/Loading/Loading";
import {Navbar} from '../../atomic-components/index'
import "./jornadasPage.css";

export default function JornadasPage() {
  const { id } = useParams();
  const [ponente, setPonente] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/ponentes.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          const foundPonente = data.find((p) => p.id === id);
          setPonente(foundPonente);
        } else {
          throw new Error("Data format is incorrect");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;
  if (!ponente) return <div>Ponente no encontrado</div>;

  return (
    <div className="jornadas-section">
      <Navbar />
      <div className="jornadas__conten">  
      <div className="hero">
        <div className="hero-filter">
          <div className="avatar">
            <img src={ponente.avatar} alt={ponente.name} />
          </div>
          <div className="info_gnrl">
            <h1>{ponente.name}</h1>
            <p>{ponente.speech}</p>
            <h2>{ponente.title}</h2>
            <h3>{ponente.profession}</h3>
            <p>{ponente.info}</p>
          </div>
        </div>
      </div>

      <div className="semblanza">
        <p>{ponente.semblanza}</p>
        <br />
        <p>{ponente.semblanza2}</p>
      </div>
      </div>
    </div>
  );
}
