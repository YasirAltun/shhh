import React, { Component } from 'react'
import Button from '@mui/material/Button';
import '@mui/material/colors'
import './CategoriList.css'

export default class CategoryList extends Component {
  render() {
    return (
      
      <div >
        <h3 className='.hero'>Category List</h3>
        

        <div className='button'>
        <Button  variant="outlined" href='/Python/'>Python</Button> 
        </div>
        
        <div className='button'>
        <Button variant="outlined" href='/Python/'>Python</Button>
        </div>


        <div className='button'>
        <Button variant="outlined" href='/Python/'>Python</Button>

        </div>
        
        <div className='button'>
        <Button variant="outlined" href='/Python/'>Python</Button>
        </div >

        <div className='button'>
        <Button variant="outlined" href='/Python/'>Python</Button>
        </div>


        <div className='button'>
        <Button variant="outlined" href='/Python/'>Python</Button>
        </div>

      </div>
    )
  }
}
