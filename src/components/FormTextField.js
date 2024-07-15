import React from "react";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";

const FormTextField = ({ label, type, ...props }) => {
  const theme = useTheme();

  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      variant="outlined"
      margin="dense"
      sx={{
        width: { xs: "94%", md: "100%" },
        bgcolor: theme.palette.black.main,
        borderRadius: 2,
        border: 2,
        borderColor: "#FFFFFF",
        "& input": {
          color: theme.palette.white.main,
        },
        "& label": {
          color: theme.palette.white.main,
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.white.main,
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.black.main,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.black.main,
        },
      }}
      InputLabelProps={{
        style: { color: "#FFFFFF" },
      }}
      inputProps={{
        autoComplete: "something",
      }}
      {...props}
    />
  );
};

export default FormTextField;
