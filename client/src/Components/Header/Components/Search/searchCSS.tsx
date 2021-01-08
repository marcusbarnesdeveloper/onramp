import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'red',
      font: '10px'
    },
    textField: {
      border: "1px solid white",
      background: "white"
    }
  })
)

export default useStyles;