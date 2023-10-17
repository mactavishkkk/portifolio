import React from "react";
import { Header, NavBarDiv, NavBarItem, Title } from "./style";

function NavBar() {
    return (
        <Header>
            <NavBarDiv>
                <NavBarItem>
                    <Title>item</Title>
                </NavBarItem>
                <NavBarItem>
                    <Title>item 1</Title>
                </NavBarItem>
                <NavBarItem>
                    <Title>item 2</Title>
                </NavBarItem>
            </NavBarDiv>
        </Header>
    );
}

export default NavBar;