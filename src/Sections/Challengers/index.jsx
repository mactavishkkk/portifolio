import React from "react";
import { Container, Content } from "./style";
import NavBar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import Section from "./Holdings";

function Challengers() {
    document.title = "Portifolio - challengers";

    return (
        <Container>
            <Content>
                <NavBar />
                <Section />
            </Content>
            <SideBar />
        </Container>
    );
}

export default Challengers;