import React from 'react'

import {IconButton} from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";

import { makeStyles } from '@mui/styles';

const styles = makeStyles({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 120,
    marginLeft: 120,
    borderBottom: "1px solid",
    height: 80
  },
  firstInfo : {
    fontSize: 14
  },
  secondInfo : {
    fontSize: 10,
    marginTop: 5
  },
  socialMedia: {
    width: 130,
    justifyContent: "space-between"
  },
  UnderFooter: {
    display: "flex",
    justifyContent: "center"
  }
})

function Footer() {
  const classes = styles();

  return (
    <footer>
      <div className={classes.footer}>
        <div className="footerInfo">
          <div className={classes.firstInfo}>Branding stuff</div>
          <div className={classes.secondInfo}>Branding stuff some text ....</div>
        </div>

        <div className="logo">
          <IconButton edge="start" color="inherit">
            <StorefrontIcon/>
          </IconButton>
        </div>
        <SocialMedia/>
      </div>

      <UnderFooter/>
    </footer>
  )
}

function SocialMedia() {
  const classes = styles()
  return (
    <div className={classes.socialMedia}>
      <IconButton edge="start" color="inherit">
        <InstagramIcon/>
      </IconButton>
      <IconButton edge="start" color="inherit">
        <FacebookIcon/>
      </IconButton>
      <IconButton edge="start" color="inherit">
        <GitHubIcon/>
      </IconButton>
      <IconButton edge="start" color="inherit">
        <TelegramIcon/>
      </IconButton>
    </div>
  )
}

function UnderFooter() {
  const classes = styles()
  return (
    <h5 className={classes.UnderFooter}>
      2021 IoT © Copyright all rights reserved, bla bla
    </h5>
  )
}

export default Footer
