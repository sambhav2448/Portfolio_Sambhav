import React, { useEffect, useRef } from "react";
import { Container, Row } from "reactstrap";
import { Link } from 'react-router-dom';

import sp1 from '../assets/final2-1.png'; // Adjust the path accordingly
import sp2 from '../assets/final2-2.png'; // Adjust the path accordingly
import sp3 from '../assets/final2-3.png'; // Adjust the path accordingly

function Assgn4() {
  
  // Create refs for each Tableau viz
  const tableauRef1 = useRef(null);

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
    const vizUrl1 = "https://public.tableau.com/views/PercentofUSPopulationAccessingInternet1991-2010/GenreYear";

    // Load the Tableau script
// https://public.tableau.com/views/book2_16994094637410/Sheet1?:language=en-GB&publish=yes&:display_count=n&:origin=viz_share_link
    // Load the Tableau script
    const tableauScript = document.createElement("script");
    tableauScript.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    tableauScript.onload = () => {
      initViz(tableauRef1, vizUrl1);
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
      <Link to="/finalproject">Go to my project history</Link>

      <div className="row mt-2">
            <div className="col-lg-12">
                <h1 className="display-4">Final Project: The Rise of Pop Music</h1>
                <p className="lead">
                    An exploration into the dynamic world of pop music over time.
                </p>
                <hr className="my-4" />
                <p>
                My project aims to explore the intricate relationship between the rise of the internet and its impact on the evolution of music genres.
                It focuses on the shift in popularity among genres such as rock, country, hip-hop, and the subsequent rise of pop music. 
                The goal is to reveal how digital transformation has reshaped the music landscape, highlighting key moments and transitions in music history.
                </p>
            </div>
        </div>

      <div className="container mt-5">
    <div className="row">
        <div className="col">
            <h2>Wireframes / Storyboards</h2>
            <p>
                Developing Story Outline: The story of pop music's growth is segmented into key eras, 
                each visualized distinctly. This includes the pre-internet era, the rise of digital platforms, 
                and the streaming age. High-fidelity visual drafts will highlight trends in pop music's 
                popularity, technological influences, and key historical moments.
            </p>
    
        </div>
    </div>
    <div className="container mt-5">
        <div className="row">
            <div className="col">
                <h2>Exploring the Evolution of Music</h2>

                {/* Internet Growth and Music Trends */}
                <div className="mt-4">
                    <h3>Internet Growth and Music Trends</h3>
                    <p className="mb-1">
                    As we dive into the story of music's evolution, our first stop is the graph of internet growth in the US from 1991 to 2010. This key piece of data sets the stage, showing how the digital revolution began to weave its way into the fabric of our lives, particularly from 1995 onwards. It's crucial to understand this backdrop as we explore how these technological waves corresponded with shifts in music listening and production. This graph isn't just about internet lines and dots; it's the prologue to our story of musical metamorphosis.
                    </p>
<p className="text-center bold">Growth of Internet in the US (percentage vs years)</p>
                    <img src={sp1} className="img-fluid"  />

                </div>

                {/* Genre Popularity Over Time */}
                <div className="mt-4">
                    <h3>Genre Popularity Over Time</h3>
                    <p>
                    Next, we turn our lens to a colorful bar graph that brings to life the ebb and flow of various music genres on the Billboard Top 100 chart from 1980 to 2009. Here, we see the narrative of genres - the rise and fall of rock, the ascent of hip-hop, and the steady heartbeat of country music. Particularly post-1996, this visualization reveals an expanding diversity in the music landscape, echoing the burgeoning internet era. It's a story of transformation, where each bar and color shift echoes a change in our collective musical heartbeat.
                    </p>
                    <div ref={tableauRef1} style={{ width: "100%", height: "645px" }} />
                    <p className="mt-4">

Between the 1950s and 1980s, various music genres experienced a steady increase in popularity. However, Blues was an outlier, witnessing a decline during the 80s. The 80s also marked a significant rise in the popularity of Electronic music. In the 1990s and continuing into the 2000s, there was a notable surge in the popularity of several genres, including Rock, Pop, Electronic, and Indie. This era coincided with the advent of music sharing technologies, such as MP3s and digital downloads, and saw a substantial growth in independent music labels.
            </p>
                </div>

                {/* Country, Rock, and Pop in the Top 100 */}
                <div className="mt-4">
                    <h3>Country, Rock, and Pop in the Top 100</h3>
                    <p>
                    As we focus more narrowly, we find ourselves looking at the trajectories of country, rock, and pop within the Top 100. This part of the story is told through a line graph, tracing the presence of these genres through the decades. We observe the undulating paths of country and rock, and importantly, the emergent dominance of pop, painting a picture of changing tastes and cultural shifts. It’s like watching a dance of musical genres, each stepping into and out of the spotlight over time.
                    </p>

                    <img src={sp3} className="img-fluid"  />
                </div>

                {/* Heatmap of Popular Genres */}
                {/* <div className="mt-4">
                    <h3>Heatmap of Popular Genres</h3>
                    <p>
                    The narrative then unfolds into a heatmap, a vibrant representation of the most popular genres in the Top 100. It's a visual symphony of colors, where each hue and intensity speaks to a genre's prevalence in a given year. This heatmap isn't just about data points; it's a tapestry of times and tunes, showing us at a glance how our musical preferences have evolved in the warmth and color of popular culture.
                    </p>
                </div> */}

                {/* Danceability and Spotify Trends */}
                <div className="mt-4">
                    <h3>Danceability and Spotify Trends</h3>
                    <p>
                    Incorporating data from Spotify, we delve into the attributes of pop songs, particularly focusing on danceability. Through a dynamic graph, we explore how this attribute has influenced the popularity of pop music. It's a story that dances to the rhythm of beats and tempos, inviting us to see how the pulse of danceability in pop music has resonated with audiences
                    </p>
                </div>

                {/* Growth of Top Pop Artists */}
                <div className="mt-4">
                    <h3>Growth of Top Pop Artists</h3>
                    <p>
                    Finally, our journey culminates in the stories of top pop artists, their growth charted through a series of engaging visualizations. This is where the narrative becomes personal, charting the journeys of artists who have shaped the pop genre. It's more than a graph; it’s a homage to the stars of pop, their crescendos and diminuendos, and their indelible imprint on the soundtrack of our lives.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col">
            <h2>User Research:</h2>
            <h3>Target Audience</h3>
            <p>Our project aims to engage music enthusiasts, historians, and educators, with a specific focus on individuals like music bloggers, academic researchers, and music teachers.</p>

            <h3>Interview Script</h3>
            <p>Our goal is to understand perceptions of pop music's evolution, especially in relation to technological advancements.</p>
            
            <h3>Interview Findings</h3>
            <p>Key insights gathered from the interviews include the significant impact of the internet on pop music distribution and consumption, and the rise of diverse musical styles influenced by technology.</p>
        </div>
    </div>

    <div className="row">
        <div className="col">
            <table className="table mb-4 mt-2">
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Interview 1</th>
                        <th>Interview 2</th>
                        <th>Interview 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>How do you perceive the evolution of pop music over the last few decades?</td>
                        <td>Pop music has diversified, with increased accessibility via streaming platforms.</td>
                        <td>Shift from industry-driven to artist-centric, facilitated by digital media.</td>
                        <td>Globalization's influence has led to a blend of cultural elements in pop music.</td>
                    </tr>
                    <tr>
                        <td>What impact do you think technological advancements have had on pop music?</td>
                        <td>Social media democratized music production and distribution.</td>
                        <td>Technology has accelerated trend cycles, giving artists more content control.</td>
                        <td>Streaming has transformed consumption, favoring singles over albums.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div className="row">
        <div className="col">
    <h2>My Research Journey</h2>
            
        <p>My journey began with a deep dive into the vast ocean of music history, tracing the ebb and flow of genres and artists over decades. As I sifted through the dataset, patterns began to emerge, telling stories of artistic triumphs and the ever-changing tastes of society.</p>

<p>Seeking to ground my insights in reality, I reached out to a diverse group of music enthusiasts and industry experts. Their feedback was invaluable, sharpening my focus and challenging my assumptions. Engaging with community forums and social media groups dedicated to music analytics provided a sounding board for my initial findings and enriched the narrative with a chorus of perspectives.</p>

<p>The iterative process of sketching visualizations, gathering feedback, and refining my approach was both humbling and enlightening. Each conversation added a layer of depth to my understanding, enabling me to craft a story not just of numbers and trends, but of human connection to the rhythm and melodies that define eras.</p>

<p>This project is more than an academic exercise; it is a tribute to the universal language of music and a testament to the power of data in revealing the heartbeat of our collective experience.</p>

        </div>
        <br></br>

        </div>


    {/* <div className="row">
        <div className="col">
            <h2>Moodboards / Personas</h2>
            <p>
                I utilized vibrant colors and dynamic visuals in our moodboards to capture the essence of pop music. 
                Personas created for our project include a music teacher, a young music enthusiast, 
                and a music historian, each bringing a unique perspective to our narrative.
            </p>
        </div>
    </div> */}

    <div class="row mt-4">
    <div className="col">
        <h2>Project Enhancement Plan:</h2>
        
        <div class="mt-4">
            <h3>Expand on Historical Context</h3>
            <p> Delve deeper into the history of the subject, providing a richer, more comprehensive story.</p>
        </div>

        <div class="mt-1">
            <h3>Current Pop Culture Analysis</h3>
            <p>Include an in-depth analysis of current trends in pop culture, examining how they have evolved and their impact today.</p>
        </div>

        <div class="mt-1">
            <h3>Set Priorities and Timeline</h3>
            <p>PPrioritize these changes based on their impact and urgency. Establish a timeline for when these changes will be implemented.</p>
        </div>

        <div class="mt-1">
            <h3>Document the Plan</h3>
            <p>Clearly document the planned changes, including the rationale behind each change, the steps for implementation, and the expected benefits.</p>
        </div>

        <div class="mt-1">
            <h3>Review and Approval</h3>
            <p>Present the plan to relevant stakeholders for review and approval before implementation.</p>
        </div>
    </div>
    </div>
</div>

      </Container>
    </section>
  );
}

export default Assgn4;
