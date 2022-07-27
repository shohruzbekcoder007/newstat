import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function UserInfo() {
  return (
      <Accordion sx={{boxShadow: 3}}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Farg'ona Viloyati Kasb-Hunar Ta'limi Hududiy Boshqarmasi Tasarrufidagi Farg'ona Tumani Qurilish Sanoat Kasb-Hunar Kolleji <br/>
            <span style={{fontSize: "13px"}}>STIR: 200197177, KTUT: 31097097</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <i>OPF kodi: </i><br/>
            <b>270</b> - Учреждение
          </Typography><br/>
          <Typography>
            <i>SOOGU kodi: </i><br/>
            <b>79994</b> - Субъекты предпринимательства, не вошедшие в структуры органов государственного и хозяйственного управления
          </Typography><br/>
          <Typography>
            <i>IFUT kodi: </i><br/>
            <b>85320</b> - Техническое и профессиональное среднее образование
          </Typography><br/>
          <Typography>
            <i>SOATO kodi: </i><br/>
            <b>1730233575 </b> - Farg'ona viloyati, Farg'ona tumani, Mindon shaharchasi
          </Typography><br/>
          <Typography>
            <i>Manzili: </i><br/>
            - Mindon ko'chasi, 318-uy
          </Typography><br/>
          <Typography>
            <i>Elektron pochta manzili: </i><br/>
            -
          </Typography><br/>
          <Typography>
            <i>Telefon kontaktlari: </i><br/>
            +99890 351-35-07
          </Typography>
        </AccordionDetails>
      </Accordion>
  );
}
