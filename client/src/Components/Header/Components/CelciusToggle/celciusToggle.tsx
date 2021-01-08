import React from 'react';
import  useStyles  from './celciusToggleCSS';
import Box from '@material-ui/core/Box';




const CelciusToggle = () => {
  const classes = useStyles();
  return(
    <Box className={classes.root}>
      search right here
    </Box>
  );
}

export default CelciusToggle;