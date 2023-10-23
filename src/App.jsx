import React from "react";
import { Container, Content } from "./Style";

import NavBar from "./components/Navbar";
import Summary from "./Sections/Summary";
import Experience from "./Sections/Experience";
import Formation from "./Sections/Formation";
import Technologies from "./Sections/Technologies";
import SideBar from "./components/Sidebar";

function App() {
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

export default App;