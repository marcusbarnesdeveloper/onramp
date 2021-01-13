import React from 'react';
import useStyles from './tabsCSS';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

interface Props {
  city: string,
  state: string
  temp: number,
  icon: string,
  tab: (e: any) => void,
}

const Tabs : React.FC<Props> = (props) => {
  const classes = useStyles();
  return(
<div className={classes.root}>
  <div className={classes.temp}>
    <span>
    <img className={classes.icon} src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="icon for weather"/>
    </span>
    <span>&#176;{props.temp}</span>
    <span>{props.city},{props.state}</span>
  </div>
  <div className={classes.times}>
    <span onClick={() => props.tab('current')}>Current</span>
    <span onClick={() => props.tab('Hourly')}>Hourly</span>
    <span onClick={() => props.tab('Daily')}>Daily</span>
  </div>
</div>
  )
}

export default Tabs;