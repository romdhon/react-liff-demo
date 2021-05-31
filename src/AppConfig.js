import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  chartPaper: {
    padding: theme.spacing(1),
    height: '40vh'
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(2)
    }
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  btnLiff: {
    display: 'flex',
    margin: theme.spacing(2),
    justifyContent: 'center'
  }
}));
