import React from 'react';
import "../assets/style/components/period.scss"

import CardTime from './items/CardTime';
import CardTimeSpecial from './items/CardTimeSpecial';

const Period = () =>{
    return(
        <>
        <section className="period">
            <div className="period__container">
                <CardTime number="20 - 22" item="September" desc="3 days of intense practice"/>
                <CardTime number="24" item="Hours" desc="10:00 AM - 6:00 PM"/>
                <CardTime number="20" item="Seats" desc="Limited number of seats"/>
                <CardTimeSpecial number="$245" item="Price" desc="Best offer"/>
            </div>
        </section>
        </>
    )
}

export default Period