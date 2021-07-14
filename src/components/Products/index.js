import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ShopCard from '../ShopCard'
import products from '../ShopCard/dataCards'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function Products() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                {
                    products.map(product => (
                        <Grid item xs={12} sm={6} md={4}>
                            <ShopCard key={product.id} product={product} />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
}