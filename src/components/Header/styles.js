import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

export const MyToolbar = styled(Toolbar)(({ theme }) => ({
    '& img': {
      width: 90,
    },
  }));