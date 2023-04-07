// import React, { useContext } from 'react'
// import { ProductContext } from '../App';
import { useContext } from 'react';
import { ProductContext } from '../App';
import LikeCard from '../components/card/Likecard';
import Layout from '../components/layout/Layout'

const Like = () => {
  const {state:{likedProducts}} = useContext(ProductContext);
  return (
  <Layout>
  {likedProducts.length !== 0 ? likedProducts.map((el) => <LikeCard {...el}/>):"Bosh"};
  </Layout>
  );
};

export default Like