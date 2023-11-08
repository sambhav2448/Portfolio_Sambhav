import React, { useEffect, useRef } from "react";
import { Container, Row } from "reactstrap";
import TableauReact from "../components/nextsteps/tabchart"
function Assgn1p2() {
  const ref = useRef(null);

  useEffect(() => {
    // Function to initialize the Tableau viz
    const initViz = () => {
      // Check if the tableau API is loaded
      if (window.tableau) {
        // Create a new viz using the ref's current DOM node
        new window.tableau.Viz(ref.current, "https://public.tableau.com/views/Book1_16993980831600/Visualizinggovernmentdebt", {
          hideTabs: true,
          width: "100%",
          height: "645px",
          onFirstInteractive: () => {
            console.log("Tableau viz is interactive");
          }
        });
      }
    };

    // Load the Tableau script
    const tableauScript = document.createElement("script");
    tableauScript.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    tableauScript.onload = initViz; // Initialize the visualization once the script is loaded
    document.head.appendChild(tableauScript);

    return () => {
      // Clean up the script element
      document.head.removeChild(tableauScript);
    };
  }, []);

  return (
    <section className="aboutme content_cursor" id="about">
      <Container>
        <h1 className="nextstep_desc_h1"> Weather Viz</h1>

        
        <Row>
          {/* <TableauReact/> */}
        </Row>

      </Container>
    </section>
  );
}

export default Assgn1p2;
