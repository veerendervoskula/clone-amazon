import React, { useState } from 'react';
import { useStateValue } from '../context/StateProvider';
import ActionTypes from '../context/ActionTypes';
import ReactStars from "react-rating-stars-component";
import './Product.css';

function Product(props) {
    const { id, price, title, image, rating } = props.products;
    const [{ basket }, dispatch] = useStateValue();
    const [isAddedTocart, setAddedToCart] = useState(false);

    const addToCart = (e) => {
        e.preventDefault();
        dispatch({
            type: ActionTypes.ADD_TO_CART,
            item: props.products
        });
        setAddedToCart(true)

    };

    return (
        <div className="product">
            <p>{title}</p>
            <p className="product_price">
                <small>$</small>
                <span className="product_price-format">{price}</span>
            </p>
            <div className="product_rating">
                <ReactStars value={rating} edit={false} color={"grey"} activeColor={"#f0c14b"} a11y isHalf />
            </div>
            <img className="product_image" src={image} alt="hello" />
            <div className="product_align">
                <button className="product_cta" disabled={isAddedTocart} onClick={addToCart}>{isAddedTocart ? 'Added to cart' : 'Add to cart'}</button>
            </div>
        </div >
    )
}

export default Product;
