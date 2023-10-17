import React, { Fragment } from "react";
import "../styles/index.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const FooterContent = () => {
    return (
        <Fragment>
            <section>
                <div className="">
                    <div className="2xl:mx-[50px] xl:mx-[0px] md:mx-[-120px] sm:mx-[-150px] flex justify-center widthComponent" id="width">
                        <img className="mt-24 mb-24 h-96 w-auto" src="/img/logo.png" alt="Identidade digital como uma espécie de logo marca adjunto das outras opções do menu." />
                    </div>
                </div>
            </section>

            <footer className="bg-black mt-90 h-80 footerComponent">
                <div className="flex justify-center flex-wrap">
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