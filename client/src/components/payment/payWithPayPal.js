import React, { useState, useEffect, useRef } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

function PayWithPayPal (props) {
    const { items, total } = props
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
                                value: 10.00,
                            }
                        }]
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    setPaidFor(true);
                    console.log('ORDER', order);
                    alert('sucessful order is done call api from backend')

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
    console.log("payment",items)
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