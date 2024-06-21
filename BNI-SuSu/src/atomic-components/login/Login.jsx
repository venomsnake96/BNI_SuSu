import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { amber } from '@mui/material/colors';
import TextField from "@mui/material/TextField";
import Button from "../button/Button";
import Button2 from "../button/Button2";
import "./login.css";

const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff'
      }
    },
  });



export default function Login({ textButtonOp, textTitle, textDescrip }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <Button textTo={textButtonOp} handlerclick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box  component="form" className="box-field">
            <h1>{textTitle}</h1>
            <p>{textDescrip}</p>
            <ThemeProvider theme={theme}>

            <TextField
              color=""
              required
              id="outlined-required"
              label="Username"
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              className="text-field"
            />
            <TextField
              
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <TextField
              required
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              />
            </ThemeProvider>
            <Button2  textTo={'Summit'} handlercClose={handleClose}/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
