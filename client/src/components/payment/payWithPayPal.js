import React, { useState, useEffect, useRef } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import axios from "axios";

function PayWithPayPal(props) {
    const { items, total, farmerId, cropId, quantity } = props
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const paypalRef = useRef();

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
                        earnings: total,
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
            <div>
                Thanks for making the purchase.
            </div>
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
        <div className="helloo-1">
            <ListGroup>
                {items && items.map((item, index) =>
                    <ListGroupItem key={item.name + item.value}>
                        {item.name} - Rs. {item.value}
                    </ListGroupItem>)}
            </ListGroup>
            <div>Total - Rs. {total}</div>
            <div ref={paypalRef} />
        </div>
    )
}

export default PayWithPayPal