import React, { useContext } from 'react'
import { ProductContext } from '../App';
import Layout from '../components/layout/Layout'

const Card = () => {
  const {state} = useContext(ProductContext);
  return (
 <Layout >
    <div>Card</div>
 </Layout>
  )
}

export default Card