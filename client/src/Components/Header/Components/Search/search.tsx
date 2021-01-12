import React from 'react';
import  useStyles  from './searchCSS';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

interface Props {
  change: (e : any) => void;
  submit: () => void;
  city: string;
  state: string;
}



const Search : React.FC<Props> = ({city, state, change, submit}) => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <form>
        <label htmlFor='city'>City</label>
        <input placeholder='Enter City Name' type='text' name='city'value={city.toLocaleLowerCase()} onChange={change} required/>
        <label htmlFor='city'>State</label>
        <input placeholder='Enter State Name' type='text' name='state' maxLength={2} value={state.toLocaleUpperCase()} onChange={change} required/>
        <input type='submit' onClick={submit}/>
      </form>
    </div>

  );
}

export default Search;