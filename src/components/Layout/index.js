import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import Search from '../Search';
const index = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [typePrice, setTypePrice] = useState(false);

  const togglePrice = () => {
    setTypePrice(!typePrice);
  };

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };
  const toggleSearch = () => {
    setIsOpenSearch(!isOpenSearch);
  };
  return (
    <>
      <Sidebar isOpen={isOpenSidebar} toggle={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} toggleSearch={toggleSearch} />
      <Search isOpen={isOpenSearch} toggle={toggleSearch} />
      {children}
      <Footer />
    </>
  );
};

export default index;
