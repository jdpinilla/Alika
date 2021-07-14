import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import '../styles/Footer.css';
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_Content">
        <div className="Footer_Top">
          <h3 className="Title">Alika</h3>
          <div className="Social_Media">
            <div className="Social_Icon">
              <FaFacebook size="25px" />
            </div>
            <div className="Social_Icon">
              <FaInstagram size="25px" />
            </div>
            <div className="Social_Icon">
              <FaWhatsapp size="25px" />
            </div>
            <div className="Social_Icon">
              <AiOutlineMail size="25px" />
            </div>
          </div>
        </div>

        <div className="Footer_Bot">
          <a href="" className="Bot_Item">
            Blog
          </a>
          <a href="" className="Bot_Item">
            Terminos y condiciones
          </a>
          <a href="" className="Bot_Item">
            FAQ
          </a>
          <a href="" className="Bot_Item">
            Payments
          </a>
        </div>
        <nav className="Footer_Nav">
          <ul className="Footer_Nav_List">
            <li className="Footer_Nav_Item">Blog</li>
            <li className="Footer_Nav_Item">Terminos y Condiciones</li>
            <li className="Footer_Nav_Item">FAQ</li>
            <li className="Footer_Nav_Item">Payments</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
