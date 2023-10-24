import React from "react";
import { Section, ExperienceDiv, Title, TitleDiv, BoxTitle, BoxSubtitle, BoxText } from "./style";

function Experience() {
    const experiencias = [
        {
            company: 'SWX Hands On',
            office: 'Líder Técnico | Desenvolvedor de software',
            start: 'Agosto, 2022',
            end: 'o momento',
            years: '01',
            months: '03',
            description: 'SWX é uma empresa que fornece serviços de tecnologia como Suporte, Infraestrutura e Desenvolvimento. Nela contribuí com alguns projetos de um órgão público chamado ADAF. Desenvolvi sólidas habilidades em: ZendFramework, Laravel, PHP, PostgreSQL, MySQL, Git, GitHub, Docker, ambientes e servidores Linux.',
            subDescription: 'Também desenvolvi habilidades no gerenciamento de times técnicos e artefatos do modelo de negócio, como: Padronização de código, Documentações, Modelagens, Rituais ágeis e Gerenciamento de tarefas.'
        },
        {
            company: 'HeyDrivers',
            office: 'Desenvolvedor de Software',
            start: 'Novembro, 2022',
            end: 'o momento',
            years: '01',
            months: '00',
            description: 'Hey Drivers é uma startup que nasceu com o objetivo de melhorar a experiência e a jornada dos motoristas no geral. No dia a dia, contribuindo com alguns projetos tenho contato com tecnologias como: ReacJs, React-Native, JavaScript, Git, GitHub, Docker e ambientes Linux.',
            subDescription: 'Além disso, contribuo com reuniões semanais onde alinhamos regras de negócio, decisões técnicas e estratégias.'
        },
        {
            company: 'Senac',
            office: 'Líder de Projeto | Desenvolvedor de software',
            start: 'Janeiro, 2022',
            end: 'Março, 2022',
            years: '00',
            months: '03',
            description: 'Atuei como líder e desenvolvedor de um projeto chamado PetsCard, um sistema web que traz como objetivo instruir o responsável por um pet a como se portar em relação a sua saúde assim como um sistema de administração para o proprietário de um pet-shop.',
            subDescription: 'Desenvolvemos habilidades em HTML5, CSS3, JavaScript, Bootstrap, PHP, MySQL assim como boas noções em Git, GitHub e metodologias ágeis. Também tivemos a oportunidade de desenvovler artefatos de software como: Casos de Uso, Modelagens e Documentações.'
        },
    ];


    return (
        <Section>
            <TitleDiv>
                <Title> Expierences</Title>
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