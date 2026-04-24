import React from "react";
import { Section, FormationDiv, Title, TitleDiv, BoxTitle, BoxSubtitle } from "./style";

function Formation() {
    const formacoes = [
        {
            company: 'Senac',
            course: 'Análise e Desenvolvimento de Sistemas',
            start: 'Abril, 2022',
            end: 'Outubro, 2024',
            status: 'Concluído',
        },
        {
            company: 'Senac',
            course: 'Técnico em Informática',
            start: 'Abril, 2020',
            end: 'Março, 2022',
            status: 'Concluído',
        },
    ];


    return (
        <Section>
            <TitleDiv>
                <Title>Academic Education</Title>
            </TitleDiv>
            {formacoes.map((item, index) => (
                <FormationDiv key={index}>
                    <BoxTitle>{item.course}</BoxTitle>
                    <BoxSubtitle>{item.company} - {item.start} - {item.end} | {item.status}</BoxSubtitle>
                </FormationDiv>
            ))}
        </Section>
    );
}

export default Formation;
