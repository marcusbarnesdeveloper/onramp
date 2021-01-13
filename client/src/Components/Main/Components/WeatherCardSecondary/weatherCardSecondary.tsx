import React from 'react';
import useStyles from './weatherCardSecondaryCSS';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import WeatherItem from './Components/weatherItems';


interface Props {
  city: string,
  state: string,
  selected: string,
  hourly: any,
  daily: any,
}
const WeatherCardSecondary : React.FC<Props> = (props) => {
 const classes = useStyles();
 console.log(props.selected);
  return(
    <Grid
      container
      direction='column'
      className={classes.root}
    >
      <Card>
        <CardContent>
          <Typography className={classes.type}>
            {props.selected} Weather<span className={classes.location}> - {props.city},{props.state}</span>
          </Typography>
          <div>
            { props.selected === 'Hourly' ? props.hourly.map((h:any) => {
              const date = new Date(h.dt*100);
              const hour = date.getHours();
              const minute = date.getMinutes();
              const hourlyTime = `${hour} : ${minute}`;
              return <WeatherItem time={hourlyTime} temp={h.temp}icon={h.weather[0].icon}weather={h.weather[0].main} humidity={h.humidity}/>
            }):  props.daily.map((d : any) => {
              const date = new Date(d.dt*100);
              const days = date.getDay();
              const month = date.getMonth();
              const dailyTime = `${days} / ${month}`;
              return <WeatherItem time={dailyTime} temp={d.temp.day}icon={d.weather[0].icon}weather={d.weather[0].main} humidity={d.humidity}/>
            })}
          </div>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default WeatherCardSecondary;