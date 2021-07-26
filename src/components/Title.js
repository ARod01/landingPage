import React from 'react';
import "../assets/style/components/title.scss";

const Title = () =>{
    return(
        <>
        <section className="title">
            <div className="title__text">
                <h2 className="title__text-sec">Dicover new data analytics tools</h2>
                <h1 className="title__text-main">Data science for SEO</h1>
                <p  className="title__text-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, facere.</p>
            </div>
            <div className="title__img">
                <div className="title__img-item"></div>
            </div>
        </section>
        </>
    )
}

export default Title;