import React from 'react';
import style from './home.module.css';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.titleContainer}> 
      <p>Expan your <br />
        <b> business</b> </p>
      <p>With the best <br />
        <b>online presence </b></p>
        </div>
      <div className={style.ctaContainer}>
        <Link
          to="Contacto"
          smooth duration={500}className={style.callToAction} >Get in Touch</Link>
        <Link
          to="Contacto"
          smooth duration={500}className={style.callToAction}>Get a Quote</Link>
      </div>
    </div>

  )
}

export default Home;