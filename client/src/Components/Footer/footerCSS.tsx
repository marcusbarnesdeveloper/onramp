import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      background: 'white',
      textAlign: 'center',
    },
  })
)

export default useStyles;