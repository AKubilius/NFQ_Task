import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { Specialist } from "../Specialist/Specialist";

export default function BookAppointment() {
  return (
    <Container component="main" maxWidth="sm">
      <Typography sx={{display: "flex",
          flexDirection: "column",
          alignItems: "center"}}>
        <h1>Book an Appointment</h1>
        </Typography>
      
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
         
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        
       <Specialist name="Meow"/>

      </Box>
    </Container>
  );
}