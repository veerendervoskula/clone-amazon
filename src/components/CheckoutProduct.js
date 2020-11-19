import React from 'react';
import ActionTypes from '../context/ActionTypes';
import { useStateValue } from '../context/StateProvider';
import ReactStars from "react-rating-stars-component";
import './CheckoutProduct.css';

function CheckoutProduct(props) {
    const { id, price, title, image, rating } = props.item;
    const [{ basket }, dispatch] = useStateValue();

    const removeFromCart = (e) => {
        e.preventDefault();
        dispatch({
            type: ActionTypes.REMOVE_FROM_CART,
            id: props.item.id
        });
    }

    return (
        <div className="checkoutProduct">
            <div>
                <img className="checkoutProduct__img" src={image} alt="" />
            </div>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <span>$<strong>{price}</strong></span>
                <div className="checkoutProduct__rating">
                    <ReactStars value={rating} edit={false} color={"grey"} activeColor={"#f0c14b"} a11y isHalf />
                </div>
                <button onClick={removeFromCart} className="checkoutProduct__cta">Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
