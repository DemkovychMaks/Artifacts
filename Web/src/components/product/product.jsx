import React from 'react';

import { makeStyles } from '@mui/styles';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core';
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import { Rating } from "@mui/material";

const styles = makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const Product = ({ product }) => {
  const classes = styles();


  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
        price={product.price}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5">
            ${product.price}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">{product.description}</Typography>
      </CardContent>

      <CardActions disableSpacing className={classes.cardActions}>
        <Rating
          name="simple-controlled"
          value={product.rate}
        />

        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
