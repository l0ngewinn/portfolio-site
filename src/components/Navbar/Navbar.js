import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "@mui/material";
import resume from "../../assets/current_resume.pdf"

const useStyles = createUseStyles({
  container: {
    position: 'sticky',
    top: 0,
    display: "flex",
    alignItems: "center",
    height: "10vh",
    paddingTop: "2vh",
    paddingLeft: "10vh",
    paddingRight: "10vh",
    backgroundColor: "#dddddd",
  },
  left: {
    display: "flex",
    justifyContent: "flex-end",
    width: "30%",
    "&>:first-child": {
      marginRight: '5vh'
    }
  },
  links: {
    color: "grey",
    "&:hover": {
      color: "#fff68f",
    },
    "&:#projectLink": {
      paddingRight: "2vh",
    },
  },
  name: {
    width: "40%",
    display: "flex",
    justifyContent: "center",
  },
  right: {
    display: "flex",
    justifyContent: "flex-start",
    width: "30%",
  },
});

function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Link 
          className={classes.links} 
          underline="none" 
          variant="subtitle1">
          Pojects
        </Link>
        <Link
          className={classes.links}
          underline="none"
          href={resume}
          variant="subtitle1"
          target="_blank"
        >
          Resume
        </Link>
      </div>
      <div className={classes.name}>
        <Link 
          className={classes.links} 
          underline="none" 
          variant="h4"
          href='/'>
          Long Nguyen
        </Link>
      </div>
      <div className={classes.right}>
        <Link
          className={classes.links}
          underline="none"
          variant="subtitle1"
          href="/AboutContact"
        >
          About & Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
