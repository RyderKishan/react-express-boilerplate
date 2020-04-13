import React, { shallowEqual } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import * as Actions from '../../ducks/Home/actions';
import * as Selectors from '../../ducks/Home/selectors';

import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const getPosts = () => dispatch(Actions.getPosts());
  const setPosts = (posts) => dispatch(Actions.setPosts(posts));
  const { posts, isPostFetching } = useSelector((state) => ({
    posts: Selectors.posts(state),
    isPostFetching: Selectors.isPostFetching(state),
  }),
  shallowEqual);
  console.log('{ posts, isPostFetching }', { posts, isPostFetching });
  // useEffect(() => {
  //   getPosts();
  // }, []);
  return (
    <div className="Home">
      <div className="actions">
        <Button
          id="fetch-results"
          disabled={isPostFetching}
          variant="contained"
          color="primary"
          onClick={getPosts}
        >
          Fetch Results
        </Button>
        <Button
          id="clear-results"
          disabled={posts && posts.length <= 0}
          variant="contained"
          color="primary"
          onClick={() => setPosts([])}
        >
          Clear Results
        </Button>
      </div>
      <div className="results">
        {
          !isPostFetching ? (
            <div className="postContainer">
              {
                posts && posts.length > 0 ? posts.map((post) => (
                  <Card key={post.id}>
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
                )) : (
                  <div className="make-center">
                    No Results
                  </div>
                )
              }
            </div>
          ) : (
            <div className="make-center">
              <CircularProgress />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Home;
