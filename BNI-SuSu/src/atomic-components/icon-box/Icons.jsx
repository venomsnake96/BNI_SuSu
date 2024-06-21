import './icons.css'
import React from "react";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";

function Icons() {
  return (
    <div className="icons-cont">
        <div className="icon-box">
      <div className="icon">
        <PinDropOutlinedIcon sx={{fontSize: 50}} />
      </div>
      <h3>Ubicación Estratégica</h3>
        </div>
      <div className="icon-box">
      <div className="icon">
        <CampaignOutlinedIcon sx={{fontSize: 50}}/>
      </div>
      <h3>Promoción Previa al evento</h3>
      </div>
      <div className="icon-box">
      <div className="icon">
        <FolderSharedOutlinedIcon sx={{fontSize: 50}} />
      </div>
      <h3>Promoción Previa al evento</h3>
      </div>
      <div className="icon-box">
      <div className="icon">
        <HandshakeOutlinedIcon sx={{fontSize: 50}} />
      </div>
      <h3>Promoción Previa al evento</h3>
      </div>

    </div>
  );
}

export default Icons;
