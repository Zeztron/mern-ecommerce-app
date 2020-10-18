import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProducts } from '../actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector(state => state.productList);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <Message variant='danger'>{error}</Message>

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {
          products?.map(product => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))
        }
      </Row>
    </>
  );
};

export default HomeScreen;
