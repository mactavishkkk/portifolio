import React from "react";
import { Container, Content } from "./style";

import NavBar from "../../components/Navbar";
import Summary from "./Summary";
import Experience from "./Experience";
import Formation from "./Formation";
import Technologies from "./Technologies";
import SideBar from "../../components/Sidebar";

function Home() {
    document.title = "Portifolio - home";

    return (
        <Container>
            <Content>
                <NavBar />
                <Summary />
                <Experience />
                <Formation />
                <Technologies />
            </Content>
            <SideBar />
        </Container>
    );
}

export default Home;