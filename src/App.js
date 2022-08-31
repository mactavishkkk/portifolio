/* React */
import React, { Fragment } from "react";

/* Components */

import Navbar from "./components/navbar";
import AboutContent from "./components/aboutContent";
import ExperienciesContent from "./components/experiencesContent";
import FormationContent from "./components/formationContent";
import TechnologiesContent from "./components/technologiesContent";
import ProjectsContent from "./components/projectsContent";
import FooterContent from "./components/footerContent";

function App() {
  return (
    <Fragment>
      <Navbar />
      <AboutContent />
      <ExperienciesContent />
      <FormationContent />
      <TechnologiesContent />
      <ProjectsContent />
      <FooterContent />
    </Fragment>
  );
}

export default App;