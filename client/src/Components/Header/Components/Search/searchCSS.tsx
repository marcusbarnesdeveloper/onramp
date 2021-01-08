import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'red',
      font: '10px'
    }
  })
)

export default useStyles;