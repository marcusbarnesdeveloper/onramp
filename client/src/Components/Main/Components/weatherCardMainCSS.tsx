import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      width: '50%',
      margin: '0 auto',
      padding: '10px'
    },
    half: {
      flex: 1,
      textAlign: 'center'
    },
    location: {
      fontWeight: 600,
      fontSize: 16,
      marginBottom: 2
    },
    time: {
      fontWeight: 500,
      fontSize: 13,
      marginBottom: 2
    },
    weather: {
      fontWeight: 700,
      fontSize: 19,
      marginBottom: 2
    },
    icon: {
      color: 'yellow',
      fontSize: 72,
    },
    temps: {
      fontSize: 19,
      fontWeight: 700
    }
  })

)

export default useStyles;