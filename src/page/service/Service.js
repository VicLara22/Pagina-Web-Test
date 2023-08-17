import React from 'react';
import img from '../../assets/net.png';
import style from './service.module.css';

const Service = () => {
  return (
    <div className={style.service}>
      <p>We solve your company's problems by creating amazing web pages.</p>
      <img src={img} alt='img net' className={style.img}/>
    </div>
  )
}

export default Service