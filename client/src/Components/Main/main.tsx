import React from 'react';
// import useStyles from './mainCSS';
import WeatherMainCard from './Components/weatherCardMain';
import Tabs from './Components/Tabs/tabs';
import Grid from '@material-ui/core/Grid';


const Main = () => {
  return(
    <Grid
      container
      direction='column'
    >
      <Tabs />
      <WeatherMainCard />
    </Grid>
  )
}

export default Main;