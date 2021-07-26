import React from 'react';
import "../../assets/style/cardtime.scss"

const CardTime = (props) =>{
    return(
        <>
        <div className="cardTime">
            <h2 className="cardTime__number">{props.number}</h2>
            <h3 className="cardTime__item">{props.item}</h3>
            <p  className="cardTime__desc">{props.desc}</p> 
        </div>
        </>
    )
}

export default CardTime;