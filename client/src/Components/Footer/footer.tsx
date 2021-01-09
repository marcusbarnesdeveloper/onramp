import React from 'react';
import  useStyles  from './footerCSS';
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