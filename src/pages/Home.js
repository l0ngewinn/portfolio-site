import React from "react";
import { createUseStyles } from "react-jss";
import { Typography } from "@mui/material";

var me = require('../assets/me.jpg');

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#dddddd",
  },
  quote: {
    padding: "10vh",
    color: "black",
  },
  biography: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10vh",
    height: "100vh",
  },
  chicago: {
    marginRight: "20vh",
    display: "flex",
    height: "65vh",
  },
  shortDescription: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  projectScroll: {

  },
});

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.quote}>
        <Typography
          sx={{ textShadow: "3px 1px grey" }}
          variant="h4"
          align="center"
          fontStyle="italic"
        >
          -Code Reimagined: Crafting Simplicity, Embracing Artistry.
        </Typography>
      </div>
      <div className={classes.biography}>
        <div className={classes.shortDescription}>
          <Typography 
            fontWeight="bold"
            variant="h5"
            color="grey"
          >
              A Little About Me!
          </Typography>
          <Typography
            variant="subtitle1"
          >
            Hello I'm Long here is a short summary about what I do.
          </Typography>
        </div>
        <img className={classes.chicago} src={me} alt="me!" />
      </div>
      <div className={classes.projectScroll}>

      </div>
    </div>
  );
}

export default Home;
