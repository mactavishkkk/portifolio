import React from "react";
import { Footer, SideContainer, SideDiv, SideItem, Title } from "./style";
import { ReactSVG } from 'react-svg';

import FooterBamboo from "../../assets/footer-bambu.svg";
import RightBamboo from "../../assets/bambu-right.svg";

function SideBar() {
    return (
        <Footer>
            <SideDiv>
                <SideItem>
                    <a href="https://www.linkedin.com/in/isa%C3%ADas-leite-2048551a3/" target="_blank">
                        <Title>Linkedin</Title>
                    </a>
                </SideItem>
                <SideItem>
                    <a href="https://github.com/mactavishkkk" target="_blank">
                        <Title>GitHub</Title>
                    </a>
                </SideItem>
                <SideItem>
                    <a href="https://twitter.com/_saiasi" target="_blank">
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