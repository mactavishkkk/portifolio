import styled from "styled-components";

export const Footer = styled.footer``;

export const Title = styled.h1`
    font-size: 1.25rem;
    color: #FFFFFF;
`;

export const SideContainer = styled.div`
    display: flex;
    justify-content: space-between; 
`;

export const SideDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const SideItem = styled.span`
    margin: 1.5rem 4rem 8rem 4rem;
    cursor: pointer;
    color: #FFFFFF;
    transition: box-shadow 0.1s, transform 0.1s;

    &:hover {
        transform: scale(1.05);
      }
`;