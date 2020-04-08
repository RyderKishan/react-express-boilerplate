import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    alignItems: 'center',
  },
  appName: {
    fontSize: '10.5em',
  },
  image: {
    height: '3em',
    cursor: 'pointer',
  },
  loginUser: {
    display: 'flex',
    alignItems: 'center',
    '& > span': {
      marginRight: '0.5em',
    },
    '& .search': {
      marginRight: '0.5em',
    },
    '& .routing': {
      marginRight: '1em',
      color: 'white',
      '& > span': {
        cursor: 'pointer',
        marginLeft: '0.5em',
      },
      '& > span:first-child': {
        marginLeft: '0',
      },
    },
  },
});

export default useStyles;
