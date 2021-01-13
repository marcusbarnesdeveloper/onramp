import React from 'react';
import useStyles from './weatherItemCSS';
import { Typography } from '@material-ui/core';
import OpacityIcon from '@material-ui/icons/Opacity';


interface Props {
  time: string,
  icon: string,
  temp: string,
  weather: string,
  humidity: string
}
const Weatheritem : React.FC<Props> = (props) => {
  const classes = useStyles();
  return(
   <div className={classes.root}>
    <Typography>
      {props.time}
    </Typography>
    <Typography>
    &#176;{props.temp}
    </Typography>
    <div className={classes.icon}>
      <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt='img of weather icon'/><Typography>{props.weather}</Typography>
    </div>
    <div className={classes.icon}>
      <OpacityIcon fontSize='large'/><Typography>{props.humidity}%</Typography>
    </div>
   </div>
  );
}

export default Weatheritem;