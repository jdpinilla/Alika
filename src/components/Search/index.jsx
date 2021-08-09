import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import AppContext from '../../context/AppContext';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import {
  SearchElement,
  Search_Bar,
  Search_Bar_Input,
  Search_Form,
  Search_Header,
  Search_Index,
  Search_Products,
  Search_Results,
  Search_Button,
  Search_Products_Container,
  Search_Products_Img,
  Search_Product_Link,
  Search_Products_Text,
  Search_Product_P,
} from './SearchElements';
import '../styles/Search.css';
const Search = ({ isOpen, toggle }) => {
  const { state } = useContext(AppContext);
  const { products } = state;
  const [filtros, setFiltros] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    filter(e.target.value);
  };

  const filter = (search) => {
    var searchResult = products.filter((item) => {
      if (
        item.name.toString().toLowerCase().includes(search.toLowerCase()) ||
        item.categories.find((itemC) =>
          itemC.toString().toLowerCase().includes(search.toLowerCase())
        )
      ) {
        return item;
      }
    });
    setFiltros(searchResult);
    if (search === '') {
      setFiltros([]);
    }
  };

  return ReactDOM.createPortal(
    <div>
      <SearchElement isOpen={isOpen}>
        <Search_Index isOpen={isOpen}>
          <Search_Form>
            <Search_Bar>
              <AiOutlineSearch />
              <Search_Bar_Input
                type="search"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
                size={'100'}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                autoFocus
              />
              <AiOutlineClose size="25px" onClick={toggle} cursor="pointer" />
            </Search_Bar>
          </Search_Form>
          <Search_Results>
            <Search_Header>
              <span>
                {filtros.length} {}RESULTADOS
              </span>
              <Search_Button type="button">VIEW ALL</Search_Button>
            </Search_Header>
            <Search_Products>
              {filtros.map(
                (product, index) =>
                  index < 3 && (
                    <Search_Product_Link to={`/shop/${product.id}`}>
                      <Search_Products_Container>
                        <Search_Products_Img
                          src={product.image}
                          alt={product.name}
                        />
                        <Search_Products_Text>
                          <Search_Product_P>{product.name}</Search_Product_P>
                          <Search_Product_P>
                            {product.priceCOP}
                          </Search_Product_P>
                        </Search_Products_Text>
                      </Search_Products_Container>
                    </Search_Product_Link>
                  )
              )}
            </Search_Products>
          </Search_Results>
        </Search_Index>
      </SearchElement>
    </div>,
    document.getElementById('modal')
  );
};

export default Search;
