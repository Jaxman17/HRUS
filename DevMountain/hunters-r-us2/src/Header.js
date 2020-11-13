import React from "react";
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom"
import  { useStateValue }  from "./StateProvider"
import { auth } from "./firebase";

function Header() {
    const [{ cart, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
        <Link to="/">
        
      <img
        className="header-logo"
        src="https://p.kindpng.com/picc/s/128-1284706_thumb-image-monster-hunter-world-logo-hd-png.png"
      />
        </Link>
      <div className="header-search">
        <input className="searchIn" type="text" />
        <SearchIcon className="header-searchicon"/>
      </div>
      <div className="header-nav">
        <Link to={!user && '/login'}>
        
        <div onClick={handleAuthentication}className="header-option">
          <span className="header-option1">Hello {!user ? 'Guest' : user.email}</span>
          <span className="header-option2">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        
        </Link>
        <div className="header-option">
          <span className="header-option1">Part</span>
          <span className="header-option2">Orders</span>
        </div>
        <Link to="/checkout">
        
        <div className="header-optionCart">
          <ShoppingBasketIcon className="basket-icon"/>
            <span className="cartcount">{cart?.length}</span>
        </div>
        
        </Link>
      </div>
    </div>
  );
}

export default Header;
