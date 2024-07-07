import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { Container } from "@mui/material";
import logo from "../assets/images/logo.svg";

function Register() {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          height: "100vh",
          bgcolor: theme.palette.black.main, // Change background color as needed
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column", // Stack items vertically
          padding: theme.spacing(4), // Add padding for spacing
        }}
      >
        <Box
          sx={{
            width: 400,
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
            Register
          </Typography>
          <Box sx={{ mb: 2, gap: 1, display: "flex", flexDirection: "row" }}>
            <TextField
              label="First Name"
              variant="outlined"
              margin="dense"
              sx={{
                width: "50%",
                bgcolor: theme.palette.black.main,
                borderRadius: 2,
                border: 2,
                borderColor: theme.palette.white.main,
                "& input": {
                  color: theme.palette.white.main, // Set text color to white
                },
                "& label": {
                  color: theme.palette.white.main, // Set label color to white
                },
                "&:focus-within": {
                  borderColor: theme.palette.black.main, // Set border color when focused
                },
                "& input:-webkit-autofill": {
                  /* Apply your styles here */
                  color: theme.palette.white.main,
                  borderColor: theme.palette.white.main,
                },
              }}
              InputLabelProps={{
                style: { color: theme.palette.white.main }, // Set label color to white
              }}
              inputProps={{
                autoComplete: "something", // Disable autocomplete
              }}
            />

            <TextField
              label="Last Name"
              variant="outlined"
              margin="dense"
              sx={{
                width: "50%",
                bgcolor: theme.palette.black.main,
                borderRadius: 2,
                border: 2,
                borderColor: theme.palette.white.main,
                "& input": {
                  color: theme.palette.white.main, // Set text color to white
                },
                "& label": {
                  color: theme.palette.white.main, // Set label color to white
                },
                "&:focus-within": {
                  borderColor: theme.palette.black.main, // Set border color when focused
                },
              }}
              InputLabelProps={{
                style: { color: theme.palette.white.main }, // Set label color to white
              }}
              inputProps={{
                autoComplete: "something", // Disable autocomplete
              }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              margin="dense"
              sx={{
                bgcolor: theme.palette.black.main,
                borderRadius: 2,
                border: 2,
                borderColor: theme.palette.white.main,
                "& input": {
                  color: theme.palette.white.main, // Set text color to white
                },
                "& label": {
                  color: theme.palette.white.main, // Set label color to white
                },
                "&:focus-within": {
                  borderColor: theme.palette.black.main, // Set border color when focused
                },
              }}
              InputLabelProps={{
                style: { color: theme.palette.white.main }, // Set label color to white
              }}
              inputProps={{
                autoComplete: "something", // Disable autocomplete
              }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Create Password"
              type="password"
              variant="outlined"
              margin="dense"
              sx={{
                bgcolor: theme.palette.black.main,
                borderRadius: 2,
                border: 2,
                borderColor: theme.palette.white.main,
                "& input": {
                  color: theme.palette.white.main, // Set text color to white
                },
                "& label": {
                  color: theme.palette.white.main, // Set label color to white
                },
                "&:focus-within": {
                  borderColor: theme.palette.black.main, // Set border color when focused
                },
              }}
              InputLabelProps={{
                style: { color: theme.palette.white.main }, // Set label color to white
              }}
              inputProps={{
                autoComplete: "something", // Disable autocomplete
              }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Re-enter Password"
              type="password"
              variant="outlined"
              margin="dense"
              sx={{
                bgcolor: theme.palette.black.main,
                borderRadius: 2,
                border: 2,
                borderColor: theme.palette.white.main,
                "& input": {
                  color: theme.palette.white.main, // Set text color to white
                },
                "& label": {
                  color: theme.palette.white.main, // Set label color to white
                },
                "&:focus-within": {
                  borderColor: theme.palette.black.main, // Set border color when focused
                },
              }}
              InputLabelProps={{
                style: { color: theme.palette.white.main }, // Set label color to white
              }}
              inputProps={{
                autoComplete: "something", // Disable autocomplete
              }}
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ borderRadius: 3, height: 50, mb: 2 }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
