import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import AppContext from '../../context/AppContext';
import { AiOutlineSearch } from 'react-icons/ai';
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
      if (item.name.toString().toLowerCase().includes(search.toLowerCase())) {
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
      <div className="Search">
        <div className="Search_index">
          <form action="">
            <div className="Search_bar">
              <AiOutlineSearch size="30px" />
              <input
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
            </div>
          </form>
          <div className="Search_results">
            <div className="Search_header">
              Total Products: {filtros.length}
            </div>
            <div className="Search_results">
              {filtros.map(
                (product, index) =>
                  index < 3 && (
                    <div>
                      <img src={product.image} alt={product.name} width={20} />
                      <p>{product.name}</p>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Search;
