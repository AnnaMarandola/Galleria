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
  },
  heroTitle: {
      padding: "2rem",
      paddingRight: "5rem",
      width: "fit-content",
      backgroundColor: "white",
      position: "relative",
      top: "-4rem"
  },
  name: {
      paddingBottom: "1rem",
      fontWeight: 700,
      color: "black"
  },
  artist: {
      color: "#7d7d7d"
  },
  portraitAndYear: {
    display: "flex"
  },
  artistImg: {
      width: "6.5rem",
      height: "6.5rem",
      marginTop: "-5rem"
  },
  year: {
      fontFamily: "Libre Baskerville",
      fontSize: "6rem",
      fontWeight: 800,
      color: "#e5e5e5",
      marginTop: "-1.5rem"
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
      <div className={classes.heroTitle}>
      <Typography className={classes.name} variant="h2">{painting.name}</Typography>
      <Typography className={classes.artist} variant="h3">{painting.artist.name}</Typography>
      </div>
      <div className={classes.portraitAndYear}>
      <img
        src={painting.artist.image}
        alt={painting.artist.name}
        className={classes.artistImg}
      />
      <Typography className={classes.year} >{painting.year}</Typography>
      </div>
      <Typography className={classes.text}>{painting.description}</Typography>
      <Link href={painting.description}>go to source</Link>    
    </div>
  );
}

export default withStyles(styles)(Gallery);
