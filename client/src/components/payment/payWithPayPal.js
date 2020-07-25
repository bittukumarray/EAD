import React, { useState, useEffect, useRef } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Redirect} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function PayWithPayPal(props) {
    const { items, total, farmerId, cropId, quantity, earning } = props
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const paypalRef = useRef();
    const classes = useStyles();
    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            description: 'Laptop store checkout',
                            amount: {
                                currency_code: 'INR',
                                value: total,
                            }
                        }]
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    setPaidFor(true);
                    console.log('ORDER', order);
                    alert('sucessful order is done call api from backend')
                    let body = {
                        quantity: quantity,
                        earning: earning,
                        farmerId: farmerId,
                        cropId: cropId,
                        role: "genuser"
                    }
                    let header = {
                        headers: {
                            "Content-Type": "application/json",
                            "x-auth-token": localStorage.getItem("token")
                        }
                    }
                    try {
                        let Data = await axios.post("api/farmer/order-successful", body, header);
                        console.log("data is Payment ", Data);
                    } catch (e) {
                        console.log("error is payment ", e);
                    }


                },
                onError: err => {
                    setError(err);
                    console.error('ERROR', err);
                    alert('error occured call another api from backend')

                },
            })
            .render(paypalRef.current);
    }, [items]);

    if (paidFor) {
        return (
            <Redirect to="user-dashboard"></Redirect>
            // <div>
            //     Thanks for making the purchase.
            // </div>
        )
    }

    if (error) {
        return (
            <div>
                Error in processing order. Please Retry again
            </div>
        )
    }
    console.log("payment", items)
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>

            </Grid>
            <Grid item xs={12} sm={5}>
                <Card className={classes.root}>
                    <CardContent>
                        <ListGroup>
                            {items && items.map((item, index) =>
                                <ListGroupItem key={item.name + item.value}>
                                    {item.name} - Rs. {item.value}
                                </ListGroupItem>)}
                        </ListGroup>
                        <ListGroup>
                            <ListGroupItem>
                                Total - Rs. {total}
                            </ListGroupItem>
                        </ListGroup>
                        {/* <div ref={paypalRef} /> */}

                        <ListGroup>
                            <ListGroupItem>
                            <div ref={paypalRef} />
                            </ListGroupItem>
                        </ListGroup>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default PayWithPayPal