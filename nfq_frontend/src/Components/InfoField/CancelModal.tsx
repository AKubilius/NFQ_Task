import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 4,
  display:'flex',
  flexDirection:'column',
  alignItems:'center'
};

const buttonStyle = {
    backgroundColor:'#9F5D5A',
    '&:hover': {
        backgroundColor: '#D8908C',  
      },
}

export  function CancelModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button variant="contained" sx={buttonStyle} onClick={handleOpen}>Cancel</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={modalStyle}>
          <Typography  variant='h6' >
           Are you sure you want to cancel?
          </Typography>
          <Button variant="contained" onClick={handleClose} sx={buttonStyle} >Yes</Button>
        </Box>
      </Modal>
    </div>
  );
}