import React, { useState } from "react";
import {
    Section,
    ProjectCardsDiv,
    Title,
    TitleDiv,
    BoxTitle,
    BoxSubtitle,
    BoxDiv,
    BoxDivContent,
    Front,
    Back
} from "./style";
import TechIcon from "../../../components/TechIcon";

function ProjectCard({ item, index }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <BoxDiv onClick={handleClick} className={isFlipped ? 'flipped' : ''}>
            <BoxDivContent>
                <Front className={isFlipped ? 'hidden' : ''}>
                    <TechIcon iconUrl={item.image} />
                </Front>
                <Back className={isFlipped ? '' : 'hidden'}>
                    <BoxTitle><a href="google.com" target="_blank" rel="noopener noreferrer">{item.title}</a></BoxTitle>
                    <BoxSubtitle>{item.subtitle}</BoxSubtitle>
                </Back>
            </BoxDivContent>
        </BoxDiv>
    );
}

function ProjectCards() {
    const stacks = [
        {
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-line.svg',
            title: 'book-store',
            subtitle: 'Pequena loja de livros desenvolvida no curso de programação web do professor André Mauricio.',
        }
    ];

    return (
        <Section>
            <TitleDiv>
                <Title>Setlist</Title>
            </TitleDiv>
            <ProjectCardsDiv>
                {stacks.map((item, index) => (
                    <ProjectCard key={index} item={item} index={index} />
                ))}
            </ProjectCardsDiv>
        </Section>
    );
}

export default ProjectCards;
