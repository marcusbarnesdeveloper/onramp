import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'pink',
      font: '10px'
    }
  })
)

export default useStyles;