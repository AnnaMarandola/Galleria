import Masonry from "react-masonry-css";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { paintingsData } from "../paintingsData";

const styles = (theme) => ({
  root: {
    width: "90%",
    marginLeft: "5%",
    // display: "flex",
    // flexWrap: "wrap",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: "5rem",
  },
  // thumbnail: {
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     width: "45%",
  //     padding: "0 1rem",
  //     marginTop: "-2rem",
  //   },
  //   [theme.breakpoints.up("md")]: {
  //     width: "30%",
  //     padding: "0 0.5rem",
  //     marginTop: "-3rem",
  //   },
  //   [theme.breakpoints.up("lg")]: {
  //     width: "25%",
  //     padding: "0 1rem",
  //     marginTop: "-5rem",
  //   },
  // },
  thumbImg: {
    width: "90%",
    "&:hover": {
      opacity: 0.7,
    },
  },
  titleBar: {
    position: "relative",
    top: "-9rem",
    left: "2rem",
    marginRight: "2rem",
    color: "white",
    textAlign: "left",
  },
  mansonryGrid: {
    display: "flex",
    width: "auto", 
    textAlign: "center",
    alignItems: "space-evenly"
  },
  masonryGrid_column: {
    backgroundClip: "padding-box",
  },
});


function Mansonry({ classes, handleSlideShow }) {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  return (
    <div className={classes.root}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={classes.mansonryGrid}
        columnClassName={classes.masonryGrid_column}
      >
        {paintingsData.map((item) => (
          <div className={classes.thumbnail} key={item.name}>
            <img
              src={item.images.thumbnail}
              alt={item.name}
              id={item.name}
              loading="lazy"
              className={classes.thumbImg}
              onClick={handleSlideShow}
            />
            <div className={classes.titleBar}>
              <Typography variant="h2">{item.name}</Typography>
              <Typography variant="h3">{item.artist.name}</Typography>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default withStyles(styles)(Mansonry);
