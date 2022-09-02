import React, { Fragment } from "react";
import "../styles/index.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const FooterContent = () => {
    return (
        <Fragment>
            <section>
                <div className="2xl:mt-44 xl:mt-6">
                    <img className="mx-1.5 2xl:w-96 xl:w-96 md:w-[330px] absolute bambu19" src="/img/footer-bambu.png" alt="Cartoon de um bambu com algumas folhas na lateral esquerda da página" />
                    <img className="mx-1.5 2xl:w-96 xl:w-96 md:w-[330px] absolute bambu20" src="/img/footer-bambu.png" alt="Cartoon de um bambu com algumas folhas na lateral esquerda da página" />
                </div>
                <div className="flex justify-end">
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu19" src="/img/bambu-right.png" alt="Cartoon de um bambu com algumas folhas na lateral da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu20" src="/img/bambu-right.png" alt="Cartoon de um bambu com algumas folhas na lateral da página" />
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="2xl:mx-[0px] xl:mx-[0px] md:mx-[-120px] sm:mx-[-150px] flex justify-center widthComponent" id="width" data-aos="flip-left" data-aos-duration="1000">
                        <img className="mt-24 mb-24 h-96 w-auto" src="/img/logo.png" alt="Identidade digital como uma espécie de logo marca adjunto das outras opções do menu." />
                    </div>
                </div>
            </section>

            <footer className="bg-black mt-90 h-80 footerComponent">
                <div className="container flex justify-center flex-wrap">
                    <div className="2xl:mx-[50px] xl:mx-[50px] md:mx-[-120px] sm:mx-[-150px] mt-32 m-5">
                        <a href="https://www.linkedin.com/in/isa%C3%ADas-leite-2048551a3/" className="text-base 2xl:text-lg xl:text-xl font-medium text-white hover:text-gray-300 font-mono ..." rel="noreferrer" target="_blank">
                            Linkedin
                        </a>
                    </div>

                    <div className="2xl:mx-[50px] xl:mx-[50px] md:mx-[-120px] sm:mx-[-150px] mt-32 m-5">
                        <a href="https://github.com/mactavishkkk" className="text-base 2xl:text-lg xl:text-xl font-medium text-white hover:text-gray-300 font-mono ..." rel="noreferrer" target="_blank">
                            GitHub
                        </a>
                    </div>

                    <div className="2xl:mx-[50px] xl:mx-[50px] md:mx-[-120px] sm:mx-[-150px] mt-32 m-5">
                        <a href="https://twitter.com/_saiasi" className="text-base 2xl:text-lg xl:text-xl font-medium text-white hover:text-gray-300 font-mono ..." rel="noreferrer" target="_blank">
                            Twitter
                        </a>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default FooterContent;