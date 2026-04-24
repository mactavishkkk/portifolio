import React, { useEffect, useState } from "react";
import {
    Section,
    ProjectCardsDiv,
    Title,
    TitleDiv,
    BoxTitle,
    BoxSubtitle,
    BoxDiv,
    BoxDivContent,
    MiniTitle,
    HighProjectsDiv,
    HighProjectsTitle,
    HighProjectsSubtitle,
    Anchor,
    HighProjectsText,
    EmbedDiv,
    ProjectMeta,
    ProjectLanguage,
    ProjectStats,
    LoadingText
} from "./style";

function ProjectCard({ item }) {
    const corLinguagem = item.languageColor || '#9F9D9D';
    const descricao = item.description || 'Repositório fixado no perfil do GitHub.';

    return (
        <BoxDiv>
            <BoxDivContent>
                <BoxTitle>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.repo}</a>
                </BoxTitle>
                <MiniTitle>{item.owner}</MiniTitle>
                <BoxSubtitle>{descricao}</BoxSubtitle>
                <ProjectMeta>
                    {item.language && (
                        <ProjectLanguage corLinguagem={corLinguagem}>{item.language}</ProjectLanguage>
                    )}
                    <ProjectStats>{item.stars || 0} stars</ProjectStats>
                    <ProjectStats>{item.forks || 0} forks</ProjectStats>
                </ProjectMeta>
            </BoxDivContent>
        </BoxDiv>
    );
}

function ProjectCards() {
    const projetosFixadosFallback = [
        {
            owner: 'mactavishkkk',
            repo: 'AncientBeast',
            description: 'Turn Based Strategy Game. Master your beasts!',
            link: 'https://github.com/mactavishkkk/AncientBeast',
            language: 'JavaScript',
            languageColor: '#f1e05a',
            stars: 0,
            forks: 0
        },
        {
            owner: 'mactavishkkk',
            repo: 'learn-data-structure',
            description: 'Repositório destinado aos estudos de estruturas de dados.',
            link: 'https://github.com/mactavishkkk/learn-data-structure',
            language: 'C',
            languageColor: '#555555',
            stars: 0,
            forks: 0
        },
        {
            owner: 'mactavishkkk',
            repo: 'boe',
            description: 'Bemol Omnichannel Experience.',
            link: 'https://github.com/mactavishkkk/boe',
            language: 'PHP',
            languageColor: '#4F5D95',
            stars: 0,
            forks: 0
        },
        {
            owner: 'mactavishkkk',
            repo: 'SalesWeb',
            description: 'Repositório destinado ao desenvolvimento de um sistema de vendas com ASP.NET.',
            link: 'https://github.com/mactavishkkk/SalesWeb',
            language: 'C#',
            languageColor: '#178600',
            stars: 0,
            forks: 0
        },
        {
            owner: 'mactavishkkk',
            repo: 'icasei-challenge',
            description: 'icasei-teste-backend-2024.',
            link: 'https://github.com/mactavishkkk/icasei-challenge',
            language: 'Ruby',
            languageColor: '#701516',
            stars: 0,
            forks: 0
        },
        {
            owner: 'mactavishkkk',
            repo: 'joseph',
            description: 'Node.js application with Express integrated with Gemini AI.',
            link: 'https://github.com/mactavishkkk/joseph',
            language: 'R',
            languageColor: '#198CE7',
            stars: 0,
            forks: 0
        }
    ];

    const [projetosFixados, setProjetosFixados] = useState(projetosFixadosFallback);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        async function buscarProjetosFixados() {
            try {
                const resposta = await fetch('https://gh-pinned-repos.egoist.dev/?username=mactavishkkk');
                const projetos = await resposta.json();

                if (Array.isArray(projetos) && projetos.length > 0) {
                    setProjetosFixados(projetos);
                }
            } catch (erro) {
                console.error('Não foi possível buscar os repositórios fixados.', erro);
            } finally {
                setEstaCarregando(false);
            }
        }

        buscarProjetosFixados();
    }, []);

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
                '<iframe width="300" height="215" src="https://www.youtube.com/embed/4NZNhpRxmpU?si=vsfdBW8Qvk2lh4a2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        },

    ];

    return (
        <Section>
            <TitleDiv>
                <Title>Setlist</Title>
            </TitleDiv>
            {estaCarregando && (
                <LoadingText>Buscando repositórios fixados no GitHub...</LoadingText>
            )}
            <ProjectCardsDiv>
                {projetosFixados.map((item, index) => (
                    <ProjectCard key={`${item.owner}-${item.repo}-${index}`} item={item} />
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
