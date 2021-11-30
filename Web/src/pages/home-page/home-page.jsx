import React from "react";

import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import StorefrontIcon from "@mui/icons-material/Storefront";


const styles = makeStyles({
  MainSection: {
    minHeight: "85vh",
    backgroundColor: "#282c34",
    paddingBottom: 120,
  },
  Heading: {
    paddingTop: 60,
    display: "flex",
    justifyContent: "space-between",
    paddingRight: 150,
    paddingLeft: 150
  },
  HeadingImage: {},
  HeadingTitle: {},
  Tile: {
    paddingTop: 100,
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: 70,
    paddingRight: 70
  },
  ContainerTile: {
    paddingTop: 20,
    border: "1px solid white",
    borderRadius: 10,
    width: 360
  },
  ButtonViewMore: {
    marginTop: 100,
    border: "1px solid white",
    color: "white",
    margin: "0 auto"
  },
  ViewMore: {
    display: "flex",
    justifyContent: 'center',
  }
})

function HomePage() {
  const classes = styles()
  return (
    <div className={classes.MainSection}>
      <Heading/>
      <ContainerTile/>
      <ButtonViewMore/>
    </div>
  )
}

function Heading() {
  const classes = styles()
  return (
    <div className={classes.Heading}>
      <div className={classes.HeadingImage}>
        <StorefrontIcon color="primary" sx={{fontSize: 120}}/>
      </div>
      <div className={classes.HeadingTitle}>
        <h3>IPot</h3>
        <h5>heading heading heading heading heading heading heading<br/>
          heading heading heading heading heading heading heading<br/>
          heading heading heading heading heading heading heading</h5>
      </div>
    </div>

  )
}

function ContainerTile() {
  const classes = styles();

  return (
    <div className={classes.Tile}>
      <Button>
        <div className={classes.ContainerTile}>
          <StorefrontIcon color="primary" sx={{fontSize: 40}}/>
          <h3>Why you need IPot?</h3>
          <h5>tile tile tile <br/>
            tile tile tile <br/>
            tile tile tile </h5>
        </div>
      </Button>

      <Button>
        <div className={classes.ContainerTile}>
          <StorefrontIcon color="primary" sx={{fontSize: 40}}/>
          <h3>What IPot do?</h3>
          <h5>tile tile tile <br/>
            tile tile tile <br/>
            tile tile tile </h5>
        </div>
      </Button>

      <Button>
        <div className={classes.ContainerTile}>
          <StorefrontIcon color="primary" sx={{fontSize: 40}}/>
          <h3>Tile 3</h3>
          <h5>tile tile tile <br/>
            tile tile tile <br/>
            tile tile tile </h5>
        </div>
      </Button>
    </div>
  )
}

function ButtonViewMore() {
  const classes = styles();

  return (
    <div className={classes.ViewMore}>
      <Button className={classes.ButtonViewMore} variant="outlined">View More</Button>
    </div>
  )
}


export default HomePage;
