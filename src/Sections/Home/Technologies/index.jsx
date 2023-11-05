import React from "react";
import { Section, TechnologiesDiv, Title, TitleDiv, BoxTitle, BoxSubtitle, BoxDiv, BoxDivContent } from "./style";
import TechIcon from "../../../components/TechIcon";

function Technologies() {
    const stacks = [
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-line.svg',
            title: 'C',
            subtitle: 'Linguagem de programação de alto desempenho amplamente usada.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg',
            title: 'C#',
            subtitle: 'Linguagem de programação moderna desenvolvida pela Microsoft.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg',
            title: 'Java',
            subtitle: 'Linguagem de programação popular usada para desenvolvimento web e móvel.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            title: 'JavaScript',
            subtitle: 'Linguagem de programação amplamente usada para desenvolvimento web.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            title: 'ReactJS',
            subtitle: 'Biblioteca JavaScript popular para criar interfaces de usuário interativas.',
        },
        {
            icon: '',
            title: 'React-Native',
            subtitle: 'Framework para desenvolvimento de aplicativos móveis multiplataforma usando React.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
            title: 'TailWind',
            subtitle: 'Framework CSS para design de interface com componentes personalizáveis.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg',
            title: 'Bulma',
            subtitle: 'Framework CSS para criação de layouts responsivos e modernos.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
            title: 'Bootstrap',
            subtitle: 'Framework CSS popular para design de sites responsivos e móveis.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg',
            title: 'PHP',
            subtitle: 'Linguagem de programação amplamente usada para desenvolvimento web do lado do servidor.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zend/zend-plain.svg',
            title: 'ZendFramework',
            subtitle: 'Framework PHP para desenvolvimento web escalável e seguro.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg',
            title: 'Laravel',
            subtitle: 'Framework PHP elegante e eficiente para desenvolvimento web moderno.',
        },
        {
            icon: '',
            title: 'SQL',
            subtitle: 'Linguagem de consulta estruturada para gerenciamento de bancos de dados relacionais.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
            title: 'MySQL',
            subtitle: 'Sistema de gerenciamento de banco de dados relacional de código aberto.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',
            title: 'PostgreSQL',
            subtitle: 'Sistema de gerenciamento de banco de dados relacional de alto desempenho.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            title: 'GitHub',
            subtitle: 'Plataforma de hospedagem e colaboração de código-fonte.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-plain.svg',
            title: 'GitLab',
            subtitle: 'Plataforma de ciclo de vida de DevOps que fornece controle de versão e funcionalidades de CI/CD.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            title: 'Git',
            subtitle: 'Sistema de controle de versão distribuído amplamente utilizado para rastreamento de alterações no código-fonte.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg',
            title: 'Docker',
            subtitle: 'Plataforma de contêinerização para desenvolvimento, implantação e execução de aplicativos.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg',
            title: 'Linux',
            subtitle: 'Sistema operacional de código aberto amplamente utilizado.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg',
            title: 'Windows',
            subtitle: 'Sistema operacional amplamente utilizado desenvolvido pela Microsoft.',
        },
    ];

    return (
        <Section>
            <TitleDiv>
                <Title>Stacks</Title>
            </TitleDiv>
            <TechnologiesDiv>
                {stacks.map((item, index) => (
                    <BoxDiv key={index}>
                        <BoxDivContent>
                            <TechIcon iconUrl={item.icon} />
                            <BoxTitle>{item.title}</BoxTitle>
                            <BoxSubtitle>{item.subtitle}</BoxSubtitle>
                        </BoxDivContent>
                    </BoxDiv>
                ))}
            </TechnologiesDiv>
        </Section>
    );
}

export default Technologies;