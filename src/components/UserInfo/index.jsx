import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export default function UserInfo() {
  return (
    <Accordion sx={{ boxShadow: 0 }}>
      <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container spacing={1} sx={{ width: '100%', justifyContent: 'space-between' }}>
          <Grid>
            <Typography>
              Farg'ona Viloyati Kasb-Hunar Ta'limi Hududiy Boshqarmasi Tasarrufidagi Farg'ona Tumani Qurilish Sanoat Kasb-Hunar Kolleji <br />
              <span style={{ fontSize: "13px" }}>STIR: 200197177, KTUT: 31097097</span>
            </Typography>
          </Grid>
          <Grid>
            <Grid container spacing={3} sx={{ width: '200px' }}>
              <Grid item xs={2}>
                <NotificationsIcon />
              </Grid>
              <Grid item xs={2}>
                <ManageAccountsIcon />
              </Grid>
              <Grid item xs={2}>
                <ManageAccountsIcon />
              </Grid>
              <Grid item xs={2}>
                <ManageAccountsIcon />
              </Grid>
              <Grid item xs={2}>
                <ManageAccountsIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>


      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <i>OPF kodi: </i><br />
          <b>270</b> - Учреждение
        </Typography><br />
        <Typography>
          <i>SOOGU kodi: </i><br />
          <b>79994</b> - Субъекты предпринимательства, не вошедшие в структуры органов государственного и хозяйственного управления
        </Typography><br />
        <Typography>
          <i>IFUT kodi: </i><br />
          <b>85320</b> - Техническое и профессиональное среднее образование
        </Typography><br />
        <Typography>
          <i>SOATO kodi: </i><br />
          <b>1730233575 </b> - Farg'ona viloyati, Farg'ona tumani, Mindon shaharchasi
        </Typography><br />
        <Typography>
          <i>Manzili: </i><br />
          - Mindon ko'chasi, 318-uy
        </Typography><br />
        <Typography>
          <i>Elektron pochta manzili: </i><br />
          -
        </Typography><br />
        <Typography>
          <i>Telefon kontaktlari: </i><br />
          +99890 351-35-07
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
