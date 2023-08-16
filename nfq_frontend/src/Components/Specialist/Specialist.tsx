import Box from '@mui/material/Box/Box'
import Button from '@mui/material/Button/Button'
import React from 'react'

export const Specialist = () => {
  return (
    <Box width={1} sx={{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
         alignContent: 'end',
         marginBottom:2
      }}>
       <div>
        Petras Petraitis
       </div>
        
        <Button variant="contained" sx={{backgroundColor:'#A19DD3'}}>
      
      Select
      </Button>
      </Box>
  )
}
