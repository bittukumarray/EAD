import React, { useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { getCrop, addToCart } from "../../actions/crops";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShopIcon from "@material-ui/icons/Shop";
import { red } from "@material-ui/core/colors";
import FarmerSuggestionList from "./farmerSuggestion";
import SuggestionList from "./suggestion";
import Input from "@material-ui/core/Input";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStylesSelect = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  inline: {
    display: "inline"
  },
  list: {
    backgroundColor: theme.palette.background.paper,
    height: 200,
    width: 200
  }
}));

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100,
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const useStylesCard = makeStyles(theme => ({
  root: {
    maxWidth: 360
  },
  media: {
    height: 400 // 16:9
  }
}));

const ProductPage = props => {
  const classes = useStyles();
  const classesCard = useStylesCard();
  const selectIn = useStylesSelect();

  useEffect(() => {
    props.getCrop(props.match.params.id);
  }, []);
  console.log("props is in details ", props);

  const onCartAdded = (e, cropData) => {
    props.addToCart(cropData.farmer, cropData._id, cropData.quantity);
  };

  const [quantity, setQuantity] = React.useState(1);

  const [value, setValue] = React.useState(null);
  const handleChange = event => {
    console.log("evet is ", event.target.value);
    setQuantity(event.target.value);
  };

  const [cropsData, setCropsData] = React.useState(null);

  const onGetfarmers = async () => {
    try {
      const data = await axios.get(
        `/api/farmer/suggested-crops-pooling/${props.crop.crop.name}/${props.crop.crop.farmer}/${poolingQuantity}`
      );
      setCropsData(data.data);
      console.log("Data is ", data);
    } catch (e) {
      console.log("error in data is ", e);
      setCropsData(null);
    }
  };

  const [poolingQuantity, setPoolingQuantity] = React.useState(0);
  const [earningPooling, setEarningPooling] = React.useState(0);
  const [poolingprice, setPoolingprice] = React.useState(0);
  const [poolingCropId, setPoolingCropId] = React.useState(null);
  const [poolingFarmerId, setPoolingFarmerId] = React.useState(null);

  const handleChangePooling = event => {
    console.log("evet is ", cropsData.finalcrop[event.target.value]);
    setPoolingprice(cropsData.finalcrop[event.target.value].crops.price);
    setEarningPooling(
      cropsData.finalcrop[event.target.value].crops.price * poolingQuantity
    );
    setPoolingCropId(cropsData.finalcrop[event.target.value].crops._id);
    setPoolingFarmerId(cropsData.finalcrop[event.target.value].crops.farmer);
    setValue(event.target.value);
  };

  const PoolingQuantityHandle = e => {
    if (e.target.value >= 0) {
      setEarningPooling(poolingprice * poolingQuantity);
      setPoolingQuantity(parseInt(e.target.value));
    }
  };

  return (
    <Fragment>
      <div
        className="card"
        style={{
          backgroundColor: "#eeeeee",
          color: "black",
          fontFamily: "garamond",
          fontWeight: "bolder",
          fontSize: "60px"
        }}
        className=" card h1-responsive font-weight-bolder text-center my-5"
      >
        Product Details
      </div>
      <Container>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={5}>
              <Card className={classesCard.root}>
                {props.crop ? (
                  <CardMedia
                    component="img"
                    alt="No Image"
                    className={classesCard.media}
                    image={props.crop.crop.img}
                    title={props.crop.crop.name}
                  ></CardMedia>
                ) : null}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {props.crop.crop.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {props.crop.crop.details}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="h3"
                  style={{ fontWeight: "bold" }}
                >
                  Selling By{" "}
                  <i style={{ color: "rgba(234, 111,123)" }}>
                    {props.crop.crop.farmer_name}
                  </i>
                  .
                </Typography>
              </div>
              <hr></hr>
              <div>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="h3"
                  style={{ fontWeight: "bold" }}
                >
                  It will be taken from{" "}
                  <i style={{ color: "rgba(234, 111,123)" }}>
                    {props.crop.crop.city}
                  </i>
                  . We have{" "}
                  <i style={{ color: "rgba(234, 111,123)" }}>
                    {props.crop.crop.quantity}
                  </i>{" "}
                  kg of this item left in our stock currently.
                </Typography>
              </div>
              <hr></hr>
              <div>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ color: "rgba(234, 111,123)" }}
                >
                  <i style={{ color: "rgba(23, 23,23, 0.8)", marginRight: 10 }}>
                    Price{" "}
                  </i>{" "}
                  Rs. {props.crop.crop.price}/kg.
                </Typography>
                {/* <Button>

                            </Button> */}
              </div>
              <hr></hr>
              <div>
                <Button
                  onClick={e => {
                    onCartAdded(e, props.crop.crop);
                  }}
                  disabled={
                    props.cartAddedData
                      ? props.cartAddedData.status == 1
                        ? true
                        : false
                      : false
                  }
                >
                  <i
                    style={{ color: "rgba(240, 111,123)" }}
                    class="fas fa-shopping-cart mr-3"
                  ></i>
                  Add To Cart
                </Button>
              </div>
              <hr></hr>
              <FormControl className={selectIn.formControl}>
                <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={quantity}
                  onChange={handleChange}
                >
                  {[...Array(props.crop.crop.quantity)].map((e, i) => {
                    return (
                      <MenuItem key={i} value={i + 1}>
                        {i + 1}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <hr></hr>
              <h3>Pooling Option</h3>
              <hr></hr>
              <p>Enter quantity for pooling</p>
              <Input
                onChange={PoolingQuantityHandle}
                value={poolingQuantity}
                placeholder="Quanity for pooling"
                type="number"
              />
              <hr></hr>
              <Button
                variant="contained"
                onClick={onGetfarmers}
                color="secondary"
              >
                Get Farmers
              </Button>
              <hr></hr>
              <FormControl className={selectIn.formControl}>
                <InputLabel id="demo-simple-select-label">Farmer</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={value}
                  onChange={handleChangePooling}
                >
                  {cropsData
                    ? cropsData.finalcrop.map((element, index) => {
                        return (
                          <ListItem
                            key={index}
                            name={element}
                            value={index}
                            alignItems="flex-start"
                            className={classes.list}
                          >
                            <ListItemAvatar>
                              <Avatar
                                alt="No Image"
                                src={element.farmer.avatar}
                              />
                            </ListItemAvatar>
                            <ListItemText
                              primary={element.farmer.name}
                              secondary={
                                <React.Fragment>
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                  >
                                    {element.crops.city}
                                  </Typography>
                                  <Typography>
                                    He has total of{" "}
                                    <span
                                      style={{ color: "rgba(200,20,20,0.8)" }}
                                    >
                                      {element.crops.quantity}{" "}
                                    </span>{" "}
                                    kg{" "}
                                    <span
                                      style={{ color: "rgba(200,20,20,0.8)" }}
                                    >
                                      {element.crops.name}{" "}
                                    </span>{" "}
                                    and total{" "}
                                    <span
                                      style={{ color: "rgba(200,20,20,0.8)" }}
                                    >
                                      {element.farmer.totalOrders}{" "}
                                    </span>{" "}
                                    Customers have bought from him and He is
                                    selling at{" "}
                                    <span
                                      style={{ color: "rgba(200,20,20,0.8)" }}
                                    >
                                      {element.crops.price} per kg.
                                    </span>{" "}
                                  </Typography>
                                </React.Fragment>
                              }
                            />
                          </ListItem>
                        );
                      })
                    : null}
                </Select>
              </FormControl>
              <hr></hr>
              <div>
                <Button>
                  <ShopIcon
                    style={{ paddingRight: 15, color: red[500], fontSize: 40 }}
                  ></ShopIcon>
                  <Link
                    to={{
                      pathname: "/payment",
                      checkoutList: [
                        {
                          name: "Orange",
                          value: quantity * props.crop.crop.price
                        }
                      ],
                      total: quantity * props.crop.crop.price + earningPooling,
                      earning: {
                        earning1: quantity * props.crop.crop.price,
                        earning2: earningPooling
                      },
                      isCheckout: true,
                      checkoutList: [
                        {
                          name: props.crop.crop.name,
                          value:
                            quantity * props.crop.crop.price + earningPooling
                        }
                      ],
                      quantity: {
                        quantity1: quantity,
                        quantity2: poolingQuantity
                      },
                      farmerId: {
                        farmerId1: props.crop.crop.farmer,
                        farmerId2: poolingFarmerId
                      },
                      cropId: {
                        cropId1: props.crop.crop._id,
                        cropId2: poolingCropId
                      }
                    }}
                  >
                    Buy Now
                  </Link>
                </Button>
              </div>
              <hr></hr>
            </Grid>
            {props.crop.crop ? (
              <Grid item xs={12} sm={3}>
                <div>
                  <h3
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "rgba(200,10,20,0.8)"
                    }}
                  >
                    Suggested crops
                  </h3>
                </div>
                <SuggestionList
                  farmerId={props.crop.crop.farmer}
                ></SuggestionList>
              </Grid>
            ) : null}
          </Grid>
          <Grid container spacing={3}>
            {props.crop.crop ? (
              <Grid item xs={12} sm={12}>
                <div
                  className="card"
                  style={{
                    backgroundColor: "#eeeeee",
                    color: "#DE213D ",
                    fontFamily: "garamond",
                    fontWeight: "bolder",
                    fontSize: "60px"
                  }}
                  className=" card h1-responsive font-weight-bolder text-center my-5"
                >
                  Suggested Farmers
                </div>
                <FarmerSuggestionList
                  cropName={props.crop.crop.name}
                  farmerId={props.crop.crop.farmer}
                ></FarmerSuggestionList>
              </Grid>
            ) : null}
          </Grid>
        </div>
      </Container>
    </Fragment>
  );
};

ProductPage.propTypes = {
  getCrop: PropTypes.func.isRequired,
  crop: PropTypes.object.isRequired,
  cartAddedData: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  crop: state.crop,
  user: state.auth.user,
  cartAddedData: state.crop.addCartData
});

export default connect(mapStateToProps, { getCrop, addToCart })(ProductPage);
