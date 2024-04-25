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
        <Row>
          <Col> 
          <Navi1/>
          </Col>
          
        </Row>
      </Container>
      <Container  >
        <Row>
          <Col xs="2">  
            <CategoryList title="Category List"/>
          </Col>
          <Col xs="8">  
            <Videos title="Videos"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
