import React from "react";
import { Paragraph, Section, SummaryDiv, Title, TitleDiv } from "./style";

function Summary() {
    return (
        <Section>
            <TitleDiv>
                <Title>About me</Title>
            </TitleDiv>
            <SummaryDiv>
                <Paragraph>
                    Olá, me chamo Isaías Leite, sou desenvolvedor de softwares a mais de 1 ano. Ao longo desse tempo pude participar de projetos acadêmicos
                    onde desenvolvi o senso de trabalho em equipe, a pesquisa e a ciência. Também tive a oportunidade de participar de hackathons e
                    projetos voluntários em minha cidade natal.
                </Paragraph>
                <Paragraph>
                    Atualmente trabalho com: <b>PHP</b>, <b>JavaScript</b>, bancos de dados relacionais, <b>APIs Rest</b>, testes unitários,
                    metodologias <b>ágeis</b> e algumas outras tecnologias do ecossistema das mesmas.
                </Paragraph>
                <Paragraph>
                    Hoje possuo sólidas experiências em frameworks e bibliotecas como: <b>Laravel</b>, <b>Zend</b>, <b>PHPUnit</b>, <b>Reactjs</b>,
                    <b>React-Native</b>, <b>Styled-Components</b>, <b>Bootstrap</b>, <b>Tailwind</b>, dentre outras.
                </Paragraph>
                <Paragraph>
                    Assim como as boas práticas da metodologia ágil e do Devops como: Scrum, Kanban, Git e Docker.
                </Paragraph>
                <Paragraph>
                    Estou sempre em busca de aprender cada vez mais e mais. No tempo livre gosto de ler livros técnicos assim como estudar algoritmos, problemas
                    de lógica, estruturas de dados e linguagens fortemente tipadas. Atualmente estou desenvolvendo tudo isso nas linguages C, C# e Java.
                </Paragraph>
            </SummaryDiv>
        </Section>
    );
}

export default Summary;