import React from 'react';
import'bootstrap'
import Navi1 from './Navi1';
import CategoryList from './CategoryList';
import Videos from './Videos';
import {
  Col, 
  Container,
  Row,
  
} from 'reactstrap';


function App() {
  return (
    <div>
      <Container>
          <Navi1/>
        <Row>
          <Col xs="3">  
            <CategoryList title="Category List"/>
          </Col>
          <Col xs="9">  
            <Videos title="Videos"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
