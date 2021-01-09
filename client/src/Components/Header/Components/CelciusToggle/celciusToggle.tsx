import React from 'react';
import  useStyles  from './celciusToggleCSS';
import Box from '@material-ui/core/Box';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';




const CelciusToggle = () => {
  const classes = useStyles();
  return(
    <Box className={classes.root}>
     <FormGroup row>
       <Switch/>
       <span>&#176;C</span>
     </FormGroup>
    </Box>
  );
}

export default CelciusToggle;