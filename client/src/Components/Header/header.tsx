import React from 'react';
import  useStyles  from './headerCSS';
import Grid from '@material-ui/core/Grid';
import Logo from './Components/Logo/logo';
import Search from './Components/Search/search';
import CelciusToggle from './Components/CelciusToggle/celciusToggle';





const Header = () => {
  const classes = useStyles();

  return(
    <Grid
      container
      className={classes.root}
      direction="row"
      justify="space-between"
      alignItems="center"
    >
     <Logo />
     <Search/>
     <CelciusToggle/>
    </Grid>
  );
}

export default Header;