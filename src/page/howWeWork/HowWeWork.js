import React from 'react';
import style from './howWeWork.module.css'
import Step from '../../components/Step';

const HowWeWork = () => {

  const steps=[
    {
      id:1,
      text: " You tell us your proposal."
    },
    {
      id:2,
      text: " We design your site and do a review."
    },
    {
      id:3,
      text: " We developr your website."
    },
    {
      id:4,
      text: " We developr your website."
    },
    {
      id:5,
      text: " You enjoy all the benefits of having o website for you company."
    }
  ]
  return (
    <div className={style.howWeWork}>
      <h2>How We Work</h2> 
      { steps.map((s) => ( 
        <Step text={s.text} step={s.id}/>
      )) }
    
    </div>
  )
}

export default HowWeWork