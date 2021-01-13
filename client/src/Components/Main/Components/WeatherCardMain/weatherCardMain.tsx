import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import useStyles from './weatherCardMainCSS';

interface Props {
  state: string,
  city: string,
  main: string,
  icon: string,
  temp: number,
}

const WeatherCardMain : React.FC<Props> = (props) => {
  const classes = useStyles();
  return(
    <Card className={classes.root}>
     <CardContent className={classes.half}>
      <Typography className={classes.location}>
        {props.city}, {props.state.toUpperCase} Weather
      </Typography>
      <Typography className={classes.weather}>
        {props.main}
      </Typography>
     </CardContent>
     <Box className={classes.half}>
      <Typography className={classes.icon}>
        <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="icon for weather"/>
      </Typography>
      <Typography className={classes.temps}>
        &deg;{props.temp}
      </Typography>
     </Box>
    </Card>
  )
}

export default WeatherCardMain;