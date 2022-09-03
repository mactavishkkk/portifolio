import React, { Fragment } from "react";
import "../styles/index.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const FormationContent = () => {
    return (
        <Fragment>
            <section>
                <div className="2xl:mt-[170px] xl:mt-[110px] lg:mt-[5px]">
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu06" src="/img/bambu.png" alt="Cartoon de um bambu com algumas folhas na lateral esquerda da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu07" src="/img/bambu.png" alt="Cartoon de um bambu com algumas folhas na lateral esquerda da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu08" src="/img/bambu.png" alt="Cartoon de um bambu com algumas folhas na lateral esquerda da página" />
                </div>
                <div className="flex justify-end">
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu06" src="/img/bambu-right.png" alt="Cartoon de um bambu com algumas folhas na lateral da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu07" src="/img/bambu-right.png" alt="Cartoon de um bambu com algumas folhas na lateral da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu08" src="/img/bambu-right.png" alt="Cartoon de um bambu com algumas folhas na lateral da página" />
                </div>
            </section>

            <section>
                <div className="">
                    <div className="flex justify-center mb-32 2xl:mb-32 xl:mb-32 lg:mb-3 md:mb-3 widthComponent" id="formation" data-aos="fade-up" data-aos-duration="1000">
                        <img className="w-96" src="/img/title-formation.png" alt="Titulo da seção de formação, representado por um pergaminho" />
                    </div>
                    <div className="2xl:mx-[350px] xl:mx-[350px] md:mx-[250px] sm:mx-[-150px] text-right font-mono ... subpixel-antialiased ... shadow-lg formationComponent" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200">
                        <h1 className="xl:text-3xl lg:text-2xl font-bold">Full Stack JavaScript Developer</h1>
                        <h1 className="2xl:text-lg xl:text-md lg:text-sm text-gray-600/75">OneBitCode - Junho, 2022 - Setembro, 2022 </h1>
                    </div>
                    <div className="2xl:mx-[350px] xl:mx-[350px] md:mx-[250px] sm:mx-[-150px] mt-14 text-right font-mono ... subpixel-antialiased ... shadow-lg formationComponent" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">
                        <h1 className="xl:text-3xl lg:text-2xl font-bold font-mono ... subpixel-antialiased ...">Análise e Desenvolvimento de Sistemas</h1>
                        <h1 className="2xl:text-lg xl:text-md lg:text-xs font-mono ... subpixel-antialiased ... text-gray-600/75">Senac - Abril, 2022 - Outubro, 2024 | 1° Período </h1>
                    </div>
                    <div className="2xl:mx-[350px] xl:mx-[350px] md:mx-[250px] sm:mx-[-150px] mt-12 text-right font-mono ... subpixel-antialiased ... shadow-lg formationComponent" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400">
                        <h1 className="xl:text-3xl lg:text-2xl font-bold">Técnico em Informática</h1>
                        <h1 className="2xl:text-lg xl:text-md lg:text-sm text-gray-600/75">Senac - Abril, 2020 - Março, 2022 | Concluído</h1>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default FormationContent;