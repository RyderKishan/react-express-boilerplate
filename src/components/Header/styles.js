import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    alignItems: 'center',
  },
  appName: {
    fontSize: '18px',
  },
  image: {
    height: '48px',
    cursor: 'pointer',
  },
  loginUser: {
    display: 'flex',
    alignItems: 'center',
    '& > span': {
      marginRight: '8px',
    },
    '& .search': {
      marginRight: '8px',
    },
    '& .routing': {
      marginRight: '12px',
      color: 'white',
      '& > span': {
        cursor: 'pointer',
        marginLeft: '8px',
      },
      '& > span:first-child': {
        marginLeft: '0px',
      },
    },
  },
});

export default useStyles;
