import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineShopping,
} from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';
import { FaBars } from 'react-icons/fa';
import { Badge } from '@material-ui/core';
import logo from '../images/logo_alika.png';
import '../styles/Navbar.css';
import AppContext from '../../context/AppContext';

const Navbar = ({ toggleSidebar, toggleSearch }) => {
  const { state } = useContext(AppContext);
  const [navbar, setNavbar] = useState(false);
  const { cart } = state;

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  return (
    <div>
      <nav className={navbar ? 'Navbar active' : 'Navbar'}>
        <div className="Navbar_container2">
          <div className="Bars" onClick={toggleSidebar}>
            <FaBars size="1.6rem" />
          </div>
          <div className="Nav_img2">
            <Link to="/">
              <img src={logo} alt="logoAlika" className="logo2" />
            </Link>
          </div>
          <div className="Navbar_content2">
            <Link to="/checkout" className="Nav_Item">
              <Badge>
                <AiOutlineShopping size="2rem" />
                {cart.length > 0 && (
                  <div className="Header Alert">{cart.length} </div>
                )}
              </Badge>
            </Link>

            <div className="Nav_Item" onClick={toggleSearch}>
              <AiOutlineSearch size="2rem" />
            </div>
            <Link to="/login" className="Nav_Item">
              <AiOutlineUser size="2rem" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
