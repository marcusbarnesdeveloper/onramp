import React from 'react';
import  useStyles  from './searchCSS';


interface Props {
  change: (e : any) => void;
  submit: (e : any, city? : string, state? : string) => void;
  city: string;
  state: string;
}



const Search : React.FC<Props> = ({city, state, change, submit}) => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <form>
        <label htmlFor='city'></label>
        <input placeholder='Enter City Name' type='text' name='city'value={city.toLocaleLowerCase()} onChange={change} required/>
        <label htmlFor='city'></label>
        <input placeholder='Enter State Name' type='text' name='state' maxLength={2} value={state.toLocaleUpperCase()} onChange={change} required/>
        <input type='submit' onClick={submit}/>
      </form>
    </div>

  );
}

export default Search;