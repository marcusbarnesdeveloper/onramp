import React from 'react';
import useStyles from './weatherItemCSS';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { Typography } from '@material-ui/core';
import OpacityIcon from '@material-ui/icons/Opacity';



const Weatheritem = () => {
  const classes = useStyles();
  return(
   <div className={classes.root}>
    <Typography>
      3 PM
    </Typography>
    <Typography>
      23
    </Typography>
    <div className={classes.icon}>
      <WbSunnyIcon fontSize='large'/><Typography>Sunny</Typography>
    </div>
    <div className={classes.icon}>
      <OpacityIcon fontSize='large'/><Typography>30%</Typography>
    </div>
   </div>
  );
}

export default Weatheritem;