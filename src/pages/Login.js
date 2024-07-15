import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import logo from "../assets/images/logo.svg";
import FormTextField from "../components/FormTextField";

function Login() {
  const theme = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Login Form submitted!");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: theme.palette.black.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(4),
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: { xs: "100%", sm: 400 },
          paddingX: 2,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: theme.palette.white.main,
          }}
        >
          Sahara<span style={{ color: theme.palette.primary.main }}>AI</span>
        </Typography>
        <img
          src={logo}
          alt="SaharaAI Logo"
          className="svg-animate-left"
          style={{ width: "50px", marginBottom: "20px" }}
        />
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: theme.palette.primary.main,
          }}
        >
          Log In
        </Typography>

        <FormTextField
          label="Email"
          type="email"
          name="email"
          required
          sx={{ mb: 2 }}
        />
        <FormTextField
          label="Create Password"
          type="password"
          name="password"
          required
          sx={{ mb: 2 }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            borderRadius: 3,
            height: 50,
            mb: 2,
          }}
        >
          Log In
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
