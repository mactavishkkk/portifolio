import React from "react";
import { Header, NavBarDiv, NavBarItem, Title } from "./style";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <Header>
            <NavBarDiv>
                <NavBarItem>
                    <Link to="/">
                        <Title>home</Title>
                    </Link>
                </NavBarItem>
                <NavBarItem>
                    <Link to="/challengers">
                        <Title>challengers</Title>
                    </Link>
                </NavBarItem>
                <NavBarItem>
                    <Link to="/projects">
                        <Title>projects</Title>
                    </Link>
                </NavBarItem>
            </NavBarDiv>
        </Header>
    );
}

export default NavBar;