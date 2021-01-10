import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import useStyles from './forecastCSS';



const Forecast = () => {
  const classes = useStyles();
  return(
    <Card className={classes.root}>
      <CardContent className={classes.fluid}>
        <Typography className={classes.location}>
          Today's Forecast in Chino, CA
        </Typography>
        <div className={classes.contain}>
          <div className={classes.cast}>
            <Typography className={classes.time}>
              Morning
            </Typography>
            <Typography className={classes.temp}>
              &deg;10
            </Typography>
            <Typography className={classes.icon}>
              <WbSunnyIcon fontSize='inherit'/>
            </Typography>
            <Typography className={classes.rain}>
              0%
            </Typography>
          </div>
          <div className={classes.cast}>
            <Typography className={classes.time}>
              Morning
            </Typography>
            <Typography className={classes.temp}>
              &deg;10
            </Typography>
            <Typography className={classes.icon}>
              <WbSunnyIcon fontSize='inherit'/>
            </Typography>
            <Typography className={classes.rain}>
              0%
            </Typography>
          </div>
          <div className={classes.cast}>
            <Typography className={classes.time}>
              Morning
            </Typography>
            <Typography className={classes.temp}>
              &deg;10
            </Typography>
            <Typography className={classes.icon}>
              <WbSunnyIcon fontSize='inherit'/>
            </Typography>
            <Typography className={classes.rain}>
              0%
            </Typography>
          </div>
          <div className={classes.cast}>
            <Typography className={classes.time}>
              Morning
            </Typography>
            <Typography className={classes.temp}>
              &deg;10
            </Typography>
            <Typography className={classes.icon}>
              <WbSunnyIcon fontSize='inherit'/>
            </Typography>
            <Typography className={classes.rain}>
              0%
            </Typography>
          </div>
          <div className={classes.cast}>
            <Typography className={classes.time}>
              Morning
            </Typography>
            <Typography className={classes.temp}>
              &deg;10
            </Typography>
            <Typography className={classes.icon}>
              <WbSunnyIcon fontSize='inherit'/>
            </Typography>
            <Typography className={classes.rain}>
              0%
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Forecast;