import React from 'react';
import "../assets/style/components/about.scss";

const About = () =>{
    return(
        <>
        <section className="about">
            <div className="about__container">
                <div className="about__container-schelude">
                    <h2 className="about__container-schelude-item1">24</h2>
                    <p  className="about__container-schelude-item2">Hours</p>
                    <p  className="about__container-schelude-item3">of practice and immersion in data science for CEO specialits</p>
                    <p  className="about__container-schelude-item2">Level</p>
                    <p  className="about__container-schelude-item3">Intermediate</p>
                </div>
                <div className="about__container-description">
                    <h2>About the course</h2>
                    <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur repudiandae eum placeat amet rem iusto voluptatum aspernatur ex. Laborum dolorem rerum pariatur aut earum sit, ipsum placeat consequuntur possimus iusto maiores accusantium quasi eius consectetur eveniet nulla corporis distinctio. Voluptatibus debitis aliquid quae, laborum magni quas dolorum. Eligendi, voluptatum velit?</p>
                    <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur repudiandae eum placeat amet rem iusto voluptatum aspernatur ex. Laborum dolorem rerum pariatur aut earum sit, ipsum placeat consequuntur possimus iusto maiores accusantium quasi eius consectetur eveniet nulla corporis distinctio.</p>
                    <button>BOOK A PLACE</button>
                </div>
                </div>
            </section>
        </>
    )
}

export default About;