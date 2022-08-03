import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CreateTable from './table';
import ChipStatus from '../ChipsStatus';
import CloseIcon from '@mui/icons-material/Close';

export default function CreateReport() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Hisobot yaratish
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth='md'
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions>
          <Button onClick={handleClose}><CloseIcon sx={{color: 'red'}} /></Button>
        </DialogActions>
        <DialogTitle id="alert-dialog-title">
          <ChipStatus />
        </DialogTitle>
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent> */}
        <CreateTable />
        
      </Dialog>
    </div>
  );
}