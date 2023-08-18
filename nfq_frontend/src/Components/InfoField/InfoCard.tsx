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
import { CancelModal } from './CancelModal';

export default function InfoCard() {
  return (
    <Card>
    <CardHeader 
      avatar={<Avatar/>}
      title="Dr. John Doe" 
      subheader="Specialist"
    />

    <CardContent>
      <Typography >
        <strong>Date:</strong> MM-DD-YYYY
      </Typography>
      <Typography >
        <strong>Time:</strong> HH:MM AM/PM
      </Typography>
      <Typography >
        <strong>Position in Queue:</strong> #3
      </Typography>
      <Typography >
        <strong>Estimated Wait:</strong> 20 minutes
      </Typography>
      
      <Box sx={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
      <Chip label="Active" color="primary" style={{ margin: '10px 0' }} />
      
      <CancelModal/>
      </Box>
      
     
    </CardContent>
  </Card>

  );
}