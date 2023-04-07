
import ProductCard from '../components/card/ProductCard';
import { Product } from '../components/data/Product';
import {Col, Container, Row} from 'react-bootstrap';
import Layout from '../components/layout/Layout';



const HomeP = () => {
  
  return (
    <Layout >
    <Container>
      <Row className='pt-5'>
        {Product.map((el) => (
        <Col key={el.id} md="3" sm="6" className='mb-3'>
        <ProductCard {...el}/>
        </Col>
        ))}

      </Row>

    </Container>
    </Layout>
  );
};

export default HomeP