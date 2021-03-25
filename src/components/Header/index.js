import React from 'react';
import './style.css'
import 'aos/dist/aos.css'
import Aos from 'aos';
import decor from './img/img-header.svg'


Aos.init( {
    duration: 2000
}
    
);

function Header() {
    return (
        <header>
            <nav className="nav">
                
                <a href="">Home</a>
                <a href="">Documentation</a>
                <a href="">Versions</a>
                <a href="">React.Js</a>
                <a href="">Plans</a>
                <a href="">Support</a>
                <a href="">Sign Up</a>
            </nav>

            <section className="title-hero">
                <img src={decor} className="decor"/>
                <section className="img-container">
                   <div className="img"></div>
                </section>

                <div className="title" data-aos="fade-left">
                    <h1>REACT PURPLE</h1>
                    <p>Expanda sua experiência react com todos os benefícios de ter uma plataforma 100% feita para desenvolvimento</p>
                    <button>Start</button>
                </div>
            </section>

            
        </header>
    );
}

export default Header;