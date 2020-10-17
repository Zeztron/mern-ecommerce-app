import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

const HomeScreen = () => {

  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
      const products = await axios.get('/api/products');
      setProducts(products.data);
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

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
