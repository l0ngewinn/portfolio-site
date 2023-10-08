import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  App: {
    textAlign: "center",
  },
  AppLogo: {
    height: "40vmin",
    pointerEvents: "none",
  },
  AppHeader: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  AppLink: {
    color: "#61dafb",
  },
});

function AboutContact() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <p>NEW PAGE</p>
    </div>
  );
}

export default AboutContact;
