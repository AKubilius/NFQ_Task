import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container/Container';
import Typography from '@mui/material/Typography/Typography';
import Button from '@mui/material/Button/Button';
import Card from '@mui/material/Card/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import Avatar from '@mui/material/Avatar/Avatar';
import CardContent from '@mui/material/CardContent/CardContent';
import Chip from '@mui/material/Chip/Chip';
import InfoCard from './InfoCard';
import { useState } from 'react';


const typoStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
  const buttonStyle = {
    backgroundColor:'#A19DD3',
     '&:hover': {
        backgroundColor: '#3E61EF', 
      },
      margin:3
      
}
export default function InfoTextField() {
    const [showCard, setShowCard] = useState(false);

    function handleButtonClick() {
        setShowCard(true);
    }
  return (
    <Container component="main" maxWidth="sm">
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
      }}
    >
         <Typography  sx={typoStyle}>
        <h1>Insert visit code</h1>
      </Typography>
      <TextField fullWidth label="Visit code..." id="fullWidth" />
      <Button  onClick={handleButtonClick} variant="contained" sx={buttonStyle}>Submit</Button>
    </Box>
    {showCard &&<InfoCard/>}
    </Container>
  );
}