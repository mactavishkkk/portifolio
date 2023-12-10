import styled from "styled-components";

export const Container = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;

    background-color: #0D1117;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 70%;
    height: 100%;
    
    margin: 0 auto;
    padding: 0 auto;
    box-sizing: border-box;
`;

export const Section = styled.section`
    margin: 5rem 0 5rem 0;
`;

export const TitleDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.56rem 0 1.56rem 0;
`;

export const Title = styled.h1`
    font-size: 1.25rem;
    color: #FFFFFF;
    font-weight: bold;

    @media (max-width: 425px) {
        font-size: 1rem;
    }
`;

export const ExperienceDiv = styled.div`
    margin: 0.62rem;
    margin-top: 3.43rem;
`;

export const BoxTitle = styled.h1`
    font-size: 1.65rem;
    color: #FFFFFF;
    font-weight: bold;
`;

export const BoxSubtitle = styled.p`
    color: #FFFFFF;
    margin-top: -0.50rem;

    @media (max-width: 425px) {
        font-size: 0.9rem;
    }
`;

export const BoxText = styled.p`
    color: #FFFFFF;
    margin-top: 0.50rem;

    @media (max-width: 425px) {
        font-size: 0.8rem;
    }
`;

export const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

    margin-top: 1rem;
`;

export const LargeImage = styled.img`
    grid-column: span 3;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: box-shadow 0.3s, transform 0.3s;
    
    &:hover {
        transform: scale(1.03);
    }
`;

export const MediumHorizontalImage = styled.img`
    grid-column: span 2;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: box-shadow 0.3s, transform 0.3s;
    
    &:hover {
        transform: scale(1.03);
    }
`;

export const MediumVerticalImage = styled.img`
    grid-row: span 3;
    grid-column: span 1;
    border-radius: 0.5rem;

    cursor: pointer;
    transition: box-shadow 0.3s, transform 0.3s;
    
    &:hover {
        transform: scale(1.03);
    }
`;

export const Anchor = styled.a`
    transition: box-shadow 0.3s, transform 0.3s;
    
    &:hover {
        transform: scale(1.05);
        color: gray;
    }
`;