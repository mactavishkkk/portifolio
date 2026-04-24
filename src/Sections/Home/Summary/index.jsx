import React from "react";
import { Paragraph, Section, SummaryDiv, Title, TitleDiv } from "./style";

function Summary() {
    return (
        <Section>
            <TitleDiv>
                <Title>About me</Title>
            </TitleDiv>
            <SummaryDiv>
                <Paragraph>
                    Olá, me chamo Isaías Leite. Sou um desenvolvedor de software motivado pela curiosidade e atuo profissionalmente na área há mais
                    de 4 anos.
                </Paragraph>
                <Paragraph>
                    Ao longo desse tempo pude contribuir com projetos de várias escalas, envolvendo pequenas, médias e grandes massas de dados,
                    regras de negócio específicas e entregas para bases com mais de 5, 20 e 200 usuários. Também liderei times e participei de
                    decisões técnicas e de produto.
                </Paragraph>
                <Paragraph>
                    Nos últimos anos venho trabalhando com <b>PHP</b>, <b>JavaScript</b>, <b>TypeScript</b>, <b>PostgreSQL</b>, <b>MySQL</b>,
                    <b>MariaDB</b>, <b>Laravel</b>, <b>React</b>, <b>React Native</b>, <b>NestJS</b>, <b>Git</b>, <b>Docker</b>, <b>AWS</b>,
                    <b>Azure</b>, <b>Ansible</b> e <b>Pentaho</b>.
                </Paragraph>
                <Paragraph>
                    Também atuei e contribuí com hackathons, competições, projetos voluntários e acadêmicos, sempre buscando transformar aprendizado
                    técnico em entregas úteis para pessoas e negócios.
                </Paragraph>
                <Paragraph>
                    No dia a dia gosto de trabalhar próximo das partes interessadas, entender o problema com clareza e construir soluções com APIs,
                    integrações, automações, testes, ambientes conteinerizados e boas práticas de desenvolvimento.
                </Paragraph>
            </SummaryDiv>
        </Section>
    );
}

export default Summary;
