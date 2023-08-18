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
    backgroundColor:'#A19DD3'
}

export  function SpecialistModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button variant="contained" sx={buttonStyle} onClick={handleOpen}>Select</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={modalStyle}>
          <Typography  variant='h6' >
            Your code
          </Typography>
          <Typography  variant='h1'>
            01354
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}