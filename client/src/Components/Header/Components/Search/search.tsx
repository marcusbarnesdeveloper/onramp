import React from 'react';
import  useStyles  from './searchCSS';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';





const Search = () => {
  const classes = useStyles();
  return(
    <Box className={classes.root}>
     <form>
       <TextField
          id="standard-start-adornment"
          placeholder="enter stuff"
          className={classes.textField}
       />
       <Button variant="contained">
         <SearchIcon/>
       </Button>
     </form>
    </Box>
  );
}

export default Search;