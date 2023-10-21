import React from "react";
import { Paragraph, Section, FormationDiv, Title, TitleDiv, BoxTitle, BoxSubtitle, BoxText } from "./style";

function Formation() {
    const formacoes = [
        {
            company: 'Senac',
            course: 'Análise e Desenvolvimento de Sistemas',
            start: 'Janeiro, 2022',
            end: 'Março, 2022',
            total: '03',
        },
        {
            company: 'Senac',
            course: 'Análise e Desenvolvimento de Sistemas',
            start: 'Janeiro, 2022',
            end: 'Março, 2022',
            total: '03',
        },
        {
            company: 'Senac',
            course: 'Análise e Desenvolvimento de Sistemas',
            start: 'Janeiro, 2022',
            end: 'Março, 2022',
            total: '03',
        },
    ];


    return (
        <Section>
            <TitleDiv>
                <Title> {'<---'} Hello world {'--->'}</Title>
            </TitleDiv>
            {formacoes.map((item, index) => (
                <FormationDiv key={index}>
                    <BoxTitle>{item.course}</BoxTitle>
                    <BoxSubtitle>{item.company} - {item.start} - {item.end} | {item.total} meses</BoxSubtitle>
                </FormationDiv>
            ))}
        </Section>
    );
}

export default Formation;