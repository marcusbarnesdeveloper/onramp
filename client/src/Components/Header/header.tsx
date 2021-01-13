import React from 'react';
import  useStyles  from './headerCSS';
import Grid from '@material-ui/core/Grid';
import Logo from './Components/Logo/logo';
import Search from './Components/Search/search';
import CelciusToggle from './Components/CelciusToggle/celciusToggle';

interface Props {
  change: (e: any) => void;
  submit: (e: any) => void;
  city: string,
  state: string,
}

const Header : React.FC<Props> = ({change, submit, city, state}) => {
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
     <Search change={change} city={city}state={state} submit={submit}/>
     <CelciusToggle/>
    </Grid>
  );
}

export default Header;