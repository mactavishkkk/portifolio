import React from "react";
import { Container, Content } from "./style";
import NavBar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import ProjectCards from "./ProjectCards";

function Projects() {
    document.title = "Portifolio - projects";

    return (
        <Container>
            <Content>
                <NavBar />
                <ProjectCards />
            </Content>
            <SideBar />
        </Container>
    );
}

export default Projects;