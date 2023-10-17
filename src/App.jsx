import React from "react";
import { Container, Content } from "./Style";

import NavBar from "./Sections/Navbar";
import Summary from "./Sections/Summary";
import Experience from "./Sections/Experience";
import Formation from "./Sections/Formation";

function App() {
  return (
    <Container>
      <Content>
        <NavBar />
        <Summary />
        <Experience />
        <Formation />
      </Content>
    </Container>
  );
}

export default App;