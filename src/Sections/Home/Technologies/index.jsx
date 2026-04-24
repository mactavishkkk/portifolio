import React from "react";
import { Section, TechnologiesDiv, Title, TitleDiv, BoxTitle, BoxSubtitle, BoxDiv, BoxDivContent } from "./style";
import TechIcon from "../../../components/TechIcon";

function Technologies() {
    const stacks = [
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            title: 'JavaScript',
            subtitle: 'Linguagem de programação amplamente usada para desenvolvimento web.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
            title: 'TypeScript',
            subtitle: 'Superset do JavaScript com tipagem estática para aplicações mais robustas.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            title: 'React',
            subtitle: 'Biblioteca JavaScript popular para criar interfaces de usuário interativas.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            title: 'React Native',
            subtitle: 'Framework para desenvolvimento de aplicativos móveis multiplataforma usando React.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
            title: 'NestJS',
            subtitle: 'Framework Node.js para construção de APIs escaláveis com TypeScript.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg',
            title: 'PHP',
            subtitle: 'Linguagem de programação amplamente usada para desenvolvimento web do lado do servidor.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg',
            title: 'Laravel',
            subtitle: 'Framework PHP elegante e eficiente para desenvolvimento web moderno.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg',
            title: 'Symfony',
            subtitle: 'Framework PHP para aplicações web estruturadas e reutilizáveis.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zend/zend-plain.svg',
            title: 'ZendFramework',
            subtitle: 'Framework PHP para desenvolvimento web escalável e seguro.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            title: 'Node.js',
            subtitle: 'Ambiente de execução JavaScript para aplicações backend e automações.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg',
            title: 'SQL',
            subtitle: 'Linguagem de consulta estruturada para gerenciamento de bancos de dados relacionais.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
            title: 'MySQL',
            subtitle: 'Sistema de gerenciamento de banco de dados relacional de código aberto.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg',
            title: 'MariaDB',
            subtitle: 'Banco de dados relacional compatível com MySQL e focado em desempenho.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',
            title: 'PostgreSQL',
            subtitle: 'Sistema de gerenciamento de banco de dados relacional de alto desempenho.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
            title: 'AWS',
            subtitle: 'Plataforma de computação em nuvem usada em serviços como EC2 e S3.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
            title: 'Azure',
            subtitle: 'Plataforma de nuvem da Microsoft para infraestrutura, serviços e DevOps.',
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
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg',
            title: 'Azure DevOps',
            subtitle: 'Ferramenta para gestão de repositórios, pipelines, boards e entregas de software.',
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
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg',
            title: 'Ansible',
            subtitle: 'Ferramenta para automação de infraestrutura, provisionamento e configuração de servidores.',
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
