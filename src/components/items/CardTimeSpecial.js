import React from 'react';
import "../../assets/style/cardtimespecial.scss"

const CardTimeSpecial = (props) =>{
    return(
        <>
        <div className="cardTimeS">
            <h3 className="cardTimeS__item">{props.item}</h3>
            <h2 className="cardTimeS__number">{props.number}</h2>
            <p  className="cardTimeS__desc">{props.desc}</p> 
        </div>
        </>
    )
}

export default CardTimeSpecial;