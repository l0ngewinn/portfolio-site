import logo from "../logo.svg";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  App: {
    textAlign: "center",
    backgroundColor: "#dddddd",
    height: '100vh'
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

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <header className="App-header">
        <img src={logo} className={classes.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={classes.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          The app is saving.
        </a>
      </header>
    </div>
  );
}

export default Home;
