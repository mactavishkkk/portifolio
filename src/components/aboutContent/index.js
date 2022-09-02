import React, { Fragment } from "react";
import "../styles/index.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const AboutContent = () => {
    return (
        <Fragment>
            <section>
                <div>
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu01" src="/img/bambu.png" alt="Cartoon de um bambu com algumas folhas na lateral esquerda da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu02" src="/img/bambu.png" alt="Cartoon de um bambu com algumas folhas na lateral esquerda da página" />
                </div>
                <div className="flex justify-end">
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu01" src="/img/bambu-right.png" alt="Cartoon de um bambu com algumas folhas na lateral da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu02" src="/img/bambu-right.png" alt="Cartoon de um bambu com algumas folhas na lateral da página" />
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="flex justify-center widthComponent" data-aos="fade-up" data-aos-duration="1000">
                        <img className="w-96" src="/img/title-about-me.png" alt="Título da seção com a imagem de um pergaminho oriental no centro da página" />
                    </div>
                    <div className="2xl:mx-[0px] xl:mx-[0px] md:mx-[-120px] sm:mx-[-150px] marginComponent" data-aos="fade-in" data-aos-duration="2500" data-aos-delay="200">
                        <p className="text-center lg:text-sm md:text-xs sm:text-xs font-mono ... subpixel-antialiased ... mb-3 shadow-lg text-justify">
                            Formado no nível técnico em tecnologia da informação, após mais ou menos 1 ano de experiência na área de suporte e infraestrutura foi quando descobrir o incrivel mundo do desenvolvimento. Desde então essa paixão foi se 'desenvolvendo' e foi ai que decidir migrar.
                            Atualmente com 8 meses de experiência em algumas tecnologias de base, pude trabalhar em atividades e projetos que envolveram a tecnologia, a pesquisa e a ciência, afim de conseguir minha primeira oportunidade na área venho me desenvolvendo em tecnologias JavaScript como: React, NodeJS e junto a isso alguns banco de dados SQL.
                        </p>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default AboutContent;