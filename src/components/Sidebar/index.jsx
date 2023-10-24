import React from "react";
import { Footer, SideDiv, SideItem, Title } from "./style";

function SideBar() {
    return (
        <Footer>
            <SideDiv>
                <SideItem>
                    <a href="https://www.linkedin.com/in/isa%C3%ADas-leite-2048551a3/" target="_blank" rel="noopener noreferrer">
                        <Title>Linkedin</Title>
                    </a>
                </SideItem>
                <SideItem>
                    <a href="https://github.com/mactavishkkk" target="_blank" rel="noopener noreferrer">
                        <Title>GitHub</Title>
                    </a>
                </SideItem>
                <SideItem>
                    <a href="https://twitter.com/_saiasi" target="_blank" rel="noopener noreferrer">
                        <Title>Twitter</Title>
                    </a>
                </SideItem>
                <SideItem>
                    <Title>Mactavish - ©</Title>
                </SideItem>
            </SideDiv>
        </Footer>
    );
}

export default SideBar;