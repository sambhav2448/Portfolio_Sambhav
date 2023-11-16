import React, { useEffect, useRef } from "react";
import { Container, Row } from "reactstrap";
import { Link } from 'react-router-dom';

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
    const vizUrl1 = "https://public.tableau.com/views/makeovermonday_17001059575720/Sheet12";
    const vizUrl2 = "https://public.tableau.com/views/makeovermonday2_17001064042910/Sheet1";

    // Load the Tableau script
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
      <Link to="/portfolio">Go to my portfolio</Link>
        <h1 className="nextstep_desc_h1">Critique by Design </h1>

        {/* Existing iframe for OECD Chart */}

        <Row className="mt-5">
        <section id="data-visualization-critique">
        <h1>Data Visualization Critique: Protein Cost Chart</h1>
        
        <h2>Key Areas for Improvement</h2>
        <ol>
            <li><strong>Clarity of Data Presentation</strong>: Reorder the protein sources by cost to highlight cost-effectiveness more intuitively.</li>
            <li><strong>Citation for Calorie Data</strong>: Provide sources for calorie data to establish credibility.</li>
            <li><strong>Improving Readability</strong>: Ensure price labels are uniformly formatted and the Y-axis is clearly titled.</li>
            <li><strong>Color Scheme Adjustments</strong>: Optimize the color scheme for accessibility and to distinguish between different types of data.</li>
            <li><strong>Simplification of Visual Elements</strong>: Reduce visual clutter to focus attention on key data.</li>
            <li><strong>Scale and Realistic Representation</strong>: Adjust the Y-axis scale to start from zero to represent cost differences accurately.</li>
            <li><strong>Interactivity and Personalization</strong>: Add interactive features to allow users to filter and sort data based on their preferences.</li>
        </ol>
        

    </section>
        </Row>


        <Row className="mt-5">
            <h1>The reason for choosing this graph</h1>
            <div class="content">
            <h1>Protein Cost Analysis for Bodybuilders</h1>
            <div class="graph-description">
                <p>For bodybuilders and fitness enthusiasts, optimizing a diet for muscle gain while managing expenses is crucial. This bar graph presents a clear cost analysis of various protein sources per 30 grams, helping those passionate about fitness make budget-friendly and health-conscious choices.</p>
                <p>The graph not only details the monetary cost but also provides insights into the caloric content of each protein source, an essential factor for those meticulously tracking their macronutrient intake. It offers a straightforward visual comparison, enabling quick identification of the most affordable and effective protein sources for muscle building and maintenance.</p>
                <p>With this graph, individuals new to fitness can easily interpret the data to align their dietary choices with their fitness goals, making it an indispensable tool for anyone serious about bodybuilding and maintaining a cost-effective diet.</p>
            </div>
            

            <img src="https://images.squarespace-cdn.com/content/v1/5d59f351fddabe00013cf3e6/f9b4b336-fe23-4260-aae3-19f6f8f72b8b/PROTEIN+COST.png?format=2500w" alt="Cost-effective Protein Sources for Fitness Enthusiasts" />
            
            <p>Data sourced from <a href="https://www.thebodybuildingdietitians.com/blog/how-cost-effective-is-your-high-protein-diet">Original Publisher</a>, Year Published.</p>
            </div>

        </Row>
        <Row className="mt-5">
                <div>
            <h2>Data Visualization Refinement Process</h2>
            
            <p><strong>Step One: Initial Design</strong></p>
            <p>I began with a simple bar graph to illustrate the cost per 20 grams of protein from various sources. This visualization was chosen for its clarity in depicting the cost-effectiveness for a target audience interested in fitness and bodybuilding.</p>
            
            <p><strong>Step Two: Critique and Insights</strong></p>
            <p>Upon critique, it was clear that the graph needed better organization. The insight gained was that aligning the data in increasing order would enhance readability and comprehension.</p>
            
            <p><strong>Step Three: User Feedback</strong></p>
            <p>During user testing, I shared the initial sketches without explanation to see if the message was conveyed effectively. Questions like "What does this graph tell you?" and "Who do you think this is for?" helped me gather feedback without leading the participants.</p>
            <p>Feedback from a student in their mid-20s suggested the need for clearer labels, while an adult in their late 50s pointed out the importance of simplifying the color scheme. Both noted the improved organization in the second draft.</p>
            
            <p><strong>Step Four: Redesign Based on Feedback</strong></p>
            <p>Based on the feedback, the second draft of the visualization presents data in ascending order, uses a simple color scheme, and ensures accuracy with no false calorie data.</p>
            
            <p><strong>Step Five: Final Redesign</strong></p>
            <p>The final redesign considers all feedback and incorporates a clear labeling system, accurate data, and a visually appealing and simple color scheme. It communicates the cost of protein sources effectively to the intended fitness-focused audience.</p>
            
            <p><strong>Additional Insights</strong></p>
            <p>Reviewing other redesigns on MakeoverMonday provided further inspiration, highlighting the importance of data accuracy and the effectiveness of a minimalist design approach.</p>
            
            <p><strong>Second Draft Visualization</strong></p>
            {/* Replace with the path to your actual image */}
            {/* <img src="path-to-second-draft-visualization.png" alt="Price per 20g Protein Bar Graph" /> */}
            
            <p><strong>Conclusion</strong></p>
            <p>My revised data visualization now effectively communicates the cost of protein sources in an organized, accurate, and user-friendly format. This process has been invaluable in enhancing my approach to data presentation.</p>
            </div>
        </Row>

        <Row className="mt-5">
            <h2>Bar Graph phase 1 </h2>
        </Row>
        {/* First Tableau Chart Container */}
        <Row>
          <div ref={tableauRef1} style={{ width: "100%", height: "645px" }} />
        </Row>

        <Row>
        <section id="protein-cost-visualization">
        <h1>Protein Cost Visualization Project</h1>
        
        <h2>Project Overview</h2>
        <p>This section of my portfolio showcases a data visualization project focused on the cost of protein-rich foods. I selected this visualization for its relevance to health-conscious individuals and budget planners interested in nutritional economics.</p>

        <h2>Design Process and Insights</h2>
        <p>My design process began with an initial visualization that, while informative, lacked certain user-centric features. Through a series of critiques, I gained valuable insights, particularly regarding the need for clearer categorization and the inclusion of dietary filters for vegan and vegetarian options. These insights led to a comprehensive redesign, which I executed using Tableau.</p>

        <h2>User Feedback Integration</h2>
        <p>User feedback was integral to my redesign. Interactions with users from diverse backgrounds revealed a preference for horizontal bar graphs, which enhance clarity and ease of comparison. Acting on this feedback, I restructured the visualization, adding filters for dietary preferences and organizing the data to emphasize cost-effectiveness.</p>

        <h2>Redesign and Rationale</h2>
        <p>The final visualization presents data in a user-friendly, horizontal format. I prioritized simplicity and clarity, allowing users to identify the most and least cost-effective protein sources at a glance. Vegan and vegetarian filters were introduced to tailor the experience to individual dietary needs, underscoring the customization aspect of the visualization.</p>

        <h2>Source Information</h2>
        <p>The original data was sourced from <a href="URL-to-original-data-source">[Name of Source]</a>. My redesign aims to enhance the data representation by providing a clear, concise, and interactive experience for users seeking to make informed dietary choices within a budget.</p>


    </section>
        </Row>

        <Row className="mt-5">
        <h2>Bar Graph - Final Redesign </h2>
        </Row>
        {/* Second Tableau Chart Container */}
        <Row>

          <div ref={tableauRef2} style={{ width: "100%", height: "645px" }} />
        </Row>
        <Row className="mt-5">
            <section>
                <h2>Protein Cost Visualization Redesign</h2>
                
                <h3>Step One: Original Visualization Selection</h3>
                <p>I selected the original bar graph because it effectively demonstrated the cost per unit of protein from various sources. This visualization was particularly relevant for audiences interested in nutrition, fitness, and budgeting. The original graph, sourced from a publicly accessible nutrition blog, laid the foundation for my project.</p>

                <h3>Step Two: Design Process Journey</h3>
                <p>Throughout the design process, I documented each step, maintaining a journal-like record of my progress. Critique methods led to insights about the importance of order and clarity, prompting a switch from a vertical to a horizontal layout for the bars. This, combined with user feedback, highlighted the necessity of a filter for vegan and vegetarian options, which I incorporated into the redesign.</p>

                <h3>Step Three: User Feedback Integration</h3>
                <p>Feedback from user interviews was instrumental. Participants expressed a preference for a horizontal bar graph over other types, like heatmaps, for its ease of understanding. Based on their insights, I emphasized the top and bottom data points for quick scanning and added dietary filters to cater to different lifestyle choices.</p>

                <h3>Step Four: Final Redesign</h3>
                <p>The final redesign is a horizontal bar graph created in Tableau, showcasing the cost of protein sources in ascending order for intuitive comprehension. The design highlights the most and least cost-effective sources and includes filters for dietary restrictions, directly addressing the needs and wants of the target audience.</p>
                
                <h3>Reflection and Credits</h3>
                <p>This redesign journey has been a rewarding experience, with valuable lessons learned about user-centric design and iterative development. A special thanks to the MakeoverMonday community for inspiration, and particularly the 'Watch Me Viz' video tutorial, which was referenced for additional design techniques.</p>
            </section>
           
        </Row>

      </Container>
    </section>
  );
}

export default Assgn1;
