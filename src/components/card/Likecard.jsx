import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { ProductContext } from '../../App'

const LikeCard = ({name, img, desc, price, id}) => {
  const {dispatch}= useContext(ProductContext)
  return (
    <Container className='w-50' >
  <div className='pt-5'>
        <div class="card ">
  <div class="row ">
    <div class="col-md-4">
      <img src={img} class=" rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{desc}</p>
        <h5>{ price }₽</h5>
        <button className='btn btn-danger'onClick={()=>dispatch({type:"delete",id})}>Delet</button>
      </div>
    </div>
  </div>
</div>
  </div>
    </Container>
  )
}

export default LikeCard