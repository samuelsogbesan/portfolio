import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./MainMenu";
//import ProjectView from "./ProjectView";
import Projects from "./Projects"
//import CV from "./CV";
import SocialsMenu from "./SocialsMenu";
import Redirecter from "./Redirecter";
import Email from "./Email";
import CV from "./CV";
import Home from "./Home";

function App() {
  const [animate, setAnimate] = useState(false);
  return (
    <Router basename="portfolio/">
      <Menu animate={animate} />
      
      <Route exact path="/" render={(props) => <Home setAnimate={setAnimate} />} />
      <Route path="/projects" render={(props) => <Projects setAnimate={setAnimate} />} />
      <Route exact path="/cv" component={CV} />

      <Route exact path="/email" component={Email} />

      <Route exact path="/linkedin" render={(props) => <Redirecter interval={500} steps={[
        { action: () => window.open("https://www.linkedin.com/in/samuel-sogbesan/", "_blank"), message: "Redirecting to linkedin..." },
        { action: () => props.history.push("/"), message: "Redirecting" }
      ]} />}
      />

      <Route exact path="/github" render={(props) => <Redirecter interval={500} steps={[
        { action: () => window.open("https://www.github.com/samuelsogbesan/", "_blank"), message: "Redirecting to linkedin..." },
        { action: () => props.history.push("/"), message: "Redirecting" }
      ]} />}
      />
    <SocialsMenu />
    </Router>
  );
}

export default App;
