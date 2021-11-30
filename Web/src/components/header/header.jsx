import React from 'react';

import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';

import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import { AppBar, Button, ButtonGroup, IconButton, Toolbar, Typography} from "@mui/material";

const styles = makeStyles({
  toolBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  navigation: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center"
  },
  headerLogo: {
    display: "flex",
    alignItems: "center",
    width: "150px"
  },
  activeIcons: {
    display: "flex",
    width: 110,
    marginRight: 50,
    justifyContent: "space-between"
  }
})


function Header() {
  const classes = styles();

  return (
    <header>
      <AppBar>
        <Toolbar position="sticky" className={classes.toolBar}>
          <div className={classes.headerLogo}>
            <IconButton edge="start" color="inherit">
              <StorefrontIcon/>
            </IconButton>
            <Typography variant="h6">IPot Shop</Typography>
          </div>

          <ButtonGroup
            variant="text"
            aria-label="text button group"
            color="inherit"
            className={classes.navigation}
          >
            <Button><Link to="/">Home</Link></Button>
            <Link to="/catalog"><Button>Catalog</Button></Link>
          </ButtonGroup>

          <div className={classes.activeIcons}>
            <IconButton edge="start" color="inherit">
              <ShoppingCartIcon/>
            </IconButton>
            <IconButton edge="start" color="inherit">
              <PersonOutlineIcon/>
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
