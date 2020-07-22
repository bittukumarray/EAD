import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { getCrop, addToCart } from "../../actions/crops";
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShopIcon from '@material-ui/icons/Shop';
import { red } from '@material-ui/core/colors';
import FarmerSuggestionList from "./farmerSuggestion";
import SuggestionList from "./suggestion";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 100,
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const useStylesCard = makeStyles((theme) => ({
    root: {
        maxWidth: 360,
    },
    media: {
        height: 400, // 16:9
    },
}));

const ProductPage = (props) => {
    const classes = useStyles();
    const classesCard = useStylesCard();

    useEffect(() => {
        props.getCrop(props.match.params.id);
    }, []);
    console.log("props is ", props);

    const onCartAdded = (e, cropData) => {
        props.addToCart(cropData.farmer, cropData._id, cropData.quantity);
    }


    return (
        <Container>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={5}>
                        <Card className={classesCard.root}>
                            {props.crop ? <CardMedia
                                component="img"
                                alt="No Image"
                                className={classesCard.media}
                                image={props.crop.crop.img}
                                title={props.crop.crop.name}
                            >

                            </CardMedia> : null}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.crop.crop.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {props.crop.crop.details}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <div>
                            <Typography variant="body2" color="textSecondary" component="h3" style={{ fontWeight: "bold" }}>
                                Selling By <i style={{ color: "rgba(234, 111,123)" }}>{props.crop.crop.farmer_name}</i>.
                            </Typography>


                        </div>
                        <hr></hr>
                        <div>
                            <Typography variant="body2" color="textSecondary" component="h3" style={{ fontWeight: "bold" }}>
                                It will be taken from <i style={{ color: "rgba(234, 111,123)" }}>{props.crop.crop.city}</i>. We have <i style={{ color: "rgba(234, 111,123)" }}>{props.crop.crop.quantity}</i> kg of this item left in our stock currently.
                            </Typography>


                        </div>
                        <hr></hr>
                        <div>
                            <Typography variant="body2" color="textSecondary" component="p" style={{ color: "rgba(234, 111,123)" }}>
                                <i style={{ color: "rgba(23, 23,23, 0.8)", marginRight: 10 }}>Price  </i>   Rs. {props.crop.crop.price}/kg.
                            </Typography>
                            {/* <Button>

                            </Button> */}

                        </div>
                        <hr></hr>
                        <div>
                            <Button onClick={(e) => { onCartAdded(e, props.crop.crop) }} disabled={props.cartAddedData ? props.cartAddedData.status == 1 ? true : false : false}>
                                <i
                                    style={{ color: "rgba(240, 111,123)" }}
                                    class="fas fa-shopping-cart mr-3"
                                ></i>
                               Add To Cart
                           </Button>

                        </div>
                        <hr></hr>
                        <div>
                            <Button>
                                <ShopIcon style={{ paddingRight: 15, color: red[500], fontSize: 40 }}></ShopIcon>
                                Buy Now
                           </Button>

                        </div>
                        <hr></hr>

                    </Grid>
                    {props.crop.crop ? <Grid item xs={12} sm={3} >
                        <div>
                            <h3 style={{ fontWeight: "bold", textAlign:"center", color:"rgba(200,10,20,0.8)" }}>
                                Suggested crops
                            </h3>
                        </div>
                        <SuggestionList farmerId={props.crop.crop.farmer}></SuggestionList>
                    </Grid> : null}
                </Grid>
                <Grid>
                    {props.crop.crop ? <Grid item xs={12} sm={12} >
                        <div>
                            <h3 style={{ fontWeight: "bold", marginTop:20, textAlign:"center", color:"rgba(200,10,20,0.8)" }}>
                                Suggested Farmers
                            </h3>
                        </div>
                        <FarmerSuggestionList farmerId={props.crop.crop.farmer}></FarmerSuggestionList>
                    </Grid> : null}

                </Grid>
            </div>
        </Container>
    );
}


ProductPage.propTypes = {
    getCrop: PropTypes.func.isRequired,
    crop: PropTypes.object.isRequired,
    cartAddedData: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    crop: state.crop,
    user: state.auth.user,
    cartAddedData: state.crop.addCartData

});

export default connect(mapStateToProps, { getCrop, addToCart })(ProductPage);