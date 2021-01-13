import React from 'react';
import  useStyles  from './footerCSS';
const Footer = () => {
  const classes = useStyles();
  return(
<footer className={classes.root}>
    <p>Copyright © 2012 The Example Company</p>
</footer>
  )
}

export default Footer;