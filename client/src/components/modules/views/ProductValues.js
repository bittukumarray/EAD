import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import logo from "./productCurvyLines.png";
import productValues1 from "./productValues1.svg";
import productValues2 from "./productValues2.svg";
import productValues3 from "./productValues3.svg";

const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: "#fff5f8"
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: "flex",
    position: "relative"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5)
  },
  image: {
    height: 55
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180
  }
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img src={logo} className={classes.curvyLines} alt="curvy lines" />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={productValues1}
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                Sell your crops
              </Typography>
              <Typography variant="h5">
                {
                  "Now you can easily sell your crops just sitting at home. No need to go anywhere"
                }
                {" And get good price for your crops."}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={productValues2} alt="graph" />
              <Typography variant="h6" className={classes.title}>
                Dashboard
              </Typography>
              <Typography variant="h5">
                {
                  "Check the amount of your crops, the orders your need to complete, your earnings "
                }
                {"interactive graphs for better understanding."}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={productValues3} alt="clock" />
              <Typography variant="h6" className={classes.title}>
                Delivery System
              </Typography>
              <Typography variant="h5">
                {
                  "Our delivery system helps you deliver your crops and complete your orders without any effort. "
                }
                {"Just sit tight at home and dont worry about anything."}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductValues);
