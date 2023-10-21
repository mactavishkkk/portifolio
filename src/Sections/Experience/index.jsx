import React from "react";
import { Paragraph, Section, ExperienceDiv, Title, TitleDiv, BoxTitle, BoxSubtitle, BoxText } from "./style";

function Experience() {
    const experiencias = [
        {
            company: 'Senac',
            office: 'Analista Desenvolvedor de Software - I',
            start: 'Janeiro, 2022',
            end: 'Março, 2022',
            total: '03',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, tempora unde magni praesentium cupiditate nemo fuga atque nostrum sequi soluta harum. Quis sint aspernatur excepturi quos. Reiciendis beatae sequi laudantium quisquam, dolorem et quae quaerat eum ratione ut, itaque',
        },
        {
            company: 'Senac',
            office: 'Analista Desenvolvedor de Software - I',
            start: 'Janeiro, 2022',
            end: 'Março, 2022',
            total: '03',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, tempora unde magni praesentium cupiditate nemo fuga atque nostrum sequi soluta harum. Quis sint aspernatur excepturi quos. Reiciendis beatae sequi laudantium quisquam, dolorem et quae quaerat eum ratione ut, itaque',
        },
        {
            company: 'Senac',
            office: 'Analista Desenvolvedor de Software - I',
            start: 'Janeiro, 2022',
            end: 'Março, 2022',
            total: '03',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, tempora unde magni praesentium cupiditate nemo fuga atque nostrum sequi soluta harum. Quis sint aspernatur excepturi quos. Reiciendis beatae sequi laudantium quisquam, dolorem et quae quaerat eum ratione ut, itaque',
        },
    ];
    

    return (
        <Section>
            <TitleDiv>
                <Title> {'<---'} Hello world {'--->'}</Title>
            </TitleDiv>
            {experiencias.map((item, index) => (
                <ExperienceDiv key={index}>
                    <BoxTitle>{item.office}</BoxTitle>
                    <BoxSubtitle>{item.company} - {item.start} - {item.end} | {item.total} meses</BoxSubtitle>
                    <BoxText>
                        {item.description}
                    </BoxText>
                </ExperienceDiv>
            ))}
        </Section>
    );
}

export default Experience;