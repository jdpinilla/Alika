import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import '../styles/Details.css';
const ProductDetails = () => {
  const { state } = useContext(AppContext);
  const { id } = useParams();
  const { products } = state;
  const product = products.find((item) => item.id === id);
  console.log(product);
  return (
    <div className="ProductDetails">
      <div className="ProductDetails_Content">
        <div className="ProductDetails_image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="ProductDetails_Items">
          <div className="ProductDetails_Header">
            <h2>{product.name.toUpperCase()}</h2>
            <span>${product.priceCOP}</span>
          </div>
          <div className="ProductDetails_Body">
            <div className="ProductDetails_Buttons">
              <button type="button" className="ProductDetails_Buttons_Black">
                AGREGAR AL CARRITO
              </button>
              <button type="button" className="ProductDetails_Buttons_White">
                COMPRAR AHORA
              </button>
            </div>
            <div className="ProductDetails_Text">
              <div className="ProductDetails_Text_Description">
                {product.description}
              </div>
              <div className="ProductDetails_Text_Ingredients">
                <strong>Ingredientes:</strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                error perspiciatis culpa pariatur soluta, ratione, nobis
                explicabo delectus atque voluptatum voluptate dolores. Nisi et
                dicta nesciunt nostrum ab commodi, quas obcaecati nobis.
              </div>
              <div className="ProductDetails_Text_UseMode">
                <strong>Modo de uso:</strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                architecto ab enim veniam totam ea doloremque, quae nihil et
                assumenda suscipit ad eos fuga illum perspiciatis vel pariatur.
                Odit quia exercitationem cum animi accusantium.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
