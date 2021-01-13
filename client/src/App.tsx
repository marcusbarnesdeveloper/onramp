import React, { useState, useEffect } from 'react';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Main from './Components/Main/main';
import Grid from '@material-ui/core/Grid';
import  useStyles  from './AppCss';
import Controller from './Controller';
import {Current}  from './Model';


const App : React.FC = () => {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [unit, setUnit] = useState(true);
  const [select, setSelect] = useState('current');
  const [hourly, setHourly] = useState([
    {
      time: '10 pm',
      temp: 12,
      humid: 20,
      icon: '04n',
      weather: 'cloudy'
    },
    {
      time: '10 pm',
      temp: 12,
      humid: 20,
      icon: '04n',
      weather: 'cloudy'
    },
    {
      time: '10 pm',
      temp: 12,
      humid: 20,
      icon: '04n',
      weather: 'cloudy'
    },
  ]);
  const [daily, setDaily] = useState([
    {
      time: 1610478000,
      temp: 90,
      humid: 20,
      icon: '04n',
      weather: 'cloudy'
    }
  ])
  const [current, setWeather] = useState<Current>({
  city: 'chino',
  state: 'CA',
  farenheitTemp: 90,
  celciusTemp: 60,
  main: 'cloudy',
  icon: '04n',
});

  const tabs = (data: string) => {
    setSelect(data);
  }
  const changeUnit = () => {
    setUnit(!unit);
  }
  const handleChange = (e : any) : void => {
    if(e.target.name === 'city' ) {
      setCity(e.target.value);
    } else {
      setState(e.target.value);
    }
  }
  const handleSubmit = (e: any, city = 'chino', state = 'CA') : void => {
    e.preventDefault();
    Controller.translateCityToLatLong(city, state)
    .then((data : any) => {
      const current = data.current;
      const daily = data.daily;
      const hourly = data.hourly;
      const weather = {
        celciusTemp: Math.ceil((current.temp-32)*5/9),
        farenheitTemp: Math.ceil(current.temp),
        city: city,
        state: state,
        main: current.weather[0].main,
        icon: current.weather[0].icon,
        date: Date.now().toString(),
      }
      setDaily(daily);
      setWeather(weather);
      setHourly(hourly);
    })
    .catch((e: string) => {
      console.log(e);
    })
    .finally(() => {
      setCity('')
      setState('')
    });
  }

  useEffect(() => {
    Controller.translateCityToLatLong('chino', 'CA')
    .then((data : any) => {
      const current = data.current;
      const daily = data.daily;
      const hourly = data.hourly;
      const weather = {
        celciusTemp: Math.ceil((current.temp-32)*5/9),
        farenheitTemp: Math.ceil(current.temp),
        city: 'chino',
        state: 'CA',
        main: current.weather[0].main,
        icon: current.weather[0].icon,
        date: Date.now().toString(),
      }
      setDaily(daily);
      setWeather(weather);
      setHourly(hourly);
    })
    .catch((e: string) => {
      console.log(e);
    })
    .finally(() => {
      setCity('')
      setState('')
    });
  }, []);

  const classes = useStyles();
  return(
    <Grid
        container
        direction="column"
        alignItems="center"
        justify='space-between'
        className={classes.root}
      >
      <Header change={handleChange} city={city} state={state} submit={handleSubmit} unit={unit} changeUnit={changeUnit}/>
      <Main
        city={current.city} state={current.state}
        temp={unit ? current.farenheitTemp : current.celciusTemp} selected={select}
        tab={tabs} icon={current.icon}
        main={current.main} hourly={hourly}
        daily={daily}
      />
      <Footer />
    </Grid>
  )
}

export default App;
