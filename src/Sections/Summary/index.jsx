import React from "react";
import { Paragraph, Section, SummaryDiv, Title, TitleDiv } from "./style";

function Summary() {
    return (
        <Section>
            <TitleDiv>
                <Title> {'<---'} Hello world {'--->'}</Title>
            </TitleDiv>
            <SummaryDiv>
                <Paragraph>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, tempora unde magni praesentium cupiditate nemo fuga atque nostrum sequi soluta harum.
                    Quis sint aspernatur excepturi quos. Reiciendis beatae sequi laudantium quisquam, dolorem et quae quaerat eum ratione ut, itaque voluptatibus eius, magni doloremque
                    aliquid officia expedita dolore delectus ea vel?
                </Paragraph>
                <Paragraph>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, tempora unde magni praesentium cupiditate nemo fuga atque nostrum sequi soluta harum.
                    Quis sint aspernatur excepturi quos. Reiciendis beatae sequi laudantium quisquam, dolorem et quae quaerat eum ratione ut, itaque voluptatibus eius, magni doloremque
                    aliquid officia expedita dolore delectus ea vel?
                </Paragraph>
            </SummaryDiv>
        </Section>
    );
}

export default Summary;