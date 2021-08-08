import { withStyles } from "@material-ui/core";
import { paintingsData } from "../paintingsData";

const styles = (theme) => ({});

function Gallery({ classes, paintingId }) {
  const painting = paintingsData.find(
    (painting) => painting.name === paintingId
  );
  console.log("painting", painting);
  return (
    <div className={classes.root}>
      <h2>Gallery...</h2>
    </div>
  );
}

export default withStyles(styles)(Gallery);
