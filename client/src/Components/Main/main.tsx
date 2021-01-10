import React from 'react';
// import useStyles from './mainCSS';
import WeatherMainCard from './Components/WeatherCardMain/weatherCardMain';
import ForeCastCard from './Components/Forecast/forecast';
import Tabs from './Components/Tabs/tabs';
import Grid from '@material-ui/core/Grid';


const Main = () => {
  return(
    <Grid
      container
      direction='column'
    >
      {/* <Tabs />
      <WeatherMainCard /> */}
      <ForeCastCard />
    </Grid>
  )
}

export default Main;