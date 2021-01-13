import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './celciusToggleCSS';


interface Props {
  unit: boolean,
  changeUnit: () => void,
}

const FloatingActionButton: React.FC<Props> = (props)  => {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={props.changeUnit}>
      <Fab color="primary" aria-label="add" size='small'>
       &#176;{props.unit ? 'F' : 'C'}
      </Fab>
    </div>
  );
}

export default FloatingActionButton;