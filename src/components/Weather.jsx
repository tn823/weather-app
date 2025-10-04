import React from 'react'
import './style/index.css'
import search_icon from '../assets/weather-img/Assets/search.png'

const Weather = () => {
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Sear" />
        <img src={search_icon} alt="" />
      </div>
    </div>
  );
}

export default Weather