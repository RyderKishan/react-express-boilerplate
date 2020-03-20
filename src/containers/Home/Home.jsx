import React, { useEffect, shallowEqual } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import * as Actions from '../../ducks/Home/actions';
import Selectors from '../../ducks/Home/selectors';

import useStyles from './styles';
import './Home.css';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const getPosts = dispatch(Actions.getPosts());
  const { posts } = useSelector(
    (state) => ({
      posts: Selectors.posts(state),
    }),
    shallowEqual,
  );
  useEffect(() => {
    getPosts();
  }, []);
  // eslint-disable-next-line no-console
  console.log('posts', posts);
  return (
    <div className="Home">
      Home
      <div className={classes.postContainer}>
        {posts && posts.map((post) => (
          <Card className={classes.root} key={post.id}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.body}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
