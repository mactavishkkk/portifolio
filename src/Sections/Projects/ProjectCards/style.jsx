import styled from "styled-components";

export const Section = styled.section`
    margin: 5rem 0 10rem 0;
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

export const ProjectCardsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
  margin: 0.62rem;
  margin-top: 3.43rem;

  @media (min-width: 1920px) {
    & {
        grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 425px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const BoxDiv = styled.div`
  flex: 1;
  max-width: 18.75rem;
  height: 18.75rem;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1.00);
  }

  &.flipped {
    transform: rotateY(180deg);
  }
`;

export const BoxDivContent = styled.div`
    flex: 1;
    margin: 0.5rem;
`;

export const BoxTitle = styled.h1`
    margin-top: 0.5rem;
    font-size: 1.30rem;
    color: #FFFFFF;
    text-align: left;
    font-weight: bold;

    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const MiniTitle = styled.p`
    font-size: 0.9rem;
    color: #9F9D9D;
    margin-top: -0.45rem;
    margin-bottom: 0.50rem;
    text-align: left;
`;

export const BoxSubtitle = styled.p`
    font-size: 0.9rem;
    color: #FFFFFF;
    margin-top: 0.15rem;
    text-align: left;
`;

export const Front = styled.div`
flex: 1;
  max-width: 18.75rem;
  height: 18.75rem;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  &.flipped {
    transform: rotateY(180deg);
  }
`;

export const Back = styled.div`
  flex: 1;
  max-width: 18.75rem;
  height: 18.75rem;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #191F28;
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  & > * {
    transform: rotateY(180deg);
  }
`;

export const HighProjectsDiv = styled.div`
  margin: 0.62rem;
  margin-top: 3.43rem;
`;

export const HighProjectsTitle = styled.h1`
  font-size: 1.65rem;
  color: #FFFFFF;
  font-weight: bold;

  @media (max-width: 425px) {
    font-size: 1.35rem;
  }
`;

export const HighProjectsSubtitle = styled.p`
  color: #FFFFFF;
  margin-top: -0.50rem;

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`;

export const Anchor = styled.a`
    transition: box-shadow 0.3s, transform 0.3s;
    
    &:hover {
        transform: scale(1.05);
        color: gray;
    }
`;

export const HighProjectsText = styled.p`
  color: #FFFFFF;
  margin-top: 0.50rem;

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`;


export const EmbedDiv = styled.div`
  margin-top: 0.50rem;
`;