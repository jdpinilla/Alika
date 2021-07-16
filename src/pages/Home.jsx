import React from 'react';
import Collections from '../components/Collections';
import initialState from '../initialState';
const Home = () => {
  console.log(initialState.categories);

  return (
    <>
      <Collections />
    </>
  );
};

export default Home;
