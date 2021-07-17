import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Collection from '../Collection';
import AppContext from '../../context/AppContext';
import '../styles/Collections.css';
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: 1100,
  },
}));

const Collections = () => {
  const { state } = useContext(AppContext);
  const { categories } = state;

  const classes = useStyles();
  return (
    <>
      <div className="Collections">
        <div className={classes.root}>
          <Grid
            container
            spacing={0}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {categories.map((category) => (
              <Grid key={category.id} item xs={12} sm={6} md={4}>
                <Collection category={category} />{' '}
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Collections;
