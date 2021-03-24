import React from 'react'
import './style.css'
import 'aos/dist/aos.css'
import Aos from 'aos'
import valor from './img/valor.svg';
import ideia from './img/ideia.svg';
import negociação from './img/negociação.svg';
import estrategia from  './img/estratégia.svg';
import equipe from './img/equipe.svg';
import competição from './img/competição.svg';
import att from './img/att.svg'

function Features(){
    return(

        <section className="feature-div">
           
            <div className="feature-title">
            <h3>Best Features</h3>
            <p>Most advantage plans and that other stuff you hear around</p>
            </div>
        <div className="feature-grid">
            <div className="features-1 default-visual" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <img src={valor}/>
                <h3>Reaproveitamento</h3>
                <p>Código reaproveitável com refatoração</p>
            </div>

             <div className="features-2 default-visual" data-aos="fade-up" data-aos-duration="1400" data-aos-easing="ease-in-out">
                <img src={ideia}/>
                <h3>Custo benefício</h3>
                <p>O melhor do mercado e você pode pesquisar</p>
            </div>

            <div className="features-3 default-visual" data-aos="fade-up" data-aos-duration="1900" data-aos-easing="ease-in-out">
                <img src={negociação}/>
                <h3>Reconhecimento</h3>
                <p>O mais popular e comum</p>
            </div>

            <div className="features-4 default-visual" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <img src={estrategia}/>
                <h3>Estratégia</h3>
                <p>Código simples, pensando na venda do produto</p>
            </div>

            <div className="features-5 default-visual" data-aos="fade-up" data-aos-duration="1400" data-aos-easing="ease-in-out">
                <img src={equipe}/>
                <h3>Trabalho em equipe</h3>
                <p>Framework de fácil utilização no cotidiano</p>
            </div>

            <div className="features-6 default-visual" data-aos="fade-up" data-aos-duration="1900" data-aos-easing="ease-in-out">
                <img src={competição}/>
                <h3>Concorrência</h3>
                <p>Somos o primeiro e é só isso que você precisa saber</p>
            </div>
        </div>
        </section>
    )
}

export default Features