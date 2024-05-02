import React, { Component } from "react";
import './Videos.css'
import { Card } from "./Card";
import YoutubeEmbed from "./YoutubeEmbed";











export default class Videos extends Component {
  render() {
    return (
      <div>
        <h3 className="ttl1">Videos</h3>
        <div class="container">
            
        <Card
          imgSrc="http://i3.ytimg.com/vi/Ar4SNZY3dmo/hqdefault.jpg"
          imgAlt="Card image"
          title="Python-1"
          description="Python Giriş Dersi 1"
          buttonText="İZLE"
          link=<YoutubeEmbed embedId=""></YoutubeEmbed>
         
        />

        <Card
          imgSrc="https://picsum.photos/100"
          imgAlt="Card image"
          title="video başlığı"
          description="video açıklaması"
          buttonText="İZLE"
          link="/Cardimported/"
        />

        <Card
          imgSrc="https://picsum.photos/100"
          imgAlt="Card image"
          title="video başlığı"
          description="video açıklaması"
          buttonText="İZLE"
          link="/Cardimported/"
        />
        <Card
          imgSrc="https://picsum.photos/100"
          imgAlt="Card image"
          title="video başlığı"
          description="video açıklaması"
          buttonText="İZLE"
          link="/Cardimported/"
        />
        <Card
        imgSrc="https://picsum.photos/100"
        imgAlt="Card image"
        title="video başlığı"
        description="video açıklaması"
        buttonText="İZLE"
        link="/Cardimported/"
      />
            

        </div>

      {/*
        <div class="container">
          
        <Card
          imgSrc="https://picsum.photos/100"
          imgAlt="Card image"
          title="video başlığı"
          description="video açıklaması"
          buttonText="İZLE"
          link="/Cardimported/"
        />
          
          <Card
          imgSrc="https://picsum.photos/100"
          imgAlt="Card image"
          title="video başlığı"
          description="video açıklaması"
          buttonText="İZLE"
          link="/Cardimported/"
        />
        <Card
          imgSrc="https://picsum.photos/100"
          imgAlt="Card image"
          title="video başlığı"
          description="video açıklaması"
          buttonText="İZLE"
          link="/Cardimported/"
        />
          
          <div class="card-container">
              <img  src='https://picsum.photos/100' alt="card image" className="card-img" />
              <p className="card-description">Vİdeo Açıklaması</p>
              <a href="/VideoLİNK/" className="card-btn">İzle</a>
            </div>  
                  
          </div>
           */}
      </div>
    );
  }
}