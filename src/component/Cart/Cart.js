import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const userIcon = <FontAwesomeIcon icon={faUsers}/>

    const { cart } = props
    console.log(props);
    let castingPrice = 0;
    for(const actor of cart){
        castingPrice= castingPrice + actor.CastingCost;
    }
    return (
        <div className="border me-2 ms-3 p-2 shadow-sm rounded text-center">
            <h2 className="cart-title">{userIcon} Added Actors : {cart.length}</h2>
            <h3>Total Cost : ${castingPrice}</h3>
            <hr/>
            <div className="name-title">
                {
                    cart.map(actor => <h4 key={actor.key}>{actor.name}</h4>)
                }
            </div>
           
            <button className="btn btn-dark px-5 fw-bold">Confirm</button>

        </div>
    );
};

export default Cart;