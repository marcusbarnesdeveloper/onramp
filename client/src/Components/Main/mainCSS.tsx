import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      background: 'green',
      padding: "10px 0",
      color: 'white',
      textTransform: 'capitalize',
      letterSpacing: '1px',
      display: 'flex',
    },
    temp: {
      flex:.3,
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    icon: {
      color: 'yellow',
    },
    times: {
      flex: 2,
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    selected: {
      textDecoration: 'underline'
    }
  })
)

export default useStyles;