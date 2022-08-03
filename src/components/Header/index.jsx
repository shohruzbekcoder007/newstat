import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import uzstat from './../../images/uzstat.png'
import { MyToolbar } from './styles'
import Language from '../Language';
import Stack from '@mui/material/Stack';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, bgColor: '#fff'}} component="div">
      <AppBar position="fixed" sx={{ bgColor: '#fff', boxShadow: "none"}}>
        <MyToolbar>
            <img src={uzstat} alt="alt img" srcSet="" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Statistika hisobotini taqdim etish <br/>
            <p>axborot tizimi</p>
          </Typography>
          <Stack direction="row" spacing={2}>
            <Language/>
            <p>(0371) 202-81-43</p>
          </Stack>
        </MyToolbar>
      </AppBar>
    </Box>
  );
}
