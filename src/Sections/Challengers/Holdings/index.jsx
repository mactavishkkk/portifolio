import React from "react";
import { BoxSubtitle, BoxText, BoxTitle, ExperienceDiv, ImageContainer, LargeImage, MediumHorizontalImage, MediumVerticalImage, Section, Title, TitleDiv, Anchor } from "./style";

import TalkImage from "../../../assets/challengers/talk.jpg";
import TalkImageOne from "../../../assets/challengers/talk-one.jpg";
import TalkImageThree from "../../../assets/challengers/talk-two.jpg";
import TalkImageVertical from "../../../assets/challengers/talk-three-vertical.jpg";

import Hack4 from "../../../assets/challengers/hack4.jpg";
import Hack4Two from "../../../assets/challengers/hack4-two.jpg";
import Hack4Three from "../../../assets/challengers/hack4-three.jpg";
import Hack4Four from "../../../assets/challengers/hack4-four.jpg";

import Fpta from "../../../assets/challengers/fpta.jpg";
import FptaOne from "../../../assets/challengers/fpta-one.jpg";
import FptaTwo from "../../../assets/challengers/fpta-two.jpg";
import FptaThree from "../../../assets/challengers/fpta-three.jpg";

function Challengers() {
    document.title = "Portifolio - challengers";

    const holdings = [
        {
            title: 'Senac Talk',
            promoter: '@Senac Amazonas',
            promoterPage: 'https://www.linkedin.com/company/senacam/',
            day: '11',
            month: 'maio',
            year: '2023',
            description:
                'O Senac foi um dos institutos de educação no qual eu sempre me mantive engajado no mesmo, boa parte de minha formação foi lá, assim como alguns projetos e contribuições para a comunidade. E este foi mais um dos desafios concluídos que serviu de grande valia tanto para mim, quanto para os envolvidos.',
            subDescription:
                'Como o título sugere, tivemos um espaço para debatermos sobre tecnologia, mercado, tendências, inovação e várias outras coisas que giram em torno desse ecossistema.',
            images: [
                { src: TalkImage, type: 'Large' },
                { src: TalkImageVertical, type: 'MediumVertical' },
                { src: TalkImageOne, type: 'MediumHorizontal' },
                { src: TalkImageThree, type: 'MediumHorizontal' },
            ],
        },
        {
            title: 'Hackathon - Hack4Health',
            promoter: '@Manaus Tech Hub',
            promoterPage: 'https://www.linkedin.com/company/manaus-tech-hub/',
            day: '09',
            month: 'dezembro',
            year: '2021',
            description:
                'Essa foi de longe uma das melhores oportunidades que tive, com uma equipe de alunos junto a nossa professora (@Roneuane) participamos dessa grande competição de ideias em busca do grande prêmio.',
            subDescription:
                'Foram 48 horas intermitentes de branding, networking, palestras, atividades e muito desenvolvimento. A ideia não só era resolver um problema com tecnologia, mas, especificamente na área da saúde, recebemos a missão de não só trazer a solução mas um problema.',
            images: [
                { src: Hack4Four, type: 'Large' },
                { src: Hack4Two, type: 'MediumHorizontal' },
                { src: Hack4Three, type: 'MediumVertical' },
                { src: Hack4, type: 'MediumHorizontal' },
            ],
        },
        {
            title: '3FPTA',
            promoter: '@Manaus Tech Hub',
            promoterPage: 'https://www.linkedin.com/company/manaus-tech-hub/',
            day: '14',
            month: 'dezembro',
            year: '2021',
            description:
                'Essa foi a (3)° (F)eira do (P)olo de (T)ecnologia do (A)mazonas, aqui foi-se ministrados diversas atividades, desde aulas, palestras, produtos, projetos, startups e muito mais.',
            subDescription:
                'Foi aqui que obtive a oportunidade de prestar suporte ao @Senac, onde juntos ofertamos aulas gratuítas de programação, inovação e tecnologia abertas ao público de todas as idades.',
            images: [
                { src: FptaTwo, type: 'Large' },
                { src: FptaOne, type: 'MediumVertical' },
                { src: Fpta, type: 'MediumHorizontal' },
                { src: FptaThree, type: 'MediumHorizontal' },
            ],
        }
    ];

    return (
        <Section>
            <TitleDiv>
                <Title>Holdings</Title>
            </TitleDiv>
            {holdings.map((item, index) => (
                <ExperienceDiv key={index}>
                    <BoxTitle>{item.title}</BoxTitle>
                    <BoxSubtitle>
                        <Anchor href={item.promoterPage} target="_blank" rel="noopener noreferrer" >{item.promoter}</Anchor> - {''}
                        {item.day} de {item.month} de {item.year}
                    </BoxSubtitle>
                    <BoxText>
                        {item.description}
                    </BoxText>
                    <BoxText>
                        {item.subDescription}
                    </BoxText>
                    <ImageContainer>
                        {item.images.map((image, index) => {
                            if (image.type === 'Large') {
                                return <LargeImage key={index} src={image.src} />;
                            } else if (image.type === 'MediumHorizontal') {
                                return <MediumHorizontalImage key={index} src={image.src} />;
                            } else if (image.type === 'MediumVertical') {
                                return <MediumVerticalImage key={index} src={image.src} />;
                            }
                            return null;
                        })}
                    </ImageContainer>
                </ExperienceDiv>
            ))}
        </Section>
    );
}

export default Challengers;