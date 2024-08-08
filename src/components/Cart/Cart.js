import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart
    const total= cart.reduce((total,prd)=>total+prd.price,0)

    let shipping=0;
    if(shipping>35){
        shipping=0
    }
    else if(shipping>15){
        shipping=4.99
    }
    else if(shipping>0){
        shipping=12.99
    }

    const format=num =>{
        const pre=num.toFixed(2)
        return Number(pre)
    }
    const tax=total/10
    const grandTotal=total+shipping+tax
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered{cart.length}</p>
            <p>Product Price: ${format(total)}</p>
            <p>
                <small>Tax + Vat: ${format(tax)}</small>
            </p>
            <p>Shipping Cost: ${shipping}</p>
            <p>Total Price: ${format(grandTotal)}</p>
        </div>
    );
};

export default Cart;