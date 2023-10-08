import React from "react";
import { createUseStyles } from "react-jss";
import { Typography } from "@mui/material"

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#dddddd",
  },
  quote: {
    padding: '10vh'
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <Typography
        className={classes.quote}
          variant="h4"
          align="center"
          color='grey'
          fontStyle='italic'>
            A computer science student who wants{"\n"}to combine coding and creativity.
        </Typography>
      </div>
    </div>
  );
}

export default Home;
