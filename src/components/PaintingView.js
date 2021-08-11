import { withStyles, Button, Backdrop } from "@material-ui/core";
import { useState } from "react";
import FULLSCREEN from "../assets/shared/icon-view-image.svg";

const styles = (theme) => ({
  root: {
    position: "relative",
    top: "-17rem",
    left: "0.5rem",
    [theme.breakpoints.up("sm")]: {
      top: "30rem",
      left: "-40rem",
    },
    [theme.breakpoints.up("md")]: {
      top: "1rem",
    },
  },

  viewButton: {
    backgroundColor: "black",
    color: "white",
    width: "10rem",
    height: "2.5rem",
    opacity: 0.8,
    zIndex: 99,
  },
  fullscreenIcon: {
    padding: "1rem",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  }
});

function PaintingView({ classes, painting }) {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
      };
      const handleToggle = () => {
        setOpen(!open);
      };

  return (
    <div className={classes.root}>
      <Button className={classes.viewButton} onClick={handleToggle}>
        <img
          className={classes.fullscreenIcon}
          src={FULLSCREEN}
          alt="fullscreen icon"
        />
        View image
      </Button>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
      <img src={painting.images.hero.small} alt={painting.name}/>
      </Backdrop>
    </div>
  );
}

export default withStyles(styles)(PaintingView);
