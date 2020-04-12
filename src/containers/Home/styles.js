import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '0.5em',
  },
  media: {
    height: 140,
  },
  postContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  progress: {
    color: '#0D475E',
  },
  disabled: {
    color: 'grey !important',
  },
});

export default useStyles;
