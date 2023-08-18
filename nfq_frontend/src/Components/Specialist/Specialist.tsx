import Box from '@mui/material/Box/Box'
import Button from '@mui/material/Button/Button'
import React from 'react'
import {SpecialistModal} from './SpecialistModal';
import Typography from '@mui/material/Typography/Typography';

interface ISpecialist {
  username: string;
  id: string;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export const Specialist: React.FC<ISpecialist> = ({
  username,
  id
}) => {



  return (

    <Box width={1} sx={{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
         alignContent: 'end',
         marginBottom:2
      }}>

       <Typography>
        {username}
       </Typography>
        
      <SpecialistModal
      id={id}/>
      </Box>
  )
}
