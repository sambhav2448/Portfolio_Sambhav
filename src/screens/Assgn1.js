import React, { useEffect, useRef } from "react";
import { Container, Row } from "reactstrap";
import {Link} from 'react-router-dom'

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
      <Link to="/makeovermonday">Go to my makeovermonday</Link>
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
        
        
        <Row>

          <div ref={tableauRef2} style={{ width: "100%", height: "645px" }} />
        </Row>
        <Row>
        {/* <section id="government-debt-treemap"> */}
        <div id="visualization-comparison" style={{ marginTop: "64px" }}>
            <h2>Comparative Analysis of Visualization Methods</h2>
            <p>
                Data visualization is an essential facet of data analysis that aids in the comprehension and communication of complex data. The selection of the visualization method is crucial, as it can significantly affect the interpretation and insights derived from the data.
            </p>
            <p>
                Our first visualization was a <strong>bar graph</strong>, which is particularly effective for comparing discrete quantities. It showcased the government debt-to-GDP ratio for various countries, making it easy to see the differences in debt levels at a specific point in time.
            </p>
            <p>
                The second visualization, a <strong>heatmap</strong>, transitioned from the simplicity of the bar graph to a more complex representation. It provided a two-dimensional representation of data where values were denoted by colors, offering an overview of how these debt ratios distribute across a plane — ideal for spotting trends and outliers in a dataset.
            </p>
            <p>
                For the third visualization, I chose a <strong>treemap</strong>. This method divides the space into rectangles that represent different countries, with size corresponding to GDP and color representing the debt-to-GDP ratio. Unlike the heatmap, which uses spatial distribution, the treemap combines hierarchical structuring with size and color coding to display multiple dimensions of the data. The use of green and red gradients allows for quick identification of countries with debt ratios above and below 100%, respectively. This visualization method is especially useful for displaying large amounts of hierarchical data, making it an excellent tool for summarizing complex information in a compact space.
            </p>
            <p>
                Each method has its strengths: bar graphs excel in clarity, heatmaps in pattern identification, and treemaps in hierarchical data representation. The choice of a treemap for our final visualization was driven by the need to present the government debt data in a format that allows for immediate visual comparison across multiple dimensions while ensuring that the viewer can interact and delve into specific regions for detailed analysis.
            </p>
    
        </div>
            <h2 style={{ marginTop: "64px" }}>General Government Debt Treemap</h2>
            <p>
                This treemap provides a comprehensive view of global general government debt-to-GDP ratios, a pivotal indicator of financial sustainability. Each rectangle represents a country, sized proportionally to its GDP and color-coded to reflect its debt level—shades of green denote ratios above 100%, indicating higher debt relative to the country's economic output, while red shades signify ratios below 100%.
            </p>
            <h3>Interactive Exploration</h3>
            <p>
                Dive into the specifics with our interactive location filter, allowing a focused examination of regions and countries of interest. This tailored approach simplifies the exploration of dense data, providing a clearer picture than a traditional heatmap when dealing with extensive datasets.
            </p>
            <h3>Why a Treemap?</h3>
            <p>
                We chose a treemap for its unique ability to organize complex information hierarchically, giving immediate insight into the relative debt positions of countries worldwide. The color gradient, carefully selected to differentiate debt levels at a glance, emphasizes the balance between economic size and debt proportion.
            </p>
            <p>
                With this visualization, stakeholders and policymakers can instantly identify areas of high leverage, informing strategies for economic planning and international comparison.
            </p>
            <p class="source-note">
                *Note: Data reflects the most recent publication from "Government at a Glance (2023)".*
            </p>
        {/* </section> */}

        </Row>

      </Container>
    </section>
  );
}

export default Assgn1;
