import React, { Fragment } from "react";
import "../styles/index.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const ExperienciesContent = () => {
    return (
        <Fragment>
            <section>
                <div className="2xl:mt-[365px] xl:mt-[300px] lg:mt-[165px] md:mt-[145px]">
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu03" src="/img/bambu.png" alt="Cartoon de um bambu com algumas folhas na lateral esquerda da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu04" src="/img/bambu.png" alt="Cartoon de um bambu com algumas folhas na lateral esquerda da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu05" src="/img/bambu.png" alt="Cartoon de um bambu com algumas folhas na lateral esquerda da página" />
                </div>
                <div className="flex justify-end">
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu03" src="/img/bambu-right.png" alt="Cartoon de um bambu com algumas folhas na lateral da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu04" src="/img/bambu-right.png" alt="Cartoon de um bambu com algumas folhas na lateral da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu05" src="/img/bambu-right.png" alt="Cartoon de um bambu com algumas folhas na lateral da página" />
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="flex justify-center mb-32 2xl:mb-32 xl:mb-32 lg:mb-3 md:mb-3 widthComponent" id="experiences" data-aos="fade-up" data-aos-duration="1000">
                        <img className="w-96" src="/img/title-experiences.png" alt="Titulo da seção de experiências, representado por um pergaminho" />
                    </div>
                    <div className="shadow-lg 2xl:mx-[0px] xl:mx-[0px] md:mx-[-120px] sm:mx-[-150px]" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="200">
                        <h1 className="text-3xl font-bold font-mono ... subpixel-antialiased ...">Líder de Projeto</h1>
                        <h1 className="text-md font-mono ... subpixel-antialiased ... text-gray-600/75">Senac - Janeiro, 2022 - Março, 2022 | 03 meses</h1>
                        <p className="2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs font-mono ... subpixel-antialiased ... mt-3">
                            Atuei como gerente e desenvolvedor full stack do projeto chamado PETSCARD, um sistema web que traz como objetivo
                            instruir o responsável por um pet a como se portar em relação a sua saúde e também, um sistema de administração
                            para o proprietário de um pet-shop. Desenvolvemos habilidades em HTML5, CSS3, JAVASCRIPT, BOOTSTRAP, PHP,
                            MySQL assim como boas noções em Git, GitHub e Metodologias ágeis.
                        </p>
                    </div>
                    <div className="mt-6 shadow-lg 2xl:mx-[0px] xl:mx-[0px] md:mx-[-120px] sm:mx-[-150px]" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">
                        <h1 className="text-3xl font-bold font-mono ... subpixel-antialiased ...">Suporte e Infraestrutura - TI</h1>
                        <h1 className="text-md font-mono ... subpixel-antialiased ... text-gray-600/75">Live Academia - Dezembro, 2021 - Março, 2022 | 04 meses</h1>
                        <p className="2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs font-mono ... subpixel-antialiased ... mt-3">
                        A maior rede de academias por assinatura de manaus, Aqui onde atuei principalmente no setor de informática da empresa, prestando monitoramento no CFTV da empresa, relatórios de controle e manutenção nas máquinas do escritório.
                        </p>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default ExperienciesContent;