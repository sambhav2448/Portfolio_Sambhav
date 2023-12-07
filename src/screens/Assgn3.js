import React, { useEffect, useRef } from "react";
import { Container, Row } from "reactstrap";
import { Link } from 'react-router-dom';
// import sketch1 from './path_to_sketch1.jpg'; // Adjust the path accordingly
// import sketch2 from './path_to_sketch2.jpg'; // Adjust the path accordingly
import sp1 from '../assets/portfolio/sp1.png'; // Adjust the path accordingly
import sp2 from '../assets/portfolio/sp2.png'; // Adjust the path accordingly
import sp3 from '../assets/portfolio/sp3.png'; // Adjust the path accordingly
import sp4 from '../assets/portfolio/sp4.png'; // Adjust the path accordingly
import sp5 from '../assets/portfolio/sp5.png'; // Adjust the path accordingly
import sp6 from '../assets/portfolio/sp6.png'; // Adjust the path accordingly

function Assgn3() {
  

 

  return (
    <section className="aboutme content_cursor" id="about">
      <Container>
      <Link to="/portfolio">Go to my portfolio</Link>



    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-lg-12">
                <h1 className="display-4">Final Project: Music Trends Analysis</h1>
                <p className="lead">
                    An exploration into the dynamic world of music through Spotify's extensive dataset.
                </p>
                <hr className="my-4" />
                <p>
                    This project aims to uncover hidden patterns and trends within the music industry over time,
                    focusing on track popularity, artist development, and the evolution of musical attributes such as danceability and energy.
                </p>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-12">
                <h2>Project Overview: </h2>
                <p>
                    The project will include an in-depth analysis of artist growth over time, popularity of tracks, and the correlation between song attributes and popularity.
                </p>
<br></br>
                <h3>High-Level Summary</h3>
            <p>
                This project delves into the rich dataset of Spotify, spanning from 1921 to 2020, to explore and analyze the evolving trends in music. The focus is on understanding how artists' popularity, track characteristics like danceability and energy, and genre shifts have transformed over time. This analysis aims to uncover the underlying patterns that drive music evolution and its reflection on societal changes.
            </p>
            <h3>Project Structure</h3>
            <ul>
                <li><strong>Introduction:</strong> Setting the stage with an overview of music trends and their significance.</li>
                <li><strong>Data Analysis:</strong> Presenting a thorough analysis of the dataset, focusing on key metrics like artist popularity, track attributes, and their temporal dynamics.</li>
                <li><strong>Visualizations:</strong> Using interactive data visualizations to illustrate the findings and offer an engaging narrative.</li>
                <li><strong>Conclusion:</strong> Summarizing the insights gained, their cultural implications, and potential future trends in the music industry.</li>
            </ul>
            </div>
        </div>
        <div class="container mt-3">
    <div class="row">
        <div class="col-lg-12">
            <h2>Dataset Overview</h2>
            <p>
                The Spotify Dataset, spanning from 1921 to 2020, encompasses over 600,000 tracks. It includes detailed information such as track names, artist details, release dates, and a variety of musical attributes like danceability, energy, and tempo. This rich dataset provides a unique opportunity to analyze the evolution of music over a century.
            </p>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12">
            <h2>Project Outline</h2>
            <ul>
                <li><strong>Introduction:</strong> Presenting the dataset and the main objectives of the analysis.</li>
                <li><strong>Data Analysis Approach:</strong> Description of the data processing and analysis methodologies.</li>
                <li><strong>Key Themes for Exploration:</strong> Exploration of artist growth, track popularity trends, and musical attribute correlations.</li>
                <li><strong>Tools and Methods:</strong> Utilizing Python for data processing and Tableau for visualization.</li>
                <li><strong>Conclusion:</strong> Summarizing the findings and discussing their implications in the context of the music industry.</li>
            </ul>
        </div>
    </div>
</div>


        <div className="row">
            <div className="col-lg-12">
                <h2>Data Source</h2>
                <p>
                    The primary dataset is sourced from Kaggle: <a href="https://www.kaggle.com/datasets/yamaerenay/spotify-dataset-19212020-600k-tracks/" target="_blank" rel="noopener noreferrer">
                        Spotify Dataset 1921-2020, 600k+ Tracks
                    </a>.
                </p>
            </div>
        </div>
        <br></br>

        <div className="row">
            <div className="col-lg-12">
                <h2>Method and Medium</h2>
                <p>
                    The project will be presented through interactive data visualizations and a narrative guiding the viewer through music trends.
                </p>
                <p>
                In my final project, I will employ a combination of qualitative and quantitative research methods. This will include in-depth data analysis using tools like Python for initial data processing and statistical analysis. To bring the data to life, I will use Tableau for creating interactive and engaging visualizations. The final presentation of the project will be hosted on a digital platform, possibly a website or a blog, where viewers can interact with the visualizations and grasp the story behind the data. This approach ensures a comprehensive understanding of the music trends depicted in the Spotify dataset.
                </p>
                
            </div>
        </div>

        
        <br></br>

        <div className="row">
            <div className="col-lg-12">
                <h2>Visualization Sketches</h2>
                 {/* Display images in a grid layout */}
                      {[sp1, sp2, sp3, sp4, sp5, sp6].map((image, index) => (
                  <div className="col-md-12 mb-3" key={index}>
                      <img src={image} className="img-fluid" alt={`Sketch ${index + 1}`} />
                  </div>
              ))}
            </div>
        </div>
        <br></br>
        <br></br>

        <div className="row">
        <div className="col-lg-12">
            <h2>My Research Journey</h2>
            <p>
                My journey began with a deep dive into the vast ocean of music history,
                tracing the ebb and flow of genres and artists over decades. As I sifted through
                the dataset, patterns began to emerge, telling stories of artistic triumphs and
                the ever-changing tastes of society.
            </p>
            <p>
                Seeking to ground my insights in reality, I reached out to a diverse group of
                music enthusiasts and industry experts. Their feedback was invaluable, sharpening
                my focus and challenging my assumptions. Engaging with community forums and social
                media groups dedicated to music analytics provided a sounding board for my initial
                findings and enriched the narrative with a chorus of perspectives.
            </p>
            <p>
                The iterative process of sketching visualizations, gathering feedback, and refining
                my approach was both humbling and enlightening. Each conversation added a layer of
                depth to my understanding, enabling me to craft a story not just of numbers and
                trends, but of human connection to the rhythm and melodies that define eras.
            </p>
            <p>
                This project is more than an academic exercise; it is a tribute to the universal
                language of music and a testament to the power of data in revealing the heartbeat
                of our collective experience.
            </p>
        </div>
        <br></br>
        <br></br>

      
        </div>
    </div>



      </Container>
    </section>
  );
}

export default Assgn3;
