import React from 'react';
import WeatherMainCard from './Components/WeatherCardMain/weatherCardMain';
import Tabs from './Components/Tabs/tabs';
import WeatherCardSecondary from './Components/WeatherCardSecondary/weatherCardSecondary';
import Grid from '@material-ui/core/Grid';

interface Props {
  city: string,
  state: string,
  temp: number,
  selected: string,
  main: string,
  icon: string,
  hourly: any,
  daily: any,
  tab: (e : any) => void,
}

const Main : React.FC<Props> = (props) => {
  var arr = <div></div>
  if(props.selected === 'current') {
    arr = <WeatherMainCard
    city={props.city} state={props.state}
    temp={props.temp}main={props.main}
    icon={props.icon}/>;
  } else {
    arr = <WeatherCardSecondary
    city={props.city}state={props.state}
    selected={props.selected} hourly={props.hourly}
    daily={props.daily}
    />;
  }
  console.log(props.selected);
  return(
    <Grid
      container
      direction='column'
    >
      <Tabs city={props.city} state={props.state} temp={props.temp} tab={props.tab} icon={props.icon}/>
      {arr}
    </Grid>
  )
}

export default Main;