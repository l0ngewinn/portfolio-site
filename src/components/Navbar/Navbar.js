import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "@mui/material";

const useStyles = createUseStyles({
  container: {
    display:'flex',
    alignItems: 'center',
    height: '10vh',
    paddingLeft: '10vh',
    paddingRight: '10vh'
  },
  left: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '30%'
  },
  links: {
    marginRight: '5vh',
    color: 'black'
  },
  name: {
    width: '40%'
  },
  right: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '30%'
  },
});

function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Link className={classes.links} underline="none">
          Pojects
        </Link>
        <Link className={classes.links} underline="none" href="/AboutContact">
          Resume
        </Link>
      </div>
      <div className={classes.name}></div>
      <div className={classes.right}>
        <Link 
          className={classes.links} 
          underline="none"
          href="/AboutContact"> 
          About & Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
