import React from 'react';
import  useStyles  from './footerCSS';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
const Footer = () => {
  const classes = useStyles();
  return(
<footer className={classes.root}>
    <p>Copyright © 2012 The Example Company</p>
    <p>
      <a href="about.html">About</a> -
      <a href="policy.html">Privacy Policy</a> -
      <a href="contact.html">Contact Us</a>
    </p>
</footer>
  )
}

export default Footer;