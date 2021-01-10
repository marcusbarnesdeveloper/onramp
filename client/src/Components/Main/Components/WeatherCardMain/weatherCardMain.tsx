import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

import useStyles from './weatherCardMainCSS';


const WeatherCardMain = () => {
  const classes = useStyles();
  return(
    <Card className={classes.root}>
     <CardContent className={classes.half}>
      <Typography className={classes.location}>
        Chino, CA Weather
      </Typography>
      <Typography className={classes.time}>
        as of 9:32 am PST
      </Typography>
      <Typography className={classes.weather}>
        Sunny
      </Typography>
     </CardContent>
     <Box className={classes.half}>
      <Typography className={classes.icon}>
        <WbSunnyIcon fontSize="inherit"/>
      </Typography>
      <Typography className={classes.temps}>
        &deg;20/&deg;8
      </Typography>
     </Box>
    </Card>
  )
}

export default WeatherCardMain;