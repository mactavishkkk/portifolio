import React from "react";
import { Container, Content } from "./style";
import NavBar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";

function Projects() {
    document.title = "Portifolio - projects";
    return (
        <Container>
            <Content>
                <NavBar />
                <h1>Hello world projects</h1>
            </Content>
            <SideBar />
        </Container>
    );
}

export default Projects;