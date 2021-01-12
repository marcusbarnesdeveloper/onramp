import React, { useState } from 'react';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Main from './Components/Main/main';
import Grid from '@material-ui/core/Grid';
import  useStyles  from './AppCss';
import Controller from './Controller';

const App : React.FC = () => {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});


  const handleChange = (e : any) : void => {
    if(e.target.name === 'city' ) {
      setCity(e.target.value);
    } else {
      setState(e.target.value);
    }
  }
  const handleSubmit = () : void => {
    Controller.translateCityToLatLong(city, state)
    .then((data : object) => {
      setWeather(data);
    })
    .catch((e: string) => {
      console.log(e);
    })
    .finally(() => {
      setCity('')
      setState('')
    });
  }
  const classes = useStyles();
  return(
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.root}
      >
        <Header change={handleChange} city={city} state={state} submit={handleSubmit}/>
        <Main />
        <Footer/>
      </Grid>
  )
}

export default App;
