import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "../Header";
import UserInfo from "../UserInfo";
import CreateReport from "../NewReport";
import Paper from "@mui/material/Paper";
import ChipsStatus from "../ChipsStatus";
import Grid from "@mui/material/Grid";
import YearChange from "../YearChange";
import CustomizedTables from "../Table";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Tags from "../ChipsStatus/select";


function Main() {
  return (
    <Box>
      <Header />
      <Box component="main" sx={{ pt: 8, m: 2 }}>
        <UserInfo />
        <Box sx={{ pt: 2, pb: 2 }}>
          <CreateReport />
        </Box>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Box sx={{ width: "1200px" }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                {/* <ChipsStatus /> */}
                <Tags/>
              </Grid>
              <Grid item xs={6}>
                <YearChange />
              </Grid>
            </Grid>
          </Box>
          <CustomizedTables />
        </Paper>
      </Box>
    </Box>
  );
}

export default Main;
