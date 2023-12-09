import React, { useState } from "react";
import {
    Section,
    ProjectCardsDiv,
    Title,
    TitleDiv,
    BoxTitle,
    BoxSubtitle,
    BoxDiv,
    BoxDivContent,
    Front,
    Back,
    MiniTitle,
    HighProjectsDiv,
    HighProjectsTitle,
    HighProjectsSubtitle,
    Anchor,
    HighProjectsText,
    EmbedDiv
} from "./style";

import BookStoreImage from "../../../assets/projects-img/books-store-img.png";
import CurriculumImage from "../../../assets/projects-img/curriculum-img.png";
import KofClubImage from "../../../assets/projects-img/kof-img.png";
import PetsCardImage from "../../../assets/projects-img/petscardweb-img.png";
import SmallMarioImage from "../../../assets/projects-img/small-mario-img.png";
import SpaceXImage from "../../../assets/projects-img/spacex-img.png";
import ToDoListImage from "../../../assets/projects-img/to-do-list-img.png";

function ProjectCard({ item, index }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <BoxDiv onClick={handleClick} className={isFlipped ? 'flipped' : ''}>
            <BoxDivContent>
                <Front className={isFlipped ? 'hidden' : ''} backgroundImage={item.image}>
                </Front>
                <Back className={isFlipped ? '' : 'hidden'}>
                    <BoxTitle><a href={item.repo} target="_blank" rel="noopener noreferrer">{item.title}</a></BoxTitle>
                    <MiniTitle>clique aqui!</MiniTitle>
                    <BoxSubtitle>{item.subtitle}</BoxSubtitle>
                </Back>
            </BoxDivContent>
        </BoxDiv>
    );
}

function ProjectCards() {
    const stacks = [
        {
            image: BookStoreImage,
            title: 'book-store',
            subtitle: 'Pequena loja de livros desenvolvida no curso de programação web do professor André Mauricio.',
            repo: 'https://github.com/mactavishkkk/book-store'
        },
        {
            image: CurriculumImage,
            title: 'curriculum',
            subtitle: 'Currículo no formato de uma página web.',
            repo: 'https://github.com/mactavishkkk/curriculum'
        },
        {
            image: KofClubImage,
            title: 'kof-club',
            subtitle: "Um 'wikipedia' para fãs de The king of figthers, pondo em prova as tecnologias da web.",
            repo: 'https://github.com/mactavishkkk/kof-club'
        },
        {
            image: PetsCardImage,
            title: 'petsCard-web',
            subtitle: 'Aplicação web voltada para o contexto de petshops.',
            repo: ''
        },
        {
            image: SmallMarioImage,
            title: 'small-mario-world',
            subtitle: 'Um simples game desenvolvido com as tecnologias da web com o tema do Super Mario World.',
            repo: 'https://github.com/mactavishkkk/small-mario-world'
        },
        {
            image: SpaceXImage,
            title: 'deploy-spaceX-clone',
            subtitle: 'Site baseado em uma das versões da SpaceX, desenvolvido no curso de Javascript da onebitcode.',
            repo: 'https://github.com/mactavishkkk/deploy-spaceX-clone'
        },
        {
            image: ToDoListImage,
            title: 'to-do-list',
            subtitle: 'Um projeto desenvolvido dentro do treinamento FSJSD.',
            repo: 'https://github.com/mactavishkkk/to-do-list'
        }
    ];

    const highProjects = [
        {
            title: 'Projeto Integrador',
            promoter: '@Senac Amazonas',
            promoterPage: 'https://www.linkedin.com/company/senacam/',
            day: '26',
            month: 'outubro',
            year: '2021',
            description:
                'Os projetos integradores são uma forma dos alunos aplicarem os conhecimentos adquiridos ao longo do curso. A proposta é que os alunos proporcionem soluções para algum dos muitos problemas que envoltam a sociedade.',
            subDescription:
                'Logo, abaixo você pode conferir um pouco do que foi este evento.',
            embedCode:
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/4NZNhpRxmpU?si=vsfdBW8Qvk2lh4a2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        },

    ];

    return (
        <Section>
            <TitleDiv>
                <Title>Setlist</Title>
            </TitleDiv>
            <ProjectCardsDiv>
                {stacks.map((item, index) => (
                    <ProjectCard key={index} item={item} index={index} />
                ))}
            </ProjectCardsDiv>
            {highProjects.map((item, index) => (
                <HighProjectsDiv key={index}>
                    <HighProjectsTitle>{item.title}</HighProjectsTitle>
                    <HighProjectsSubtitle>
                        <Anchor href={item.promoterPage} target="_blank" rel="noopener noreferrer" >{item.promoter}</Anchor> - {''}
                        {item.day} de {item.month} de {item.year}
                    </HighProjectsSubtitle>
                    <HighProjectsText>
                        {item.description}
                    </HighProjectsText>
                    <HighProjectsText>
                        {item.subDescription}
                    </HighProjectsText>
                    <EmbedDiv dangerouslySetInnerHTML={{ __html: item.embedCode }} />
                </HighProjectsDiv>
            ))}
        </Section>
    );
}

export default ProjectCards;
