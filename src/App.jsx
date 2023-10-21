import React from "react";
import { Container, Content } from "./Style";

import NavBar from "./Sections/Navbar";
import Summary from "./Sections/Summary";
import Experience from "./Sections/Experience";
import Formation from "./Sections/Formation";
import Technologies from "./Sections/Technologies";

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
    </Container>
  );
}

export default App;