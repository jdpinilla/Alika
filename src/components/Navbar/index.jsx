import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';
import { FaBars } from 'react-icons/fa';
import { Badge } from '@material-ui/core';
import logo from '../images/logo_alika.png';
import '../styles/Navbar.css';
import AppContext from '../../context/AppContext';

const Navbar = ({ toggle }) => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <nav className="Navbar">
      <div className="Navbar_container">
        <div className="Nav_img">
          <Link to="/">
            <img src={logo} alt="logoAlika" className="logo" />
          </Link>
        </div>

        <div className="Mobile" onClick={toggle}>
          <FaBars />
        </div>
        <div className="Navbar_content">
          <Link to="/" className="Nav_Item">
            Home
          </Link>

          <Link to="/" className="Nav_Item">
            About
          </Link>

          <Link to="/shop" className="Nav_Item">
            Shop
          </Link>

          <Link to="/checkout" className="Nav_Item">
            <Badge>
              <HiShoppingCart size="1.5rem" />
              {cart.length > 0 && (
                <div className="Header Alert">{cart.length} </div>
              )}
            </Badge>
          </Link>

          <Link to="/login" className="Nav_Item">
            <AiOutlineUser size="1.5rem" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
