import { Typography } from "@material-ui/core";
import { withStyles, Button } from "@material-ui/core";
import { Fragment } from "react";
import { paintingsData } from "../paintingsData";
import BACK from "../assets/shared/icon-back-button.svg";
import NEXT from "../assets/shared/icon-next-button.svg";

const styles = (theme) => ({
  root: {
    width: "90%",
    marginLeft: "5%",
    display: "flex",
    justifyContent: "space-between",
  },
  progressBarContainer: {
    width: "90%",
    marginLeft: "5%",
    height: "0.25rem",
    backgroundColor: "#e5e5e5",
    marginTop: "2rem",
  },
  progress: {
    width: "10%",
    backgroundColor: "black",
    height: "0.25rem",
  },
  currentTrackContainer: {
    padding: "2rem 1rem",
  },
  title: {
    paddingBottom: "1rem",
    fontWeight: 600,
  },
  artist: {
    color: "#7d7d7d",
  },
  playerContainer: {
    padding: "2rem 1rem",
  },
});

function Player({ classes, index, goNext, goBack }) {

  let painting = paintingsData.find((painting) => painting.id === index + 1);

  const galleryLenght = paintingsData.length;
  
  let progress = index / ((galleryLenght - 1) / 100);

  return (
    <Fragment>
      <div className={classes.progressBarContainer}>
        <div className={classes.progress} style={{ width: `${progress}%` }} />
      </div>

      <div className={classes.root}>
        <div className={classes.currentTrackContainer}>
          <Typography variant="h2" className={classes.title}>
            {painting.name}
          </Typography>
          <Typography variant="h3" className={classes.artist}>
            {painting.artist.name}
          </Typography>
        </div>

        <div className={classes.playerContainer}>
          <Button onClick={goBack}>
            <img src={BACK} alt="go-back-button" />
          </Button>
          <Button onClick={goNext}>
            <img src={NEXT} alt="go-next-button" />
          </Button>
        </div>
      </div>
    </Fragment>
  );
}

export default withStyles(styles)(Player);
