import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { Specialists } from "../Specialist/Specialists";
import { getRequest, makePostRequest } from "../Api/api";
import { useState } from "react";

const boxStyle = {
  boxShadow: 3,
  borderRadius: 2,
  px: 4,
  py: 6,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}

const typoStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}

export default function BookAppointment() {

  return (
    <Container component="main" maxWidth="sm">
      <Typography sx={typoStyle}>
        <h1>Book an Appointment</h1>
      </Typography>
      <Box
        sx={boxStyle}
      >
        <Specialists/>
      </Box>
    </Container>
  );
}