import React, { Component } from 'react'
import Button from '@mui/material/Button';
import '@mui/material/colors'
import './CategoriList.css'



export default class CategoryList extends Component {

  
  render() {
    return (
      
      <div >
        <h3 className='ttl1'>Category List</h3>
          <button className='btn1'  href='/Python/'>Python</button> 
          <button className='btn1'  href='/C#/'>C#</button> 
          <button className='btn1'  href='/C++/'>C++</button> 
          <button className='btn1'  href='/Assembly/'>Assembly</button> 
          <button className='btn1'  href='/Java/'>Java</button> 
          <button className='btn1'  href='/JavaScript/'>JavaScript</button> 
          <button className='btn1'  href='/HTML/'>HTML</button> 

      </div>
    )
  }
}
