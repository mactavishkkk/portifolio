import React, { Fragment } from "react";
import "../styles/index.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const TechnologiesContent = () => {
    return (
        <Fragment>
            <section>
                <div className="">
                    <div className="flex justify-center mb-32 2xl:mb-32 xl:mb-32 lg:mb-3 md:mb-3 widthComponent" id="technologies" data-aos="fade-up" data-aos-duration="1500">
                        <img className="w-96" src="/img/title-technologies.png" alt="Titulo da seção de tecnologias, representado por um pergaminho" />
                    </div>

                    <div className="2xl:mx-[450px] xl:mx-[350px] md:mx-[250px] sm:mx-[-150px] flex justify-around flex-wrap cardsComponent">
                        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="50">
                            <img className="w-20 mx-5 mb-10" src="/icons-img/html5-icon.png" alt="Ícone simbolizando a tecnologia HTML5" />
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="100">
                            <img className="w-20 mx-5 mb-10" src="/icons-img/css3-icon.png" alt="Ícone simbolizando a tecnologia CSS3" />
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="150">
                            <img className="w-20 mx-5 mb-10" src="/icons-img/javascript-icon.png" alt="Ícone simbolizando a tecnologia JavaScript" />
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200">
                            <img className="w-20 mx-5 mb-10" src="/icons-img/typescript-icon.png" alt="Ícone simbolizando a tecnologia TypeScript" />
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="250">
                            <img className="w-20 mx-5 mb-10" src="/icons-img/react-icon.png" alt="Ícone simbolizando a tecnologia React" />
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="300">
                            <img className="w-20 2xl:mx-5 xl:mx-8 mb-10" src="/icons-img/bootstrap-icon.png" alt="Ícone simbolizando a tecnologia Bootstrap" />
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="350">
                            <img className="w-20 2xl:mx-5 xl:mx-8" src="/icons-img/bulma-icon.png" alt="Ícone simbolizando a tecnologia Bulma" />
                        </div>
                        <div className="" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="400">
                            <img className="w-20 2xl:mx-5 xl:mx-8" src="/icons-img/tailwind-icon.png" alt="Ícone simbolizando a tecnologia Tailwind" />
                        </div>
                        <div className="" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="450">
                            <img className="w-20 2xl:mx-5 xl:mx-8" src="/icons-img/php-icon.png" alt="Ícone simbolizando a tecnologia PHP" />
                        </div>
                        <div className="" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500">
                            <img className="w-20" src="/icons-img/nodejs-icon.png" alt="Ícone simbolizando a tecnologia NodeJS" />
                        </div>
                        <div className="" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="550">
                            <img className="w-20" src="/icons-img/mysql-icon.png" alt="Ícone simbolizando a tecnologia MySQL" />
                        </div>
                        <div className="" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="600">
                            <img className="w-20" src="/icons-img/postgresql-icon.png" alt="Ícone simbolizando a tecnologia PostgreSQL" />
                        </div>
                        <div className="" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="650">
                            <img className="w-20" src="/icons-img/mongodb-icon.png" alt="Ícone simbolizando a tecnologia MongoDB" />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default TechnologiesContent;