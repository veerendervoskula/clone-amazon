import React from 'react';
import { useStateValue } from '../context/StateProvider';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';
import './Subtotal.css';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const history = useHistory();
    const proceedToCheckout = (e) => {
        e.preventDefault();
        history.push('/checkout')
    }

    const getBasketTotal = (basket) => {
        return basket.reduce((acc,ele) => acc+ele.price,0)
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={
                    (value) => (
                    <><p>Subtotal ({basket.length} items) : <strong>$ {basket.reduce((acc,ele) => acc+ele.price,0)}</strong></p></>
                    )
                }
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"} thousandSeparator={true} prefix={"$"}
            />
            <button onClick={proceedToCheckout} className="subtotal__cta">Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
