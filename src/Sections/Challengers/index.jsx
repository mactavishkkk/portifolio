import React from "react";
import { Container, Content } from "./style";
import NavBar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";

function Challengers() {
    return (
        <Container>
            <Content>
                <NavBar />
                <h1>Hello world challengers</h1>
            </Content>
            <SideBar />
        </Container>
    );
}

export default Challengers;