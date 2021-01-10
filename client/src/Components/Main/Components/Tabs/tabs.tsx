import React from 'react';
import useStyles from './tabsCSS';
import WbSunnyIcon from '@material-ui/icons/WbSunny';


const Tabs = () => {
  const classes = useStyles();
  return(
<div className={classes.root}>
  <div className={classes.temp}>
    <span className={classes.icon}>
      <WbSunnyIcon fontSize='small'/>
    </span>
    <span>&#176;90</span>
    <span>Chino,CA</span>
  </div>
  <div className={classes.times}>
    <span className={classes.selected}>Minute</span>
    <span>Hourly</span>
    <span>Daily</span>
  </div>
</div>
  )
}

export default Tabs;