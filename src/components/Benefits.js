import React from 'react';
import "../assets/style/components/benefit.scss";

const Benefits = () =>{
    return(
        <>
        <section className="benefits">
            <div className="benefits__container">
                <h2 className="benefits__container-title">Who will benefit</h2>
                <div className="benefits__container-article">
                    <article className="benefits__article">
                        <div className="benefits__article-img"></div>
                        <p className="benefits__article-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel culpa</p>
                    </article>
                    <article className="benefits__article">
                        <div className="benefits__article-img"></div>
                        <p className="benefits__article-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel culpa</p>
                    </article>
                    <article className="benefits__article">
                        <div className="benefits__article-img"></div>
                        <p className="benefits__article-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel culpa</p>
                    </article>
                </div>
            </div>
        </section>
        </>
    )
}

export default Benefits