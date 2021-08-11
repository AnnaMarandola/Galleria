import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { paintingsData } from "../paintingsData";
import PaintingView from "./PaintingView";

const styles = (theme) => ({
  root: {
    width: "90%",
    marginLeft: "5%",
    backgroundColor: "white",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      paddingTop: "5rem",
      paddingBottom: "5rem",
    },
  },
  hero: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  heroImg: {
    width: "auto",
    height: "auto",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    top: "-4rem",
    [theme.breakpoints.up("sm")]: {
      top: "0",
      left: "-4rem",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  captionContainer: {
    width: "70%",
    backgroundColor: "white",
    padding: "1rem",
    [theme.breakpoints.up("sm")]: {
      width: "fit-content",
    },
  },
  title: {
    paddingBottom: "1rem",
    fontWeight: 700,
    color: "black",
  },
  artistName: {
    color: "#7d7d7d",
    paddingBottom: "1rem",
  },
  artistImg: {
    width: "6.3rem",
    height: "6.3rem",
  },
  textContainer: {
    [theme.breakpoints.up("lg")]: {
      width: "40%",
    },
  },
  year: {
    fontFamily: "Libre Baskerville",
    fontSize: "6rem",
    fontWeight: 600,
    color: "#e5e5e5",
    marginTop: "-4rem",
    marginBottom: "3rem",
    textAlign: "right",
    [theme.breakpoints.up("sm")]: {
      marginTop: "5rem",
      textAlign: "left",
      fontSize: "6.5rem",
      color: "#f3f3f3",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "9rem",
      fontWeight: 400,
      color: "#e5e5e5",
      textAlign: "right",
    },
  },
  text: {
    paddingBottom: "3rem",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "5rem",
      paddingRight: "5rem",
      marginTop: "-4rem",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "-2.5rem",
    },
  },
  sourcesLink: {
    paddingBottom: "3rem",
    color: "#7d7d7d",
    textDecoration: "underline",
    "&:hover": {
      color: "black",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "5rem",
    },
  },
});

function Gallery({ classes, index }) {
  let painting = paintingsData.find((painting) => painting.id === index + 1);

  return (
    <div className={classes.root}>
      <div className={classes.hero}>
        {/* <div className={classes.imageContainer}> */}
          <img
            src={painting.images.hero.small}
            alt={painting.name}
            className={classes.heroImg}
          />
          <PaintingView painting={painting} />
        {/* </div> */}
        <div className={classes.titleContainer}>
          <div className={classes.captionContainer}>
            <Typography className={classes.title} variant="h1">
              {painting.name}
            </Typography>
            <Typography className={classes.artistName} variant="h2">
              {painting.artist.name}
            </Typography>
          </div>
          <img
            src={painting.artist.image}
            alt={painting.artist.name}
            className={classes.artistImg}
          />
        </div>
      </div>

      <div className={classes.textContainer}>
        <Typography className={classes.year}>{painting.year}</Typography>
        <Typography variant="body1" className={classes.text}>
          {painting.description}
        </Typography>
        <Link href={painting.source} className={classes.sourcesLink}>
          go to source
        </Link>
      </div>
    </div>
  );
}

export default withStyles(styles)(Gallery);
