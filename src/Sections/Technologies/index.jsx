import React from "react";
import { Paragraph, Section, TechnologiesDiv, Title, TitleDiv, BoxTitle, BoxSubtitle, BoxText, BoxDiv, BoxDivContent } from "./style";
import TechIcon from "../../components/TechIcon";

function Technologies() {
    const stacks = [
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            title: 'Stack Tech',
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis blanditiis nesciunt corrupti.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            title: 'Stack Tech',
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis blanditiis nesciunt corrupti.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            title: 'Stack Tech',
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis blanditiis nesciunt corrupti.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            title: 'Stack Tech',
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis blanditiis nesciunt corrupti.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            title: 'Stack Tech',
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis blanditiis nesciunt corrupti.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            title: 'Stack Tech',
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis blanditiis nesciunt corrupti.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            title: 'Stack Tech',
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis blanditiis nesciunt corrupti.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            title: 'Stack Tech',
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis blanditiis nesciunt corrupti.',
        },
        {
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            title: 'Stack Tech',
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis blanditiis nesciunt corrupti.',
        },

    ];

    <link rel="stylesheet" href="../src/devicon.min.css" />

    return (
        <Section>
            <TitleDiv>
                <Title> {'<---'} Hello world {'--->'}</Title>
            </TitleDiv>
            <TechnologiesDiv>
                {stacks.map((item, index) => (
                    <BoxDiv key={index}>
                        <BoxDivContent>
                            <TechIcon iconUrl={item.icon}/>
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