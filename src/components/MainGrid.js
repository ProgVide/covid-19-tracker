import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import GlobalData from './GlobalData';
//import Chartn from './Chartn';
import Viss from './Viss.tsx';
import TestC from './TestC';
import Old from './Old';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MainGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Item><GlobalData /></Item>
        </Grid>
        <Grid item xs={8}>
          <Item><TestC /></Item>
          {/* <Item><Old /></Item> */}
        </Grid>
      </Grid>
    </Box>
  );
}
