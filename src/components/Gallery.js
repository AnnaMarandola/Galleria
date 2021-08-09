import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { paintingsData } from "../paintingsData";

const styles = (theme) => ({
  root: {
    width: "90%",
    marginLeft: "5%",
    backgroundColor: "white",
  },
  heroImg: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    top: "-4rem",
  },
  captionContainer: {
    width: "fit-content",
    backgroundColor: "white",
    padding: "1rem",
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
  year: {
    fontFamily: "Libre Baskerville",
    fontSize: "6rem",
    fontWeight: 800,
    color: "#e5e5e5",
    marginTop: "-4rem",
    marginBottom: "3rem",
    textAlign: "right",
  },
});

function Gallery({ classes, paintingId }) {
  const painting = paintingsData.find(
    (painting) => painting.name === paintingId
  );
  console.log("painting", painting);

  return (
    <div className={classes.root}>
      <img
        src={painting.images.hero.small}
        alt={painting.name}
        className={classes.heroImg}
      />
      <div className={classes.titleContainer}>
        <div className={classes.captionContainer}>
          <Typography className={classes.title} variant="h2">
            {painting.name}
          </Typography>
          <Typography className={classes.artistname} variant="h3">
            {painting.artist.name}
          </Typography>
        </div>
        <img
          src={painting.artist.image}
          alt={painting.artist.name}
          className={classes.artistImg}
        />
      </div>
      <Typography className={classes.year}>{painting.year}</Typography>
      <Typography variant="body1" className={classes.text}>
        {painting.description}
      </Typography>
      <Link href={painting.description}>go to source</Link>
    </div>
  );
}

export default withStyles(styles)(Gallery);
