import React from 'react';
import  useStyles  from './searchCSS';
import Box from '@material-ui/core/Box';




const Search = () => {
  const classes = useStyles();
  return(
    <Box className={classes.root}>
      search right here
    </Box>
  );
}

export default Search;