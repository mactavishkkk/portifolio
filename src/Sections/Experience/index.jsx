import React from "react";
import { Paragraph, Section, ExperienceDiv, Title, TitleDiv, BoxTitle, BoxSubtitle, BoxText } from "./style";

function Experience() {

    const experiencias = [
        {
            empresa: 'Senac',
            cargo: 'Analista Desenvolvedor de Software - I',
            inicio: 'Janeiro, 2022',
            fim: 'Março, 2022',
            total: '03',
            descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, tempora unde magni praesentium cupiditate nemo fuga atque nostrum sequi soluta harum. Quis sint aspernatur excepturi quos. Reiciendis beatae sequi laudantium quisquam, dolorem et quae quaerat eum ratione ut, itaque',
        },
        {
            empresa: 'Senac',
            cargo: 'Analista Desenvolvedor de Software - I',
            inicio: 'Janeiro, 2022',
            fim: 'Março, 2022',
            total: '03',
            descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, tempora unde magni praesentium cupiditate nemo fuga atque nostrum sequi soluta harum. Quis sint aspernatur excepturi quos. Reiciendis beatae sequi laudantium quisquam, dolorem et quae quaerat eum ratione ut, itaque',
        },
        {
            empresa: 'Senac',
            cargo: 'Analista Desenvolvedor de Software - I',
            inicio: 'Janeiro, 2022',
            fim: 'Março, 2022',
            total: '03',
            descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, tempora unde magni praesentium cupiditate nemo fuga atque nostrum sequi soluta harum. Quis sint aspernatur excepturi quos. Reiciendis beatae sequi laudantium quisquam, dolorem et quae quaerat eum ratione ut, itaque',
        },
    ];
    

    return (
        <Section>
            <TitleDiv>
                <Title> {'<---'} Hello world {'--->'}</Title>
            </TitleDiv>
            {experiencias.map((item, index) => (
                <ExperienceDiv>
                    <BoxTitle>{item.cargo}</BoxTitle>
                    <BoxSubtitle>{item.empresa} - {item.inicio} - {item.fim} | {item.total} meses</BoxSubtitle>
                    <BoxText>
                        {item.descricao}
                    </BoxText>
                </ExperienceDiv>
            ))}
        </Section>
    );
}

export default Experience;