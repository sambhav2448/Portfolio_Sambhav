import React, { useEffect, useRef } from "react";
import { Container, Row } from "reactstrap";

function Assgn1() {
  // Create refs for each Tableau viz
  const tableauRef1 = useRef(null);
  const tableauRef2 = useRef(null);

  // Initialization function for Tableau vizzes
  const initViz = (ref, url) => {
    if (window.tableau && ref.current) {
      new window.tableau.Viz(ref.current, url, {
        hideTabs: true,
        width: "100%",
        height: "645px",
        onFirstInteractive: () => {
          console.log("Tableau viz is interactive");
        },
      });
    }
  };

  useEffect(() => {
    // URLs for the Tableau vizzes
    const vizUrl1 = "https://public.tableau.com/views/Book1_16993980831600/Visualizinggovernmentdebt";
    const vizUrl2 = "https://public.tableau.com/views/book2_16994094637410/Sheet1";
// https://public.tableau.com/views/book2_16994094637410/Sheet1?:language=en-GB&publish=yes&:display_count=n&:origin=viz_share_link
    // Load the Tableau script
    const tableauScript = document.createElement("script");
    tableauScript.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    tableauScript.onload = () => {
      initViz(tableauRef1, vizUrl1);
      initViz(tableauRef2, vizUrl2); // Initialize the second viz
    };
    document.head.appendChild(tableauScript);

    // Clean up the script element
    return () => {
      document.head.removeChild(tableauScript);
    };
  }, []);

  return (
    <section className="aboutme content_cursor" id="about">
      <Container>
        <h1 className="nextstep_desc_h1">Government Debt Viz</h1>

        {/* Existing iframe for OECD Chart */}
        <Row>
            <h2>government debt bar chart</h2>
        </Row>
        <Row>
          <iframe 
            src="https://data.oecd.org/chart/7f9Z"
            width="860" 
            height="645"
            style={{ border: 0 }}
            allowFullScreen
            title="OECD Chart"
          >
            {/* Fallback link */}
            <a href="https://data.oecd.org/chart/7f9Z" target="_blank" rel="noopener noreferrer">
              OECD Chart: General government debt, Total, % of GDP, Annual, 2020
            </a>
          </iframe>
        </Row>

        <Row>
            <h2>Heat Map</h2>
        </Row>
        {/* First Tableau Chart Container */}
        <Row>
          <div ref={tableauRef1} style={{ width: "100%", height: "645px" }} />
        </Row>

        <Row>
            <h1>Tree Map</h1>
        </Row>
        {/* Second Tableau Chart Container */}
        <Row>

          <div ref={tableauRef2} style={{ width: "100%", height: "645px" }} />
        </Row>
        <Row>
            <h4>
                This graph is heat map represneation...
            </h4>
        </Row>

      </Container>
    </section>
  );
}

export default Assgn1;
