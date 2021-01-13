import React from 'react';
import  useStyles  from './logoCSS';
import Box from '@material-ui/core/Box';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';




const Logo = () => {
  const classes = useStyles();
  return(
    <Box className={classes.root}>
      <span>
        <CloudOutlinedIcon />
      </span>
      <span>
        WeatherWatch
      </span>
    </Box>
  );
}

export default Logo;