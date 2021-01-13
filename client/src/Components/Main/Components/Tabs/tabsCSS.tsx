import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
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
      maxWidth: 50,
    },
    times: {
      flex: 2,
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      cursor: 'pointer',
    },
    selected: {
      textDecoration: 'underline'
    }
  })
)

export default useStyles;