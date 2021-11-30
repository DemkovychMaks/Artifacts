import React from 'react';

import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Product from '../product/product';

const styles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const products = [
  {
    id: 1,
    name: 'Name 1',
    description: 'Description 1',
    price: '10',
    rate: 2,
    image:
      'https://www.countryroad.com.au/ProductImages_Display/COMPMEDIUM/1/94701_447280_281014.jpg',
  },
  {
    id: 2,
    name: 'Name 2',
    description: 'Description 2',
    price: '20',
    rate: 2,
    image:
      'https://www.countryroad.com.au/ProductImages_Display/COMPMEDIUM/1/94701_447280_281014.jpg',
  },
  {
    id: 3,
    name: 'Name 2',
    description: 'Description 2',
    price: '20',
    rate: 2,
    image:
      'https://www.countryroad.com.au/ProductImages_Display/COMPMEDIUM/1/94701_447280_281014.jpg',
  },
  {
    id: 4,
    name: 'Name 2',
    description: 'Description 2',
    price: '20',
    rate: 3,
    image:
      'https://www.countryroad.com.au/ProductImages_Display/COMPMEDIUM/1/94701_447280_281014.jpg',
  },
  {
    id: 4,
    name: 'Name 2',
    description: 'Description 2',
    price: '20',
    rate: 5,
    image:
      'https://www.countryroad.com.au/ProductImages_Display/COMPMEDIUM/1/94701_447280_281014.jpg',
  },
];

const Products = () => {
  const classes = styles();

  return (
    <main className={classes.content}>
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
