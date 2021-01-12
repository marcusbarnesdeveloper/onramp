import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '50%',
      margin: '0 auto',
    },
    card: {

    },
    type: {
      fontWeight: 700,
      fontSize: 19,
    },
    location: {
      fontSize: 16,
      fontWeight: 500
    }
  })
)

export default useStyles;