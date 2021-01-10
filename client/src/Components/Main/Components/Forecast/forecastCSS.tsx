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
    location: {
      fontWeight: 600,
      fontSize: 16,
      marginBottom: 2
    },
    contain: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%'
    },
    fluid: {
      width: '100%',
    },
    time: {
      fontSize: 16,
      fontWeight: 500,
    },
    temp: {
      fontWeight: 600,
      fontSize: 19
    },
    icon: {
      fontSize: '50px'
    },
    rain: {
      fontSize: 13,
      fontWeight: 500
    },
    cast:{
      textAlign:'center'
    }
  })

)

export default useStyles;