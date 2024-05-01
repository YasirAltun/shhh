import React, { Component } from 'react'
import './Navi2.css'


export default class Navi2 extends Component {

  render() {
    return (
      <div class=".ttl2" id="navbar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href='#login' class="split">Login</a>
      </div>
    );
  }
}
