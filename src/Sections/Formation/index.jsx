import React from "react";
import { Paragraph, Section, FormationDiv, Title, TitleDiv, BoxTitle, BoxSubtitle, BoxText } from "./style";

function Formation() {

    const formacoes = [
        {
            empresa: 'Senac',
            curso: 'Análise e Desenvolvimento de Sistemas',
            inicio: 'Janeiro, 2022',
            fim: 'Março, 2022',
            total: '03',
        },
        {
            empresa: 'Senac',
            curso: 'Análise e Desenvolvimento de Sistemas',
            inicio: 'Janeiro, 2022',
            fim: 'Março, 2022',
            total: '03',
        },
        {
            empresa: 'Senac',
            curso: 'Análise e Desenvolvimento de Sistemas',
            inicio: 'Janeiro, 2022',
            fim: 'Março, 2022',
            total: '03',
        },
    ];
    

    return (
        <Section>
            <TitleDiv>
                <Title> {'<---'} Hello world {'--->'}</Title>
            </TitleDiv>
            {formacoes.map((item, index) => (
                <FormationDiv>
                    <BoxTitle>{item.curso}</BoxTitle>
                    <BoxSubtitle>{item.empresa} - {item.inicio} - {item.fim} | {item.total} meses</BoxSubtitle>
                </FormationDiv>
            ))}
        </Section>
    );
}

export default Formation;