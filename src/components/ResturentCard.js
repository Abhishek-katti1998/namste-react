
import React from 'react';
import {IMG_CDN_URL} from '../config.js';

 function RestrauntCard({name,cuisines,maxDeliveryTime,cloudinaryImageId}){

    return <div className="card">
      <img src={`${IMG_CDN_URL}`+cloudinaryImageId}/>
      <h2>{name}</h2>
      <h3 className="cousins">{cuisines?.join(',')}</h3>
      <h4>{maxDeliveryTime}min</h4>
    </div>

    
  }
export default RestrauntCard;