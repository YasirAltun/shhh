import React from 'react';
import'bootstrap'
import Navi1 from './Navi1';
import CategoryList from './CategoryList';
import Videos from './Videos';
import {Col, Container,Row} from 'reactstrap';


function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi1/>
        </Row>
        <Row>
          <Col xs="3">  
            <CategoryList/>
          </Col>
          <Col xs="9">  
            <Videos/>
          </Col>

          
        </Row>
      </Container>
    </div>
  );
}

export default App;
