import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import uzstat from './../../images/uzstat.png'
import { MyToolbar } from './styles'
import Language from '../Language';
import Stack from '@mui/material/Stack';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} component="nav">
      <AppBar position="fixed">
        <MyToolbar>
            <img src={uzstat} alt="alt img" srcSet="" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Statistika hisobotini taqdim etish <br/>
            axborot tizimi
          </Typography>
          <Stack direction="row" spacing={2}>
            <Language/>
            <p>(0371) 202-81-45</p>
          </Stack>
        </MyToolbar>
      </AppBar>
    </Box>
  );
}
