import React from 'react';
import  useStyles  from './logoCSS';
import Box from '@material-ui/core/Box';




const Logo = () => {
  const classes = useStyles();
  return(
    <Box className={classes.root}>
      hey im a logo!
    </Box>
  );
}

export default Logo;