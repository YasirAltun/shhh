import React from 'react';
import'bootstrap'
import Navi1 from './components/navbar/Navi1';
import Navi2 from './components/navbar/Navi2';
import './App.css'

import CategoryList from './components/CategoriList/CategoryList';
import Videos from './components/Videos/Videos';
import {
  Col, 
  Row,
  
} from 'reactstrap';
import arkaPlan from './images/pieces-blue-stationery.jpg'

function App() {
  return (
    <section className='arkaPlan'>
      
      <div className='heros'>
        <Row>
          <Col> 
          <Navi1/>


          </Col>
          
        </Row>
      </div>
      <div className='shhh-container'  >
        <Row>
          <Col xs="2">  
            <CategoryList title="Category List"/>
          </Col>
          <Col xs="10">  
            <Videos title="Videos"/>
          </Col>
        </Row>
      </div>
    </section>
    
  );
}

export default App;
