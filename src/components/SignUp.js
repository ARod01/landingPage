import React from 'react';
import Image1 from "../assets/image/Iphone.png";
import Image2 from "../assets/image/Mobile.png";

import "../assets/style/components/signup.scss"


const SignUp = () =>{
    return(
        <>
        <section className="signup">
            <div className="signup__blue">
                <div className="signup__blue-img">
                    <img src={Image1} alt="cell-phone1"/>
                </div>
                <div className="signup__blue-text">
                    <h2>Sign up for the course now</h2>
                    <p>and get a PDF course report & certificate via email</p>
                    <button>Register</button>
                </div>
                <div className="signup__blue-img">
                    <img src={Image2} alt="cell-phone2"/>
                </div>
            </div>
            <div className="signup__white">
            </div>
        </section>
        </>
    )
}

export default SignUp