import styled from "styled-components";

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
`;

export const Paragraph = styled.p`
margin: 0.62rem;
font-size: 1.18rem;
color: #FFFFFF;
`;

export const TechnologiesDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
  margin: 0.62rem;
  margin-top: 3.43rem;
`;

export const BoxDiv = styled.div`
  flex: 1;
  max-width: 18.75rem;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #191F28;
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const BoxDivContent = styled.div`
    flex: 1;
    margin: 0.5rem;
`;

export const BoxTitle = styled.h1`
    margin-top: 0.5rem;
    font-size: 1.50rem;
    color: #FFFFFF;
    text-align: left;
    font-weight: bold;
`;

export const BoxSubtitle = styled.p`
    font-size: 0.9rem;
    color: #FFFFFF;
    margin-top: 0.15rem;
    text-align: left;
`;

export const BoxText = styled.p`
    color: #FFFFFF;
    margin-top: 0.50rem;
    text-align: left;
`;