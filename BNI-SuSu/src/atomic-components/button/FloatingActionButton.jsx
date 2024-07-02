import React from "react";
import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import './floatingActionButton.css'

const FloatingActionButton = ({ phoneNumber, message }) => {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Fab
      sx={{
        position: "fixed",
        bottom: 26,
        right: 26,
        backgroundColor: "#25D366",
        color: "#FFFFFF",
        "&:hover": {
          backgroundColor: "#cf2030",
        },
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      }}
      href={whatsappLink}
      target="_blank"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon />
    </Fab>
  );
};

export default FloatingActionButton;
