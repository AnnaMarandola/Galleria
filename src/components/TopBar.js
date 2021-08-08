import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import LOGO from "../assets/shared/logo.svg";

const styles = (theme) => ({
  root: {
    width: "100%",
    height: "8rem",
    padding: "3rem 0",
    display: "flex",
    borderBottom: "1px #e5e5e5 solid",
    justifyContent: "space-around",
    [theme.breakpoints.up("md")]: {
      width: "90%",
      marginLeft: "5%",
      height: "9rem",
      padding: "2.8rem 0",
      justifyContent: "space-between",
    },
  },
  slideshowButton: {
    fontFamily: "Libre Baskerville",
    fontSize: "11px",
    lineHeight: "12px",
    fontWeight: 700,
    letterSpacing: 2,
    color: "#7d7d7d",
    "&:hover": {
      color: "#000",
      backgroundColor: "transparent",
    },
  },
  [theme.breakpoints.up("md")]: {
    letterSpacing: 3,
    fontSize: "12px",
    lineHeight: "15px",
  },
});

function TopBar({ classes, handleSlideShow, started }) {

  return (
    <div className={classes.root}>
      <img src={LOGO} alt="Galleria" />
      <Button className={classes.slideshowButton} onClick={handleSlideShow}>
        {started ? "stop slideshow" : "start slideshow"}
      </Button>
    </div>
  );
}

export default withStyles(styles)(TopBar);
