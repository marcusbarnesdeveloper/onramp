import React from 'react';
import useStyles from './weatherCardSecondaryCSS';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import WeatherItem from './Components/weatherItems';


const WeatherCardSecondary = () => {
  const classes = useStyles();
  return(
    <Grid
      container
      direction='column'
      className={classes.root}
    >
      <Card>
        <CardContent>
          <Typography className={classes.type}>
            Minutely Weather<span className={classes.location}> - Chino,Ca</span>
          </Typography>
          <Typography className={classes.location}>
            as of 1:00pm PST
          </Typography>
          <Typography>
            Monday, January 11
          </Typography>
          <div>
            <WeatherItem/>
            <WeatherItem/>
            <WeatherItem/>
          </div>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default WeatherCardSecondary;