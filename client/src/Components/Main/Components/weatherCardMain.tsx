import React from 'react';
import useStyles from './weatherCardMainCSS';


const WeatherCardMain = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
     Hello
    </div>
  )
}

export default WeatherCardMain;