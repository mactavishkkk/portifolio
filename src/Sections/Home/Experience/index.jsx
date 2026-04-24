import React from "react";
import { Section, ExperienceDiv, Title, TitleDiv, BoxTitle, BoxSubtitle, BoxText } from "./style";

function Experience() {
    const experiencias = [
        {
            company: 'X Lab Studio',
            office: 'Desenvolvedor de Software',
            start: 'Setembro, 2024',
            end: 'o momento',
            years: '01',
            months: '03',
            description: 'Atuo no desenvolvimento de soluções web e mobile, contribuindo com APIs, aplicações frontend, integrações, publicações em lojas e ambientes em nuvem.',
            subDescription: 'Competências: AWS, EC2, S3, PostgreSQL, Postman API, Git, Azure DevOps, GitLab, Azure, NestJS, React Native, React.js, Laravel, TestFlight, Apple Store e Google Play Console.'
        },
        {
            company: 'Systock',
            office: 'Desenvolvedor de Software',
            start: 'Setembro, 2022',
            end: 'Julho, 2024',
            years: '02',
            months: '01',
            description: 'Contribuí com o desenvolvimento e manutenção de sistemas web, trabalhando com regras de negócio, bancos relacionais, integrações, suporte técnico e melhoria contínua de funcionalidades.',
            subDescription: 'Competências: PostgreSQL, Vue.js, SQL, JavaScript, Laravel, Symfony, JIRA, Notion, Zendesk, Ansible, Node.js, WSL, Docker e PHP.'
        },
        {
            company: 'SWX Hands On',
            office: 'Líder Técnico | Desenvolvedor de Software',
            start: 'Setembro, 2022',
            end: 'Julho, 2024',
            years: '02',
            months: '01',
            description: 'A SWX fornece serviços de tecnologia como suporte, infraestrutura e desenvolvimento. Nela contribuí com projetos para a ADAF, atuando em APIs REST, scripts de automação, migração de dados, conteinerização, testes unitários, WebSocket, envio de emails, autenticação e manutenção de sistemas legados.',
            subDescription: 'Também desenvolvi sólidas habilidades em ZendFramework, Laravel, .NET, PostgreSQL, MySQL, Git, GitHub, Docker, Pentaho, ambientes Linux e liderança técnica.'
        },
        {
            company: 'Hey Drivers - Automotive Connectivity',
            office: 'Desenvolvedor de Software',
            start: 'Novembro, 2022',
            end: 'Abril, 2025',
            years: '02',
            months: '06',
            description: 'A Hey Drivers é uma startup criada para melhorar a experiência e a jornada dos motoristas. Contribuí com projetos web e mobile usando ReactJS, React Native, Node.js, Git, GitHub, Docker e Expo Go.',
            subDescription: 'Também participei de reuniões semanais com partes interessadas para alinhamento de funcionalidades, correções, estratégias e modelos de negócio.'
        },
    ];


    return (
        <Section>
            <TitleDiv>
                <Title>Experiences</Title>
            </TitleDiv>
            {experiencias.map((item, index) => (
                <ExperienceDiv key={index}>
                    <BoxTitle>{item.office}</BoxTitle>
                    <BoxSubtitle>{item.company} - {item.start} - {item.end} | {item.years} ano(s) e {item.months} mês(es)</BoxSubtitle>
                    <BoxText>
                        {item.description}
                    </BoxText>
                    <BoxText>
                        {item.subDescription}
                    </BoxText>
                </ExperienceDiv>
            ))}
        </Section>
    );
}

export default Experience;
