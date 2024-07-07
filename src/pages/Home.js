import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import logo from "../assets/images/logo.svg";

function Home() {
  const theme = useTheme();

  return (
    <Grid container style={{ minHeight: "100vh" }}>
      {/* Left Grid (only visible on larger screens) */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          bgcolor: theme.palette.primary.main,
          display: { xs: "none", md: "flex" }, // Hide on mobile, show on desktop

          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: 70,
        }}
      >
        <Box
          sx={{
            p: 2,
            mt: 4,
            pl: 5,
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", mt: 4, color: theme.palette.black.main }}
          >
            SaharaAI
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: theme.palette.black.main,
              p: 2,
              mt: 4,
              pl: 5,
            }}
          >
            Unlock the true power of AI
          </Typography>
        </Box>
      </Grid>

      {/* Right Grid */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          bgcolor: theme.palette.black.main,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: 2,
        }}
      >
        <Box sx={{ textAlign: "center", maxWidth: "300px" }}>
          <img
            src={logo}
            alt="SaharaAI Logo"
            className="svg-animate"
            style={{ width: "100px", marginBottom: "20px" }}
          />
          <Typography
            variant="h4"
            sx={{
              color: theme.palette.white.main,
              mb: 2,
            }}
          >
            Guiding Your Path
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mb: 1, width: "100%", height: "60px", borderRadius: 3 }}
          >
            Sign In
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: theme.palette.white.main,
              borderColor: theme.palette.primary.main,
              width: "100%",
              height: "60px",
              borderRadius: 3,
              mt: 1,
            }}
          >
            Register
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Home;
