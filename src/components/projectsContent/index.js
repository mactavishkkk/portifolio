import React, { Fragment } from "react";
import "../styles/index.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const ProjectsContent = () => {
    return (
        <Fragment>
            <section>
                <div className="2xl:mt-48 xl:mt-20">
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu12" src="/img/bambu.png" alt="Cartoon de um bambu com algumas folhas na lateral esquerda da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu13" src="/img/bambu.png" alt="Cartoon de um bambu com algumas folhas na lateral esquerda da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu14" src="/img/bambu.png" alt="Cartoon de um bambu com algumas folhas na lateral esquerda da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu15" src="/img/bambu.png" alt="Cartoon de um bambu com algumas folhas na lateral esquerda da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu16" src="/img/bambu.png" alt="Cartoon de um bambu com algumas folhas na lateral esquerda da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu17" src="/img/bambu.png" alt="Cartoon de um bambu com algumas folhas na lateral esquerda da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu18" src="/img/bambu.png" alt="Cartoon de um bambu com algumas folhas na lateral esquerda da página" />
                </div>
                <div className="flex justify-end">
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu12" src="/img/bambu-right.png" alt="Cartoon de um bambu com algumas folhas na lateral direita da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu14" src="/img/bambu-right.png" alt="Cartoon de um bambu com algumas folhas na lateral direita da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu13" src="/img/bambu-right.png" alt="Cartoon de um bambu com algumas folhas na lateral direita da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu15" src="/img/bambu-right.png" alt="Cartoon de um bambu com algumas folhas na lateral direita da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu16" src="/img/bambu-right.png" alt="Cartoon de um bambu com algumas folhas na lateral direita da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu17" src="/img/bambu-right.png" alt="Cartoon de um bambu com algumas folhas na lateral direita da página" />
                    <img className="2xl:w-96 xl:w-96 md:w-[330px] absolute bambu18" src="/img/bambu-right.png" alt="Cartoon de um bambu com algumas folhas na lateral direita da página" />
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="flex justify-center mb-32 2xl:mb-32 xl:mb-32 lg:mb-3 md:mb-3 widthComponent" id="projects" data-aos="fade-up" data-aos-duration="1500">
                        <img className="w-96" src="/img/title-projects.png" alt="Titulo da seção de projetos, representado por um pergaminho" />
                    </div>


                    <div className="2xl:mx-[0px] xl:mx-[0px] md:mx-[-120px] sm:mx-[-150px] grid grid-cols-3 gap-4 cardsComponent" id="projects">
                        {/* Item 1 */}
                        <div className="border-4 w-auto h-auto border-gray-500 rounded col-span-2 ... zoom-lg" data-aos="fade-down-right" data-aos-duration="1500" data-aos-delay="50">
                            <a href="https://deploy-space-x-clone.vercel.app/" rel="noreferrer" target="_blank">
                                <img className="w-auto rounded" src="/projects-img/spacex-img.png" alt="Thumbnail do projeto spacex: Site baseado em uma das versões da SpaceX, desenvolvido no curso de Javascript da onebitcode." />
                            </a>
                        </div>

                        {/* Item 2 */}
                        <div className="border-4 w-auto h-auto border-gray-500 rounded zoom-sm" data-aos="fade-down-left" data-aos-duration="1500" data-aos-delay="50">
                            <a href="https://calculator-rosy-ten.vercel.app/" rel="noreferrer" target="_blank">
                                <img className="mt-20 w-96 h-90" src="/projects-img/calculator-img.png" alt="Thumbnail do projeto calculator: Currículo no formato de uma página web" />
                            </a>
                        </div>

                        {/* Item 3 */}
                        <div className="border-4 w-auto h-auto border-gray-500 rounded zoom-sm" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">
                            <a href="https://snake-game-lyart.vercel.app/" rel="noreferrer" target="_blank">
                                <img className="mt-20 w-96 h-90" src="/projects-img/snake-game-img.png" alt="thumbnail do projeto snake-game" />
                            </a>
                        </div>

                        {/* Item 4 */}
                        <div className="border-4 w-auto h-auto border-gray-500 rounded col-span-2 ... zoom-lg" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="100">
                            <a href="https://www.linkedin.com/posts/isa%C3%ADas-leite-2048551a3_developer-tecnology-activity-6953547368772308992-pdma?utm_source=linkedin_share&utm_medium=member_desktop_web" rel="noreferrer" target="_blank">
                                <img className="w-auto rounded" src="/projects-img/kof-img.png" alt="thumbnail do projeto wiki do jogo the king of fighters"/>
                            </a>
                        </div>

                        {/* Item 5 */}
                        <div className="border-4 w-auto h-auto border-gray-500 rounded col-span-2 ... zoom-lg" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="150">
                            <a href="https://www.linkedin.com/posts/isa%C3%ADas-leite-2048551a3_developer-activity-6962555896996478976-wfge?utm_source=linkedin_share&utm_medium=member_desktop_web" rel="noreferrer" target="_blank">
                                <img className="w-auto rounded" src="/projects-img/books-store-img.png" alt="thumbnail do projeto books store, uma loja de livros virtual"/>
                            </a>
                        </div>

                        {/* Item 6 */}
                        <div className="border-4 w-auto h-auto border-gray-500 rounded zoom-sm" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="150">
                            <a href="https://small-mario-world.vercel.app/" rel="noreferrer" target="_blank">
                                <img className="mt-16 w-96 h-90" src="/projects-img/small-mario-img.png" alt="thumbnail do projeto small mario game, um minigame na temática do mário world"/>
                            </a>
                        </div>

                        {/* Item 7 */}
                        <div className="border-4 w-auto h-auto border-gray-500 rounded zoom-xl" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="250">
                            <a href="https://www.linkedin.com/posts/isa%C3%ADas-leite-2048551a3_tecnologias-programaaexaeto-activity-6955291386854166528-q5c9?utm_source=linkedin_share&utm_medium=member_desktop_web" rel="noreferrer" target="_blank">
                                <img className="mt-20 w-96 h-90" src="/projects-img/to-do-list-img.png" alt="thumbnail do projeto to do list, uma lista de tarefas com categorias"/>
                            </a>
                        </div>

                        {/* Item 8 */}
                        <div className="border-4 w-auto h-auto border-gray-500 rounded col-span-2 ... zoom-sm" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="250">
                            <a href="https://curriculum-henna.vercel.app/" rel="noreferrer" target="_blank">
                                <img className="w-auto rounded" src="/projects-img/curriculum-img.png" alt="thumbnail do projeto curriculum, um currílo no formato de uma página web"/>
                            </a>
                        </div>

                        {/* Item 9 */}
                        <div className="border-4 w-auto h-auto border-gray-500 rounded col-span-3 ... zoom-lg" data-aos="zoom-in-up" data-aos-duration="1500" data-aos-delay="100">
                            <a href="https://www.linkedin.com/posts/isa%C3%ADas-leite-2048551a3_developer-activity-6963651896800604160--2f5?utm_source=linkedin_share&utm_medium=member_desktop_web" rel="noreferrer" target="_blank">
                                <img className="w-auto rounded" src="/projects-img/petscardweb-img.png" alt="thumbnail do projeto petscardweb, um sistema para donos de petshop e seus clientes"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default ProjectsContent;