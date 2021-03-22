import React from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos';
import './style.css'
import image1 from './img/037-monitor.svg'
import image2 from './img/016-monitor-1.svg'
import image3 from './img/034-headset.svg'




Aos.init({
    duration: 2000
})

function Content() {
    return (
        <div className="container-content">
            <div className="itens" data-aos="fade-up">
                <img src={image1}></img>
                <div className="info">
                    <h3>Networking</h3>
                        <p>Comunidade voltada 100% para a nossa comunidade</p>
                </div>
            </div>

            <div className="itens" data-aos="fade-up">
                <img src={image2}></img>
                <div className="info">
                    <h3>Aprendizado</h3>
                        <p>Código simples e básico, do jeito que você está acostumado</p>
                </div>
            </div>

            <div className="itens" data-aos="fade-up">
                <img src={image3}></img>
                <div className="info">
                    <h3>Informação</h3>
                        <p>Tenha acesso ao banco de áudios do React Purple a hora que quiser</p>
                </div>
            </div>
        </div>
    );   
}

export default Content