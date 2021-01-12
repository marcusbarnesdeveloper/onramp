import React from 'react';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Main from './Components/Main/main';
import Grid from '@material-ui/core/Grid';
import  useStyles  from './AppCss';

const App = (message: string) => {
  const classes = useStyles();
  return(
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.root}
      >
        <Header/>
        <Main/>
        <Footer/>
      </Grid>
  )
}

export default App;
