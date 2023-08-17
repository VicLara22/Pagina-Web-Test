import React from 'react';
import style from './step.module.css';

const Step = ({ text, step }) => {
    return (
        <div className={style.container}>
            <div className={style.stepContainer}>
                <p className={style.stepOne}>{step}</p>
                <p className={style.text}> {text}</p>
            </div>
            <div className={style.border}></div>

        </div>
    )
}

export default Step;