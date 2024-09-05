import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import ForgotPassword from "./ForgotPassword";
import { GoogleIcon, FacebookIcon, SitemarkIcon } from "./CustomIcons";
import authService from "../../../services/api/authService";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: "100%",
  padding: 20,
  backgroundImage:
    "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
  backgroundRepeat: "no-repeat",
  ...theme.applyStyles("dark", {
    backgroundImage:
      "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
  }),
}));

export default function SignIn() {
  const [telError, setTelError] = React.useState(false);
  const [telErrorMessage, setTelErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const defaultTheme = createTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validateInputs = () => {
    const tel = document.getElementById("tel");
    const password = document.getElementById("password");

    let isValid = true;

    if (!tel.value) {
      setTelError(true);
      setTelErrorMessage("Please enter a valid tel address.");
      isValid = false;
    } else {
      setTelError(false);
      setTelErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateInputs()) return;
    const data = new FormData(event.currentTarget);

    authService
      .login({
        phoneNumber: data.get("tel"),
        password: data.get("password"),
      })
      .then((res) => {
        console.log('ffffff',res);
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', res.data.user)
        window.location = '/';
      })
      .catch((e) => {
        console.log("error___", e);
        let message = "Une erreur se produite";
        if (e.response) {
          switch (e.response.status) {
            case 422:
              message = "Mot de passe ou identifiant incorrect";
              break;
            default:
              message = "Erreur serveur";
              break;
          }
        }
        toast.error(message, {});
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer />
      <CssBaseline enableColorScheme />
      <Box sx={{ height: "100dvh", display: "flex", flexDirection: "column" }}>
        <Box sx={{ flex: "1 1", overflow: "auto" }}>
          <SignInContainer direction="column" justifyContent="space-between">
            <Card variant="outlined">
              <Typography
                component="h1"
                variant="h4"
                sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
              >
                Authentification
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  gap: 2,
                }}
              >
                <FormControl>
                  <FormLabel htmlFor="tel">Téléphone</FormLabel>
                  <TextField
                    error={telError}
                    helperText={telErrorMessage}
                    id="tel"
                    type="string"
                    name="tel"
                    placeholder=""
                    autoComplete="tel"
                    autoFocus
                    required
                    fullWidth
                    variant="outlined"
                    color={telError ? "error" : "primary"}
                    sx={{ ariaLabel: "tel" }}
                  />
                </FormControl>
                <FormControl>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <FormLabel htmlFor="password">Mot de passe</FormLabel>
                    {/*                 <Link
                  component="button"
                  onClick={handleClickOpen}
                  variant="body2"
                  sx={{ alignSelf: "baseline" }}
                >
                  mot de passe oublié?
                </Link> */}
                  </Box>
                  <TextField
                    error={passwordError}
                    helperText={passwordErrorMessage}
                    name="password"
                    placeholder="••••••"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    autoFocus
                    required
                    fullWidth
                    variant="outlined"
                    color={passwordError ? "error" : "primary"}
                  />
                </FormControl>
                <ForgotPassword open={open} handleClose={handleClose} />
                <Button type="submit" fullWidth variant="contained">
                  S'authentifier
                </Button>
              </Box>
              {/* <Divider>or</Divider>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              onClick={() => alert("Sign in with Google")}
              startIcon={<GoogleIcon />}
            >
              Sign in with Google
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              onClick={() => alert("Sign in with Facebook")}
              startIcon={<FacebookIcon />}
            >
              Sign in with Facebook
            </Button>
          </Box> */}
            </Card>
          </SignInContainer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
