import React from "react";
import "./App.css";
import Landingpage from "./screens/landing";
import About from "./screens/aboutme";
import NextStep from "./screens/nextstep";
import Experience from "./screens/experience";
import Achievement from "./screens/achievement";
import Project from "./screens/projects";
import Blog from "./screens/myblogs";
import Contactme from "./screens/contactme";
import Scroll from "./components/scrollToTop/scroll";
import Assgn1 from "./screens/Assgn1";
import Assgn2 from "./screens/Assgn2";
import Assgn3 from "./screens/Assgn3";
import Assgn4 from "./screens/Assgn4";
import Assgn5 from "./screens/Assgn5";
import NavbarP from "./components/navlinks";

import Assgn1p2 from "./screens/Assgn1p2";

// import "../src/components/scrollToTop/scroll.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Landingpage />
            <About />
            <Experience />
            <Achievement />
            <Project name="My Projects"/>
            <Blog />
            <Contactme />
            <Scroll />
          </Route>

          <Route path="/portfolio" >
            <NavbarP/>
            <Landingpage />
            <About />
            <NextStep/>
            <Project name="Portfolio"/>
            <Assgn1/>
          </Route>

          <Route path="/makeovermonday" >
          <NavbarP/>

            <Assgn2/>
          </Route>

          <Route path="/finalproject" >
          <NavbarP/>

            {/* <Landingpage /> */}
            <Assgn3/>
          </Route>

          <Route path="/finalproject_part2" >
          <NavbarP/>

            {/* <Landingpage /> */}
            <Assgn4/>
          </Route>

          <Route path="/finalproject_part3" >
          <NavbarP/>

            <Assgn5/>
            </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
