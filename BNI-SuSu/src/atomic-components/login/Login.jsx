import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextField from "@mui/material/TextField";
import Button from "../button/Button";
import Button2 from "../button/Button2";
import "./login.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

function Copyright(props) {
  return (
    <Typography  variant="overline" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link className="copy" color="inherit" href="https://www.rpmspeedcode.com/" target='_blank'>
        Rpm Code
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Login({ textButtonOp, textTitle, textDescrip }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

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
          <Box
            className="box-field"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <h1>{textTitle}</h1>
            <p>{textDescrip}</p>
            <ThemeProvider theme={theme}>
              <TextField
               name="username"
                required
                id="outlined-required"
                label="Username"
              />
              <TextField
                required
                id="outlined-required"
                label="Email"
                className="text-field"
                name="email"
              />
              <TextField
              name="password"
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
             
            </ThemeProvider>
            <Button2 textTo={"Summit"} handlercClose={handleClose}  onSubmited={handleSubmit} />
          <Copyright sx={{ mt: 8, mb: 4 }} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
