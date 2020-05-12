import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4)
  },
  images: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexWrap: "wrap"
  },
  imageWrapper: {
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    height: "40vh",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: 100
    },
    "&:hover": {
      zIndex: 1
    },
    "&:hover $imageBackdrop": {
      opacity: 0.15
    },
    "&:hover $imageMarked": {
      opacity: 0
    },
    "&:hover $imageTitle": {
      border: "4px solid currentColor"
    }
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black"
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    color: "#ffffff",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: "#ffffff",
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        "https://images.unsplash.com/photo-1464972377689-e7674c48d806?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1037&q=80",
      title: "Crops",
      width: "40%",
      color: "white"
    },
    {
      url:
        "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      title: "Dashboard",
      width: "20%"
    },
    {
      url:
        "https://images.unsplash.com/photo-1468253926858-331ac6e1e97f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      title: "Catalog",
      width: "40%"
    },
    {
      url:
        "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
      title: "Orders",
      width: "38%"
    },
    {
      url:
        "https://images.unsplash.com/photo-1484759288640-783b22c95d54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      title: "Weather",
      width: "38%"
    },
    {
      url:
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
      title: "Delivery",
      width: "24%"
    },
    {
      url:
        "https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      title: "Information",
      width: "40%"
    },
    {
      url:
        "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      title: "Pages",
      width: "20%"
    },
    {
      url:
        "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80",
      title: "Cart",
      width: "40%"
    }
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography
        variant="h4"
        marked="center"
        align="center"
        component="h2"
        style={{ textDecorationLine: "underline" }}
      >
        Explore
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductCategories);
