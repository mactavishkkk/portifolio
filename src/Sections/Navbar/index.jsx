import React from "react";
import { Header, NavBarDiv, NavBarItem, Title } from "./style";

function NavBar() {
    return (
        <Header>
            <NavBarDiv>
                <NavBarItem>
                    <Title>home</Title>
                </NavBarItem>
                <NavBarItem>
                    <Title>challengers</Title>
                </NavBarItem>
                <NavBarItem>
                    <Title>projects</Title>
                </NavBarItem>
            </NavBarDiv>
        </Header>
    );
}

export default NavBar;