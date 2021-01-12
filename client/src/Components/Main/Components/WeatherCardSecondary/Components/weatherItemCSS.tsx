import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { FullscreenExit } from '@material-ui/icons';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      margin:'10px 0',
    },
    icon: {
      display: 'flex',
      justifyContent:'space-between',
      alignItems: 'center',
    }
  })
)

export default useStyles;