import React from "react";
import "./App.css";
import Landingpage from "./screens/landing";
import About from "./screens/aboutme";
import Experience from "./screens/experience";
import Achievement from "./screens/achievement";
import Project from "./screens/projects";
import Blog from "./screens/myblogs";
import Contactme from "./screens/contactme";
import Scroll from "./components/scrollToTop/scroll";
// import "../src/components/scrollToTop/scroll.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Landingpage />
            <About />
            <Experience />
            <Achievement />
            <Project />
            <Blog />
            <Contactme />
            <Scroll />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
