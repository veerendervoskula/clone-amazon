import React from 'react'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../context/StateProvider';
import './Header.css'
import { auth } from '../firebase';

function Header(props) {
    const [{ basket, user }] = useStateValue();
    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <div className="header__left-nav">
                <Link to="/">
                    <div className="header__logo-main">
                        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Main Logo" />
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Delievery to</span>
                    <span className="header__optionLineTwo">Global</span>
                </div>
            </div>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link className="header__link" to={!user && "/signin"}>
                    <div className="header__option" onClick={login}>
                        <span className="header__optionLineOne">Hello {user && user.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign out' : 'Sign in'}</span>
                    </div>
                </Link>
                <Link className="header__link" to="/returns-orders">
                    <div className="header__option" >
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link className="header__link" to="/prime">
                    <div className="header__option" >
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                <Link className="header__link" to="/checkout">
                    <div className="header__optionBasket" >
                        <ShoppingBasket />
                        <span className="header__optionLineTwo">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default Header
