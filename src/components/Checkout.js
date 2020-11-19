import React from 'react';
import { useStateValue } from '../context/StateProvider';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <a href="/gp/cobrandcard/marketing.html?pr=oceanthink&amp;inc=oceanthink&amp;ts=e5y73ap4wrx90hzyrm4n6e7709sxhg1&amp;plattr=nomath&amp;place=vc&amp;imp=17c7ab14-74e2-4606-9a67-5f05a228258b" class="click_region">
            </a>
            {!basket?.length ? <div className="checkout__card">
                <h1>Your Amazon Cart is empty.</h1>
                <p>Your shopping basket lives to serve. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.
            Continue shopping on the Amazon homepage, learn about Today's Deals, or visit your Wish List.</p>
            </div> :
                <div className="checkoutProduct__cart">
                    <div className="checkoutProduct__cart-title"><h1>Shopping Cart</h1></div>
                    {/* <div><a className="checkoutProduct__deselect" href="">Deselect all items</a></div> */}
                    {basket.map(item => <CheckoutProduct item={item} />)}
                </div>
            }
            { basket.length > 0 && <Subtotal />}
        </div>
    )
}

export default Checkout
