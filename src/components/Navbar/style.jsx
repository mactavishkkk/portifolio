import styled from "styled-components";

export const Header = styled.header``;

export const Title = styled.h1`
    font-size: 1.25rem;
    color: #FFFFFF;
`;

export const NavBarDiv = styled.div`
    display: flex;
`;

export const NavBarItem = styled.span`
    margin: 2.18rem 0.6rem 0.6rem 1.87rem;
    cursor: pointer;
    color: #FFFFFF;
    transition: box-shadow 0.1s, transform 0.1s;

    &:hover {
        transform: scale(1.05);
      }
`;