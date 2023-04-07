import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import like from "../.././assets/imges/MainP/heart.svg"
import { ProductContext } from '../../App';
import"./AllP.scss"


const ProductCard = ({name, img, desc, price, id}) => {
  const {state:{likedProducts}, dispatch,} = useContext(ProductContext);
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      
      <Card.Body>
        <Button onClick={()=>dispatch({type:"add",id})} variant={likedProducts.find((el)=>el.id ===id)?"danger":"secondary"}> <img src={like} alt="" /></Button>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {desc}
        </Card.Text>
        <div className='pr'>
          <Button > Выбрать </Button>
        <p className='rext'>от {price} ₽</p>  
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard