import React from "react";
import { Container, Content } from "./style";
import NavBar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";

import Image from "../../assets/challengers/fpta-one.jpg";
import ImageOne from "../../assets/challengers/fpta-three.jpg";
import ImageTwo from "../../assets/challengers/fpta-two.jpg";
import ProjectCards from "./ProjectCards";

function Projects() {
    document.title = "Portifolio - projects";

    const projects = [
        {
            title: "Projeto 1",
            description: "Descrição do Projeto 1",
            photo: Image
        },
        {
            title: "Projeto 2",
            description: "Descrição do Projeto 2",
            photo: ImageOne,
        },
        {
            title: "Projeto 2",
            description: "Descrição do Projeto 2",
            photo: ImageTwo,
        },
        {
            title: "Projeto 1",
            description: "Descrição do Projeto 1",
            photo: Image
        },
        {
            title: "Projeto 2",
            description: "Descrição do Projeto 2",
            photo: ImageOne,
        },
        {
            title: "Projeto 2",
            description: "Descrição do Projeto 2",
            photo: ImageTwo,
        },
    ];

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